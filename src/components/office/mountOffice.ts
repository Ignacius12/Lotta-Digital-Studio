import * as THREE from 'three'

type Handle = {
  setPointer: (x: number, y: number) => void
  setPaused: (paused: boolean) => void
  setReduced: (reduced: boolean) => void
  destroy: () => void
}

type Tick = (time: number) => void

const ROOM = 8

export function mountOffice(
  container: HTMLElement,
  reducedMotion: boolean,
  onLost: () => void,
): Handle {
  const scene = new THREE.Scene()

  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 80)
  const base = new THREE.Vector3(11.4, 9.2, 11.4)
  const look = new THREE.Vector3(-0.2, 0.95, -0.25)
  const desired = new THREE.Vector3()
  camera.position.copy(base)
  camera.lookAt(look)

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  })
  const small = window.matchMedia('(max-width: 700px)').matches
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, small ? 1.25 : 1.5))
  renderer.setClearColor(0x000000, 0)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.18
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap

  const canvas = renderer.domElement
  canvas.style.width = '100%'
  canvas.style.height = '100%'
  canvas.style.display = 'block'
  canvas.style.background = 'transparent'
  canvas.style.touchAction = 'pan-y'
  canvas.className = 'office-canvas'
  canvas.setAttribute('aria-hidden', 'true')
  container.appendChild(canvas)

  const white = standard('#f4f1ea', 0.82)
  const shelfWood = standard('#e4c094', 0.58)
  const black = standard('#1a1a1a', 0.4)
  const metal = standard('#8b9198', 0.35, 0.4)
  const partitionMat = standard('#c9ccd1', 0.72)
  const floorMat = new THREE.MeshStandardMaterial({
    map: woodTexture(),
    roughness: 0.8,
    metalness: 0,
  })

  scene.add(new THREE.HemisphereLight('#fff8ef', '#c4a574', 0.72))
  const sun = new THREE.DirectionalLight('#fff3df', 2.35)
  sun.position.set(-9, 11, 4)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  sun.shadow.camera.near = 2
  sun.shadow.camera.far = 32
  sun.shadow.camera.left = -9
  sun.shadow.camera.right = 9
  sun.shadow.camera.top = 9
  sun.shadow.camera.bottom = -9
  sun.shadow.bias = -0.0006
  scene.add(sun)
  const fill = new THREE.DirectionalLight('#ffffff', 0.38)
  fill.position.set(7, 6, 8)
  scene.add(fill)

  const floor = mesh(new THREE.BoxGeometry(ROOM, 0.22, ROOM), floorMat)
  floor.position.y = -0.11
  scene.add(floor)

  addWindowWall(scene, white, black)
  addBackWall(scene, white)
  addBookshelf(scene, shelfWood)

  const cluster = new THREE.Group()
  cluster.position.set(0.15, 0, 0.35)
  cluster.scale.setScalar(1.16)
  scene.add(cluster)

  const bridge = mesh(new THREE.BoxGeometry(1.9, 0.06, 1.9), white)
  bridge.position.y = 0.74
  const crossX = mesh(new THREE.BoxGeometry(1.85, 0.46, 0.04), partitionMat)
  crossX.position.y = 1
  const crossZ = mesh(new THREE.BoxGeometry(0.04, 0.46, 1.85), partitionMat)
  crossZ.position.y = 1
  cluster.add(bridge, crossX, crossZ)

  const ticks: Tick[] = []
  const screens: Array<(time: number) => void> = []
  const desks = [
    { x: 0, z: 1.2, rot: 0, chair: '#111111', shirt: '#14b8a6', skin: '#f0c7a4', paper: '#7c3aed', note: '#fde047' },
    { x: 1.2, z: 0, rot: Math.PI / 2, chair: '#0f766e', shirt: '#f4f1ea', skin: '#d89a6a', paper: '#fb7185', note: '#60a5fa' },
    { x: 0, z: -1.2, rot: Math.PI, chair: '#111111', shirt: '#0f766e', skin: '#e7b892', paper: '#fde047', note: '#7c3aed' },
    { x: -1.2, z: 0, rot: -Math.PI / 2, chair: '#0f766e', shirt: '#1e3a5f', skin: '#8d5524', paper: '#60a5fa', note: '#fb7185' },
  ]

  desks.forEach((desk, index) => {
    const built = createDesk(desk, white, black, metal)
    built.group.position.set(desk.x, 0, desk.z)
    built.group.rotation.y = desk.rot
    cluster.add(built.group)
    screens.push(built.drawScreen)
    const phase = index * 1.3
    const speed = 6.4 + index * 0.7
    ticks.push((time) => {
      const wave = Math.sin(time * speed + phase) * 0.028
      built.leftArm.position.y = 0.84 + wave
      built.rightArm.position.y = 0.84 - wave
      built.head.rotation.y = Math.sin(time * 0.6 + phase) * 0.1
      built.head.rotation.x = 0.15 + Math.sin(time * 1.3 + phase) * 0.04
    })
  })

  const pointer = { x: 0, y: 0 }
  let paused = false
  let reduced = reducedMotion
  let visible = true
  let raf = 0
  let loopOn = false

  const resize = () => {
    const width = container.clientWidth
    const height = container.clientHeight
    if (width < 2 || height < 2) return
    const desktop = window.matchMedia('(min-width: 1024px)').matches
    const aspect = width / height
    if (desktop) {
      const halfW = 5.75
      const vertical = halfW / aspect
      camera.left = -halfW
      camera.right = halfW
      camera.top = vertical
      camera.bottom = -vertical
    } else {
      const view = 6.7
      const span = view * aspect
      camera.left = -span
      camera.right = span
      camera.top = view
      camera.bottom = -view
    }
    camera.updateProjectionMatrix()
    renderer.setSize(width, height, false)
  }

  const renderFrame = (time: number) => {
    screens.forEach((draw) => draw(time))
    if (!reduced && !paused) ticks.forEach((tick) => tick(time))
    const influence = reduced || paused ? 0 : 1
    desired.set(
      base.x + pointer.x * 0.55 * influence,
      base.y - pointer.y * 0.28 * influence,
      base.z - pointer.x * 0.35 * influence,
    )
    camera.position.lerp(desired, reduced ? 1 : 0.06)
    camera.lookAt(look)
    renderer.render(scene, camera)
  }

  const frame = (now: number) => {
    if (!loopOn) return
    raf = requestAnimationFrame(frame)
    renderFrame(now / 1000)
  }

  const start = () => {
    if (loopOn || paused || reduced || !visible) return
    loopOn = true
    raf = requestAnimationFrame(frame)
  }

  const stop = () => {
    loopOn = false
    cancelAnimationFrame(raf)
  }

  resize()
  renderFrame(0)
  requestAnimationFrame(() => canvas.classList.add('is-ready'))
  start()

  const resizeObserver = new ResizeObserver(resize)
  resizeObserver.observe(container)

  const intersection = new IntersectionObserver(
    ([entry]) => {
      visible = entry?.isIntersecting ?? false
      if (visible) start()
      else stop()
    },
    { threshold: 0.08 },
  )
  intersection.observe(container)

  const onContextLost = (event: Event) => {
    event.preventDefault()
    stop()
    onLost()
  }
  canvas.addEventListener('webglcontextlost', onContextLost)

  return {
    setPointer(x, y) {
      pointer.x = x
      pointer.y = y
    },
    setPaused(next) {
      paused = next
      if (paused) stop()
      else start()
    },
    setReduced(next) {
      reduced = next
      pointer.x = 0
      pointer.y = 0
      if (reduced) {
        stop()
        renderFrame(0)
      } else {
        start()
      }
    },
    destroy() {
      stop()
      resizeObserver.disconnect()
      intersection.disconnect()
      canvas.removeEventListener('webglcontextlost', onContextLost)
      const geometries = new Set<THREE.BufferGeometry>()
      const materials = new Set<THREE.Material>()
      scene.traverse((object) => {
        const item = object as THREE.Mesh
        if (item.geometry) geometries.add(item.geometry)
        const material = item.material
        if (Array.isArray(material)) material.forEach((entry) => materials.add(entry))
        else if (material) materials.add(material)
      })
      geometries.forEach((geometry) => geometry.dispose())
      materials.forEach(disposeMaterial)
      renderer.dispose()
      canvas.remove()
    },
  }
}

function addWindowWall(scene: THREE.Scene, white: THREE.Material, black: THREE.Material) {
  const group = new THREE.Group()
  group.position.set(-ROOM / 2 + 0.08, 0, 0)
  const span = ROOM - 0.2
  const height = 3.05

  const header = mesh(new THREE.BoxGeometry(0.34, 0.38, span), white)
  header.position.y = height - 0.12
  const sill = mesh(new THREE.BoxGeometry(0.2, 0.1, span), white)
  sill.position.y = 0.08
  const jamb = new THREE.BoxGeometry(0.18, height, 0.14)
  const near = mesh(jamb, white)
  near.position.set(0, height / 2, span / 2)
  const far = mesh(jamb, white)
  far.position.set(0, height / 2, -span / 2)

  const mullion = new THREE.BoxGeometry(0.08, height - 0.55, 0.1)
  ;[-span / 6, span / 6].forEach((z) => {
    const bar = mesh(mullion, black)
    bar.position.set(0.02, height / 2 - 0.05, z)
    group.add(bar)
  })

  const glass = mesh(
    new THREE.PlaneGeometry(span - 0.3, height - 0.62),
    new THREE.MeshBasicMaterial({
      color: '#e7eef6',
      transparent: true,
      opacity: 0.94,
    }),
  )
  glass.rotation.y = Math.PI / 2
  glass.position.set(0.05, height / 2 - 0.02, 0)
  glass.castShadow = false

  const vent = mesh(new THREE.BoxGeometry(0.16, 0.05, span - 0.4), black)
  vent.position.set(0.12, 0.05, 0)

  group.add(header, sill, near, far, glass, vent)
  scene.add(group)
}

function addBackWall(scene: THREE.Scene, white: THREE.Material) {
  const wall = mesh(new THREE.BoxGeometry(ROOM - 0.35, 3.05, 0.16), white)
  wall.position.set(0.18, 1.52, -ROOM / 2 + 0.08)
  const column = mesh(new THREE.BoxGeometry(0.32, 3.05, 0.32), white)
  column.position.set(-ROOM / 2 + 0.16, 1.52, -ROOM / 2 + 0.16)
  scene.add(wall, column)
}

function addBookshelf(scene: THREE.Scene, wood: THREE.Material) {
  const group = new THREE.Group()
  const width = 6.15
  const height = 2.72
  const depth = 0.42
  group.position.set(0.55, 0, -ROOM / 2 + 0.42)

  const back = mesh(new THREE.BoxGeometry(width, height, 0.05), wood)
  back.position.set(0, height / 2, -depth / 2 + 0.03)
  const side = new THREE.BoxGeometry(0.06, height, depth)
  const left = mesh(side, wood)
  left.position.set(-width / 2, height / 2, 0)
  const right = mesh(side, wood)
  right.position.set(width / 2, height / 2, 0)
  const top = mesh(new THREE.BoxGeometry(width, 0.06, depth), wood)
  top.position.set(0, height, 0)
  const bottom = mesh(new THREE.BoxGeometry(width, 0.08, depth), wood)
  bottom.position.y = 0.04
  group.add(back, left, right, top, bottom)

  const bays = 6
  const rows = 5
  const bayW = (width - 0.12) / bays
  const divider = new THREE.BoxGeometry(0.04, height - 0.12, depth - 0.05)
  for (let bay = 1; bay < bays; bay += 1) {
    const panel = mesh(divider, wood)
    panel.position.set(-width / 2 + 0.06 + bay * bayW, height / 2, 0)
    group.add(panel)
  }

  const innerBottom = 0.12
  const innerTop = height - 0.08
  const rowH = (innerTop - innerBottom) / rows
  const shelfGeo = new THREE.BoxGeometry(width - 0.14, 0.035, depth - 0.04)
  for (let row = 1; row < rows; row += 1) {
    const board = mesh(shelfGeo, wood)
    board.position.set(0, innerBottom + row * rowH, 0.01)
    group.add(board)
  }

  const binderGeo = new THREE.BoxGeometry(0.1, 0.34, 0.26)
  const columns = [
    ['#3b5bdb', '#f59f00', '#7048e8', '#ffd43b'],
    ['#7048e8', '#4c6ef5', '#f08c00', '#748ffc'],
    ['#f59f00', '#5f3dc4', '#ff922b', '#3b5bdb'],
    ['#4c6ef5', '#fab005', '#6741d9', '#e67700'],
    ['#9775fa', '#d9480f', '#5c7cfa', '#ffd43b'],
    ['#364fc7', '#f08c00', '#845ef7', '#4c6ef5'],
  ]
  const materials = new Map<string, THREE.Material>()
  const colorMat = (color: string) => {
    const existing = materials.get(color)
    if (existing) return existing
    const created = standard(color, 0.48)
    materials.set(color, created)
    return created
  }
  const step = 0.125
  const perBay = Math.floor((bayW - 0.1) / step)

  for (let bay = 0; bay < bays; bay += 1) {
    const colors = columns[bay]!
    for (let row = 0; row < rows; row += 1) {
      for (let index = 0; index < perBay; index += 1) {
        const binder = mesh(binderGeo, colorMat(colors[(index + row) % colors.length]!), false)
        const x = -width / 2 + bay * bayW + bayW / 2 - ((perBay - 1) * step) / 2 + index * step
        const y = innerBottom + row * rowH + 0.035 + 0.17
        binder.position.set(x, y, 0.03)
        group.add(binder)
      }
    }
  }

  scene.add(group)
}

function createDesk(
  desk: { chair: string; shirt: string; skin: string; paper: string; note: string },
  white: THREE.Material,
  black: THREE.Material,
  metal: THREE.Material,
) {
  const group = new THREE.Group()
  const top = mesh(new THREE.BoxGeometry(1.5, 0.06, 0.82), white)
  top.position.y = 0.74

  const cabinet = mesh(new THREE.BoxGeometry(0.4, 0.7, 0.5), white)
  cabinet.position.set(-0.46, 0.35, 0.02)
  const gap = new THREE.BoxGeometry(0.32, 0.012, 0.02)
  ;[0.5, 0.32, 0.14].forEach((y) => {
    const line = mesh(gap, black, false)
    line.position.set(-0.46, y, 0.27)
    group.add(line)
  })

  const { texture, draw } = screenTexture()
  const bezel = mesh(new THREE.BoxGeometry(0.52, 0.34, 0.035), black)
  bezel.position.set(0.12, 1.08, -0.28)
  const screen = mesh(
    new THREE.PlaneGeometry(0.44, 0.26),
    new THREE.MeshStandardMaterial({
      map: texture,
      emissive: '#0b1220',
      emissiveMap: texture,
      emissiveIntensity: 0.45,
      roughness: 0.4,
    }),
  )
  screen.position.set(0.12, 1.08, -0.26)
  screen.castShadow = false
  const stand = mesh(new THREE.BoxGeometry(0.045, 0.16, 0.045), metal)
  stand.position.set(0.12, 0.86, -0.26)
  const foot = mesh(new THREE.BoxGeometry(0.16, 0.02, 0.1), metal)
  foot.position.set(0.12, 0.78, -0.22)

  const keyboard = mesh(new THREE.BoxGeometry(0.36, 0.02, 0.12), black, false)
  keyboard.position.set(0.08, 0.78, 0.08)

  const paper = mesh(new THREE.BoxGeometry(0.2, 0.008, 0.14), standard(desk.paper, 0.8), false)
  paper.position.set(0.42, 0.778, 0.16)
  paper.rotation.y = -0.2
  const note = mesh(new THREE.BoxGeometry(0.12, 0.008, 0.1), standard(desk.note, 0.8), false)
  note.position.set(-0.08, 0.78, 0.22)
  note.rotation.y = 0.35

  const chair = createChair(desk.chair, black)
  chair.position.set(0.08, 0, 0.62)
  const person = createSeated(desk.shirt, desk.skin)
  person.group.position.set(0.08, 0, 0.46)

  group.add(top, cabinet, bezel, screen, stand, foot, keyboard, paper, note, chair, person.group)
  return { group, leftArm: person.leftArm, rightArm: person.rightArm, head: person.head, drawScreen: draw }
}

function createChair(color: string, black: THREE.Material) {
  const group = new THREE.Group()
  const seatMat = standard(color, 0.5)
  const base = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.04, 16), black)
  base.position.y = 0.08
  const pole = mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.28, 8), black)
  pole.position.y = 0.24
  const seat = mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 16), seatMat)
  seat.position.y = 0.42
  const back = mesh(new THREE.BoxGeometry(0.34, 0.36, 0.045), seatMat)
  back.position.set(0, 0.68, 0.16)
  group.add(base, pole, seat, back)
  return group
}

function createSeated(shirt: string, skin: string) {
  const group = new THREE.Group()
  const skinMat = standard(skin, 0.58)
  const shirtMat = standard(shirt, 0.68)
  const hairMat = standard('#24170f', 0.7)

  const torso = mesh(new THREE.CapsuleGeometry(0.13, 0.22, 4, 8), shirtMat)
  torso.position.y = 0.72
  const head = new THREE.Group()
  head.position.y = 0.96
  const skull = mesh(new THREE.SphereGeometry(0.13, 16, 12), skinMat)
  skull.position.y = 0.12
  const hair = mesh(new THREE.SphereGeometry(0.136, 14, 10, 0, Math.PI * 2, 0, Math.PI * 0.52), hairMat)
  hair.position.y = 0.15
  head.add(skull, hair)

  const arms = new THREE.Group()
  const armGeo = new THREE.CapsuleGeometry(0.035, 0.2, 3, 6)
  const pivots: THREE.Group[] = []
  ;[-1, 1].forEach((side) => {
    const pivot = new THREE.Group()
    pivot.position.set(side * 0.16, 0.84, 0.02)
    const limb = mesh(armGeo, shirtMat)
    limb.rotation.x = Math.PI / 2
    limb.position.set(0, 0, -0.16)
    pivot.add(limb)
    arms.add(pivot)
    pivots.push(pivot)
  })

  group.add(torso, head, arms)
  return { group, head, leftArm: pivots[0]!, rightArm: pivots[1]! }
}

function screenTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 128
  canvas.height = 80
  const context = canvas.getContext('2d')
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  const draw = (time: number) => {
    if (!context) return
    context.fillStyle = '#0f172a'
    context.fillRect(0, 0, 128, 80)
    context.fillStyle = '#1e293b'
    context.fillRect(8, 8, 112, 14)
    context.fillStyle = '#94a3b8'
    context.fillRect(12, 12, 28, 6)
    for (let index = 0; index < 4; index += 1) {
      const bar = 10 + Math.sin(time * 2 + index) * 6 + index * 4
      context.fillStyle = index % 2 === 0 ? '#38bdf8' : '#e2e8f0'
      context.fillRect(14 + index * 16, 68 - bar, 10, bar)
    }
    texture.needsUpdate = true
  }
  draw(0)
  return { texture, draw }
}

function woodTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 512
  const context = canvas.getContext('2d')
  if (context) {
    context.fillStyle = '#e0bc8a'
    context.fillRect(0, 0, 512, 512)
    context.strokeStyle = 'rgba(140, 96, 48, 0.22)'
    context.lineWidth = 2
    for (let index = 0; index < 8; index += 1) {
      const y = 8 + index * 64
      context.beginPath()
      context.moveTo(0, y)
      context.lineTo(512, y + 6)
      context.stroke()
      context.strokeStyle = 'rgba(255, 236, 210, 0.18)'
      context.beginPath()
      context.moveTo(0, y + 18)
      context.bezierCurveTo(120, y + 10, 260, y + 28, 512, y + 14)
      context.stroke()
      context.strokeStyle = 'rgba(140, 96, 48, 0.22)'
    }
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1.2, 1.2)
  texture.center.set(0.5, 0.5)
  texture.rotation = Math.PI / 2
  return texture
}

function standard(color: string, roughness: number, metalness = 0.02) {
  return new THREE.MeshStandardMaterial({ color, roughness, metalness })
}

function mesh(geometry: THREE.BufferGeometry, material: THREE.Material, shadow = true) {
  const item = new THREE.Mesh(geometry, material)
  item.castShadow = shadow
  item.receiveShadow = true
  return item
}

function disposeMaterial(material: THREE.Material) {
  const mapped = material as THREE.MeshStandardMaterial
  mapped.map?.dispose()
  mapped.emissiveMap?.dispose()
  material.dispose()
}
