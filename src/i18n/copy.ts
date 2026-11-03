import type { Lang } from './langs'

export { languages, type Lang } from './langs'

export type LottaCopy = {
  metaTitle: string
  metaDescription: string
  mailtoSubject: string
  skip: string
  navLabel: string
  openMenu: string
  closeMenu: string
  language: string
  write: string
  seeExamples: string
  scroll: string
  enter: string
  sendMail: string
  nav: { href: string; label: string }[]
  kicker: string
  heroTitle: string
  heroAccent: string
  heroBody: string
  beatsLabel: string
  beats: { n: string; title: string; text: string }[]
  processIndex: string
  processTitle: string
  processIntro: string
  steps: { number: string; title: string; text: string }[]
  startIndex: string
  startTitle: string
  startIntro: string
  starts: { n: string; title: string; text: string }[]
  servicesIndex: string
  servicesTitle: string
  servicesIntro: string
  services: { title: string; body: string; points: string[] }[]
  examplesIndex: string
  examplesTitle: string
  examplesIntro: string
  examples: { label: string; description: string; imageAlt: string }[]
  contactIndex: string
  contactTitle: string
  contactBody: string
  contactReply: string
  footerRights: string
  footerOwner: string
  instagram: string
  jsonDescription: string
  knowsAbout: string[]
}

const navHrefs = ['#recorrido', '#servicios', '#ejemplos', '#contacto'] as const

function nav(labels: [string, string, string, string]) {
  return labels.map((label, index) => ({ href: navHrefs[index], label }))
}

export const copy: Record<Lang, LottaCopy> = {
  es: {
    metaTitle: 'Lotta, estudio digital en Valencia',
    metaDescription:
      'Lotta, estudio digital en Valencia. Auditamos cómo se lee tu empresa y hacemos la web para que te entiendan, sigan y te escriban.',
    mailtoSubject: 'Consulta sobre mi web',
    skip: 'Saltar al contenido',
    navLabel: 'Secciones',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    language: 'Idioma',
    write: 'Escríbenos',
    seeExamples: 'Ver ejemplos',
    scroll: 'Seguir hacia abajo',
    enter: 'Entrar',
    sendMail: 'Enviar un correo',
    nav: nav(['Proceso', 'Servicios', 'Ejemplos', 'Contacto']),
    kicker: 'Estudio digital en Valencia',
    heroTitle: 'Una web clara',
    heroAccent: 'explica el negocio sola.',
    heroBody:
      'Auditamos cómo te leen y, si hace falta, hacemos la web. Quien entra tiene que entender qué ofreces, seguir sin perderse y escribirte. Siempre en ese orden.',
    beatsLabel: 'Qué tiene que poder hacer quien entra',
    beats: [
      { n: '01', title: 'Te entienden', text: 'Qué haces y para quién, en la primera pantalla.' },
      { n: '02', title: 'No se pierden', text: 'Cada bloque lleva al siguiente, hasta el correo.' },
      { n: '03', title: 'Te escriben', text: 'El correo está a la vista y se entiende qué pasa al pulsarlo.' },
    ],
    processIndex: '01 — El proceso',
    processTitle: 'De la primera conversación a la web publicada.',
    processIntro:
      'Cuatro pasos, siempre en este orden. Cada uno deja algo concreto: lo que nos cuentas, el diagnóstico, la web y la publicación.',
    steps: [
      {
        number: '01',
        title: 'Nos cuentas el negocio',
        text: 'Qué vendes, a quién y qué debería hacer alguien que llega a la web por primera vez.',
      },
      {
        number: '02',
        title: 'Leemos la web como un cliente',
        text: 'Si ya existe, la recorremos con prisa, como quien no te conoce. Si no existe, definimos qué tiene que contar desde el primer día.',
      },
      {
        number: '03',
        title: 'La escribimos y la diseñamos',
        text: 'El texto, las páginas y el botón cuentan la misma historia. El diseño la hace fácil de leer, no la sustituye.',
      },
      {
        number: '04',
        title: 'La publicamos',
        text: 'Queda en internet, es tuya y puedes comprobar si las visitas llegan al correo.',
      },
    ],
    startIndex: '02 — El punto de partida',
    startTitle: 'Tres situaciones. Un solo criterio.',
    startIntro:
      'El encargo depende de cómo esté tu web ahora. El criterio no cambia: que te entiendan y que puedan escribirte.',
    starts: [
      {
        n: '01',
        title: 'La web ya existe y no se entiende',
        text: 'Puede estar bien diseñada y, aun así, no decir qué vendes. La auditoría marca dónde se pierde el mensaje y qué conviene cambiar primero.',
      },
      {
        n: '02',
        title: 'Todavía no hay web',
        text: 'El negocio ya funciona y la página no existe. Definimos qué tiene que decir la primera pantalla y la construimos desde ahí.',
      },
      {
        n: '03',
        title: 'Hay visitas y no hay correos',
        text: 'La gente entra y no escribe. Casi siempre el camino se corta o el correo está escondido. Lo dejamos claro y a la vista.',
      },
    ],
    servicesIndex: '03 — Servicios',
    servicesTitle: 'Tres paquetes. El mismo criterio.',
    servicesIntro:
      'Para comercios que necesitan una web profesional y no una plataforma compleja.',
    services: [
      {
        title: 'Presencia en internet, sin una web compleja.',
        body: 'Para quien necesita explicar el negocio en una sola página y que le escriban.',
        points: [
          'Una página con varias secciones',
          'Diseño con los colores y la identidad del negocio',
          'Se ve bien en el móvil, la tablet y el ordenador',
          'Servicios, horarios y cómo llegar',
          'Botón de WhatsApp o llamada, mapa y formulario',
          'SEO básico, dos rondas de cambios y publicación',
        ],
      },
      {
        title: 'La web completa del comercio.',
        body: 'Para quien quiere carta, servicios o productos en páginas propias, y un contacto fácil de encontrar.',
        points: [
          'Entre 4 y 5 páginas',
          'Inicio, servicios o productos, el negocio y el contacto',
          'Galería de fotografías',
          'WhatsApp y enlaces a redes',
          'SEO básico y preparada para el móvil',
          'Dos rondas de cambios, entrega y explicación',
        ],
      },
      {
        title: 'Más páginas y un diseño más propio.',
        body: 'Para quien necesita apartados distintos, más fotos y un contacto adaptado al oficio.',
        points: [
          'Entre 6 y 8 páginas',
          'Estructura según el negocio',
          'Galería más completa y apartados por servicio',
          'Formularios adaptados, mapa y redes',
          'Enlace a reservas o citas, cuando sea posible',
          'Tres rondas de cambios, entrega y explicación',
        ],
      },
    ],
    examplesIndex: '04 — Ejemplos',
    examplesTitle: 'Cuatro oficios. El mismo recorrido.',
    examplesIntro:
      'Son demostraciones, no clientes reales. En todas se entiende el negocio al entrar, hay un camino y una forma clara de seguir.',
    examples: [
      {
        label: 'Restaurante',
        description: 'Cena para compartir: producto de temporada y la reserva a la vista.',
        imageAlt: 'Mesa de restaurante con platos mediterráneos',
      },
      {
        label: 'Clínica dental',
        description: 'La primera visita, explicada con calma, y una cita fácil de pedir.',
        imageAlt: 'Recepción luminosa de clínica dental moderna',
      },
      {
        label: 'Horno',
        description: 'La compra de la mañana: pan del día, bollería y encargos del domingo.',
        imageAlt: 'Panes artesanos recién horneados',
      },
      {
        label: 'Pub',
        description: 'Quedar con amigos: cañas, ambiente y sitio para un grupo.',
        imageAlt: 'Interior cálido de pub con barra de madera',
      },
    ],
    contactIndex: '05 — Contacto · Valencia',
    contactTitle: 'Cuéntanos cómo está tu web.',
    contactBody: 'Qué vendes, a quién y si ya tienes página. Con eso te decimos qué paquete encaja.',
    contactReply: 'Respuesta en un día laborable · Valencia',
    footerRights: '© 2026 Lotta Digital Studio. Todos los derechos reservados.',
    footerOwner: 'Esta web es propiedad de Lotta Digital Studio.',
    instagram: 'Instagram de Lotta Digital Studio (se abre en una pestaña nueva)',
    jsonDescription:
      'Estudio digital en Valencia. Audita cómo se lee una empresa en la web y, si hace falta, hace la página para que la entiendan y escriban.',
    knowsAbout: ['Auditoría web', 'Diseño de experiencia', 'Creación de páginas web'],
  },
  en: {
    metaTitle: 'Lotta, digital studio in Valencia',
    metaDescription:
      'Lotta, a digital studio in Valencia. We audit how your company is read and build the website so people understand you, find their way and write to you.',
    mailtoSubject: 'Question about my website',
    skip: 'Skip to content',
    navLabel: 'Sections',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    language: 'Language',
    write: 'Write to us',
    seeExamples: 'See examples',
    scroll: 'Continue downward',
    enter: 'Enter',
    sendMail: 'Send an email',
    nav: nav(['Process', 'Services', 'Examples', 'Contact']),
    kicker: 'Digital studio in Valencia',
    heroTitle: 'A clear website',
    heroAccent: 'explains the business on its own.',
    heroBody:
      'We audit how people read you and, if needed, we build the website. Whoever arrives has to understand what you offer, move through it without getting lost and write to you. Always in that order.',
    beatsLabel: 'What someone who arrives has to be able to do',
    beats: [
      { n: '01', title: 'They understand you', text: 'What you do and who it is for, on the first screen.' },
      { n: '02', title: "They don't get lost", text: 'Each block leads to the next, up to the email.' },
      { n: '03', title: 'They write to you', text: 'The email is in sight and it is clear what happens when you press it.' },
    ],
    processIndex: '01 — The process',
    processTitle: 'From the first conversation to the published website.',
    processIntro:
      'Four steps, always in this order. Each one leaves something concrete: what you tell us, the diagnosis, the website and the publication.',
    steps: [
      {
        number: '01',
        title: 'You tell us about the business',
        text: 'What you sell, to whom, and what someone arriving at the website for the first time should do.',
      },
      {
        number: '02',
        title: 'We read the website as a customer',
        text: 'If it already exists, we go through it in a hurry, as someone who does not know you. If it does not exist, we define what it has to say from day one.',
      },
      {
        number: '03',
        title: 'We write it and we design it',
        text: 'The text, the pages and the button tell the same story. The design makes it easy to read. It does not replace the story.',
      },
      {
        number: '04',
        title: 'We publish it',
        text: 'It goes live, it is yours, and you can check whether visits reach the email.',
      },
    ],
    startIndex: '02 — The starting point',
    startTitle: 'Three situations. One criterion.',
    startIntro:
      'The brief depends on how your website is now. The criterion does not change: that people understand you and can write to you.',
    starts: [
      {
        n: '01',
        title: 'The website already exists and is not understood',
        text: 'It can be well designed and still not say what you sell. The audit marks where the message is lost and what should change first.',
      },
      {
        n: '02',
        title: 'There is no website yet',
        text: 'The business already works and the page does not exist. We define what the first screen has to say and we build from there.',
      },
      {
        n: '03',
        title: 'There are visits and there are no emails',
        text: 'People arrive and do not write. Almost always the path breaks or the email is hidden. We make it clear and visible.',
      },
    ],
    servicesIndex: '03 — Services',
    servicesTitle: 'Three packages. The same standard.',
    servicesIntro:
      'For shops that need a professional website and not a complex platform.',
    services: [
      {
        title: 'A presence on the internet, without a complex website.',
        body: 'For someone who needs to explain the business on a single page and get people to write.',
        points: [
          'A page with several sections',
          'Design with the colours and identity of the business',
          'It looks right on mobile, tablet and computer',
          'Services, hours and how to get there',
          'WhatsApp or call button, map and form',
          'Basic SEO, two rounds of changes and publication',
        ],
      },
      {
        title: 'The complete website for the shop.',
        body: 'For someone who wants a menu, services or products on their own pages, and a contact that is easy to find.',
        points: [
          'Between 4 and 5 pages',
          'Home, services or products, the business and contact',
          'Photo gallery',
          'WhatsApp and links to social networks',
          'Basic SEO and ready for mobile',
          'Two rounds of changes, handover and explanation',
        ],
      },
      {
        title: 'More pages and a more distinctive design.',
        body: 'For someone who needs separate sections, more photos and a contact adapted to the trade.',
        points: [
          'Between 6 and 8 pages',
          'Structure according to the business',
          'A fuller gallery and sections by service',
          'Adapted forms, map and social networks',
          'A link to bookings or appointments, when possible',
          'Three rounds of changes, handover and explanation',
        ],
      },
    ],
    examplesIndex: '04 — Examples',
    examplesTitle: 'Four trades. The same path.',
    examplesIntro:
      'They are demonstrations, not real clients. In all of them you understand the business on arrival, there is a path and a clear way to continue.',
    examples: [
      {
        label: 'Restaurant',
        description: 'Dinner to share: seasonal produce and the booking in sight.',
        imageAlt: 'Restaurant table with Mediterranean dishes',
      },
      {
        label: 'Dental clinic',
        description: 'The first visit, explained calmly, and an appointment that is easy to request.',
        imageAlt: 'Bright reception of a modern dental clinic',
      },
      {
        label: 'Bakery',
        description: 'The morning shop: bread of the day, pastries and Sunday orders.',
        imageAlt: 'Freshly baked artisan loaves',
      },
      {
        label: 'Pub',
        description: 'Meeting friends: beers, atmosphere and room for a group.',
        imageAlt: 'Warm pub interior with a wooden bar',
      },
    ],
    contactIndex: '05 — Contact · Valencia',
    contactTitle: 'Tell us how your website is.',
    contactBody: 'What you sell, to whom, and whether you already have a page. With that we tell you which package fits.',
    contactReply: 'Reply within one working day · Valencia',
    footerRights: '© 2026 Lotta Digital Studio. All rights reserved.',
    footerOwner: 'This website is the property of Lotta Digital Studio.',
    instagram: 'Lotta Digital Studio on Instagram (opens in a new tab)',
    jsonDescription:
      'Digital studio in Valencia. It audits how a company is read on the web and, if needed, builds the page so people understand it and write.',
    knowsAbout: ['Website audit', 'Experience design', 'Website creation'],
  },
  ca: {
    metaTitle: 'Lotta, estudi digital a València',
    metaDescription:
      'Lotta, estudi digital a València. Auditem com es llegeix la teva empresa i fem la web perquè et comprenguin, segueixin i t’escriguin.',
    mailtoSubject: 'Consulta sobre la meva web',
    skip: 'Salta al contingut',
    navLabel: 'Seccions',
    openMenu: 'Obre el menú',
    closeMenu: 'Tanca el menú',
    language: 'Idioma',
    write: 'Escriu-nos',
    seeExamples: 'Veure exemples',
    scroll: 'Seguir cap avall',
    enter: 'Entrar',
    sendMail: 'Enviar un correu',
    nav: nav(['Procés', 'Serveis', 'Exemples', 'Contacte']),
    kicker: 'Estudi digital a València',
    heroTitle: 'Una web clara',
    heroAccent: 'explica el negoci sola.',
    heroBody:
      'Auditem com et llegeixen i, si cal, fem la web. Qui entra ha d’entendre què ofereixes, seguir sense perdre’s i escriure’t. Sempre en aquest ordre.',
    beatsLabel: 'Què ha de poder fer qui entra',
    beats: [
      { n: '01', title: 'T’entenen', text: 'Què fas i per a qui, a la primera pantalla.' },
      { n: '02', title: 'No es perden', text: 'Cada bloc porta al següent, fins al correu.' },
      { n: '03', title: 'T’escriuen', text: 'El correu és a la vista i s’entén què passa en prémer-lo.' },
    ],
    processIndex: '01 — El procés',
    processTitle: 'De la primera conversa a la web publicada.',
    processIntro:
      'Quatre passos, sempre en aquest ordre. Cadascun deixa una cosa concreta: el que ens expliques, el diagnòstic, la web i la publicació.',
    steps: [
      {
        number: '01',
        title: 'Ens expliques el negoci',
        text: 'Què vens, a qui i què hauria de fer algú que arriba a la web per primera vegada.',
      },
      {
        number: '02',
        title: 'Llegim la web com un client',
        text: 'Si ja existeix, la recorrem amb pressa, com qui no et coneix. Si no existeix, definim què ha de contar des del primer dia.',
      },
      {
        number: '03',
        title: 'L’escrivim i la dissenyem',
        text: 'El text, les pàgines i el botó conten la mateixa història. El disseny la fa fàcil de llegir, no la substitueix.',
      },
      {
        number: '04',
        title: 'La publiquem',
        text: 'Queda a internet, és teva i pots comprovar si les visites arriben al correu.',
      },
    ],
    startIndex: '02 — El punt de partida',
    startTitle: 'Tres situacions. Un sol criteri.',
    startIntro:
      'L’encàrrec depèn de com estigui la teva web ara. El criteri no canvia: que t’entenguin i que et puguin escriure.',
    starts: [
      {
        n: '01',
        title: 'La web ja existeix i no s’entén',
        text: 'Pot estar ben dissenyada i, tot i això, no dir què vens. L’auditoria marca on es perd el missatge i què convé canviar primer.',
      },
      {
        n: '02',
        title: 'Encara no hi ha web',
        text: 'El negoci ja funciona i la pàgina no existeix. Definim què ha de dir la primera pantalla i la construïm des d’aquí.',
      },
      {
        n: '03',
        title: 'Hi ha visites i no hi ha correus',
        text: 'La gent entra i no escriu. Gairebé sempre el camí es talla o el correu està amagat. Ho deixem clar i a la vista.',
      },
    ],
    servicesIndex: '03 — Serveis',
    servicesTitle: 'Tres paquets. El mateix criteri.',
    servicesIntro:
      'Per a comerços que necessiten una web professional i no una plataforma complexa.',
    services: [
      {
        title: 'Presència a internet, sense una web complexa.',
        body: 'Per a qui necessita explicar el negoci en una sola pàgina i que li escriguin.',
        points: [
          'Una pàgina amb diverses seccions',
          'Disseny amb els colors i la identitat del negoci',
          'Es veu bé al mòbil, la tauleta i l’ordinador',
          'Serveis, horaris i com arribar-hi',
          'Botó de WhatsApp o trucada, mapa i formulari',
          'SEO bàsic, dues rondes de canvis i publicació',
        ],
      },
      {
        title: 'La web completa del comerç.',
        body: 'Per a qui vol carta, serveis o productes en pàgines pròpies, i un contacte fàcil de trobar.',
        points: [
          'Entre 4 i 5 pàgines',
          'Inici, serveis o productes, el negoci i el contacte',
          'Galeria de fotografies',
          'WhatsApp i enllaços a xarxes',
          'SEO bàsic i preparada per al mòbil',
          'Dues rondes de canvis, lliurament i explicació',
        ],
      },
      {
        title: 'Més pàgines i un disseny més propi.',
        body: 'Per a qui necessita apartats diferents, més fotos i un contacte adaptat a l’ofici.',
        points: [
          'Entre 6 i 8 pàgines',
          'Estructura segons el negoci',
          'Galeria més completa i apartats per servei',
          'Formularis adaptats, mapa i xarxes',
          'Enllaç a reserves o cites, quan sigui possible',
          'Tres rondes de canvis, lliurament i explicació',
        ],
      },
    ],
    examplesIndex: '04 — Exemples',
    examplesTitle: 'Quatre oficis. El mateix recorregut.',
    examplesIntro:
      'Són demostracions, no clients reals. En totes s’entén el negoci en entrar, hi ha un camí i una manera clara de seguir.',
    examples: [
      {
        label: 'Restaurant',
        description: 'Sopar per compartir: producte de temporada i la reserva a la vista.',
        imageAlt: 'Taula de restaurant amb plats mediterranis',
      },
      {
        label: 'Clínica dental',
        description: 'La primera visita, explicada amb calma, i una cita fàcil de demanar.',
        imageAlt: 'Recepció lluminosa d’una clínica dental moderna',
      },
      {
        label: 'Forn',
        description: 'La compra del matí: pa del dia, brioxeria i encàrrecs del diumenge.',
        imageAlt: 'Pans artesans acabats de fer',
      },
      {
        label: 'Pub',
        description: 'Quedar amb amics: canyes, ambient i lloc per a un grup.',
        imageAlt: 'Interior càlid de pub amb barra de fusta',
      },
    ],
    contactIndex: '05 — Contacte · València',
    contactTitle: 'Explica’ns com està la teva web.',
    contactBody: 'Què vens, a qui i si ja tens pàgina. Amb això et diem quin paquet encaixa.',
    contactReply: 'Resposta en un dia laborable · València',
    footerRights: '© 2026 Lotta Digital Studio. Tots els drets reservats.',
    footerOwner: 'Aquest web és propietat de Lotta Digital Studio.',
    instagram: 'Instagram de Lotta Digital Studio (s’obre en una pestanya nova)',
    jsonDescription:
      'Estudi digital a València. Audita com es llegeix una empresa a la web i, si cal, fa la pàgina perquè l’entenguin i escriguin.',
    knowsAbout: ['Auditoria web', 'Disseny d’experiència', 'Creació de pàgines web'],
  },
  gl: {
    metaTitle: 'Lotta, estudio dixital en Valencia',
    metaDescription:
      'Lotta, estudio dixital en Valencia. Auditamos como se le a túa empresa e facemos a web para que te entendan, sigan e che escriban.',
    mailtoSubject: 'Consulta sobre a miña web',
    skip: 'Saltar ao contido',
    navLabel: 'Seccións',
    openMenu: 'Abrir menú',
    closeMenu: 'Pechar menú',
    language: 'Idioma',
    write: 'Escríbenos',
    seeExamples: 'Ver exemplos',
    scroll: 'Seguir cara abaixo',
    enter: 'Entrar',
    sendMail: 'Enviar un correo',
    nav: nav(['Proceso', 'Servizos', 'Exemplos', 'Contacto']),
    kicker: 'Estudio dixital en Valencia',
    heroTitle: 'Unha web clara',
    heroAccent: 'explica o negocio soa.',
    heroBody:
      'Auditamos como te len e, se fai falta, facemos a web. Quen entra ten que entender que ofreces, seguir sen perderse e escribirche. Sempre nesa orde.',
    beatsLabel: 'Que ten que poder facer quen entra',
    beats: [
      { n: '01', title: 'Enténdente', text: 'Que fas e para quen, na primeira pantalla.' },
      { n: '02', title: 'Non se perden', text: 'Cada bloque leva ao seguinte, ata o correo.' },
      { n: '03', title: 'Escríbenche', text: 'O correo está á vista e enténdese que pasa ao pulsalo.' },
    ],
    processIndex: '01 — O proceso',
    processTitle: 'Da primeira conversa á web publicada.',
    processIntro:
      'Catro pasos, sempre nesta orde. Cada un deixa algo concreto: o que nos contas, o diagnóstico, a web e a publicación.',
    steps: [
      {
        number: '01',
        title: 'Cóntasnos o negocio',
        text: 'Que vendes, a quen e que debería facer alguén que chega á web por primeira vez.',
      },
      {
        number: '02',
        title: 'Lemos a web como un cliente',
        text: 'Se xa existe, percorrémosla con présa, como quen non te coñece. Se non existe, definimos que ten que contar desde o primeiro día.',
      },
      {
        number: '03',
        title: 'Escríbimosla e deseñámola',
        text: 'O texto, as páxinas e o botón contan a mesma historia. O deseño faina fácil de ler, non a substitúe.',
      },
      {
        number: '04',
        title: 'Publicámola',
        text: 'Queda en internet, é túa e podes comprobar se as visitas chegan ao correo.',
      },
    ],
    startIndex: '02 — O punto de partida',
    startTitle: 'Tres situacións. Un só criterio.',
    startIntro:
      'O encargo depende de como estea a túa web agora. O criterio non cambia: que te entendan e que che poidan escribir.',
    starts: [
      {
        n: '01',
        title: 'A web xa existe e non se entende',
        text: 'Pode estar ben deseñada e, aínda así, non dicir que vendes. A auditoría marca onde se perde a mensaxe e que convén cambiar primeiro.',
      },
      {
        n: '02',
        title: 'Aínda non hai web',
        text: 'O negocio xa funciona e a páxina non existe. Definimos que ten que dicir a primeira pantalla e construímola desde aí.',
      },
      {
        n: '03',
        title: 'Hai visitas e non hai correos',
        text: 'A xente entra e non escribe. Case sempre o camiño córtase ou o correo está agochado. Deixámolo claro e á vista.',
      },
    ],
    servicesIndex: '03 — Servizos',
    servicesTitle: 'Tres paquetes. O mesmo criterio.',
    servicesIntro:
      'Para comercios que necesitan unha web profesional e non unha plataforma complexa.',
    services: [
      {
        title: 'Presenza en internet, sen unha web complexa.',
        body: 'Para quen necesita explicar o negocio nunha soa páxina e que lle escriban.',
        points: [
          'Unha páxina con varias seccións',
          'Deseño coas cores e a identidade do negocio',
          'Vese ben no móbil, a tableta e o ordenador',
          'Servizos, horarios e como chegar',
          'Botón de WhatsApp ou chamada, mapa e formulario',
          'SEO básico, dúas roldas de cambios e publicación',
        ],
      },
      {
        title: 'A web completa do comercio.',
        body: 'Para quen quere carta, servizos ou produtos en páxinas propias, e un contacto fácil de atopar.',
        points: [
          'Entre 4 e 5 páxinas',
          'Inicio, servizos ou produtos, o negocio e o contacto',
          'Galería de fotografías',
          'WhatsApp e ligazóns a redes',
          'SEO básico e preparada para o móbil',
          'Dúas roldas de cambios, entrega e explicación',
        ],
      },
      {
        title: 'Máis páxinas e un deseño máis propio.',
        body: 'Para quen necesita apartados distintos, máis fotos e un contacto adaptado ao oficio.',
        points: [
          'Entre 6 e 8 páxinas',
          'Estrutura segundo o negocio',
          'Galería máis completa e apartados por servizo',
          'Formularios adaptados, mapa e redes',
          'Ligazón a reservas ou citas, cando sexa posible',
          'Tres roldas de cambios, entrega e explicación',
        ],
      },
    ],
    examplesIndex: '04 — Exemplos',
    examplesTitle: 'Catro oficios. O mesmo percorrido.',
    examplesIntro:
      'Son demostracións, non clientes reais. En todas se entende o negocio ao entrar, hai un camiño e unha forma clara de seguir.',
    examples: [
      {
        label: 'Restaurante',
        description: 'Cea para compartir: produto de tempada e a reserva á vista.',
        imageAlt: 'Mesa de restaurante con pratos mediterráneos',
      },
      {
        label: 'Clínica dental',
        description: 'A primeira visita, explicada con calma, e unha cita fácil de pedir.',
        imageAlt: 'Recepción luminosa dunha clínica dental moderna',
      },
      {
        label: 'Forno',
        description: 'A compra da mañá: pan do día, bolaría e encargos do domingo.',
        imageAlt: 'Pans artesáns acabados de facer',
      },
      {
        label: 'Pub',
        description: 'Quedar con amigos: cañas, ambiente e sitio para un grupo.',
        imageAlt: 'Interior cálido de pub cunha barra de madeira',
      },
    ],
    contactIndex: '05 — Contacto · Valencia',
    contactTitle: 'Cóntanos como está a túa web.',
    contactBody: 'Que vendes, a quen e se xa tes páxina. Con iso díchemos que paquete encaixa.',
    contactReply: 'Resposta nun día laborable · Valencia',
    footerRights: '© 2026 Lotta Digital Studio. Todos os dereitos reservados.',
    footerOwner: 'Esta web é propiedade de Lotta Digital Studio.',
    instagram: 'Instagram de Lotta Digital Studio (ábrese nunha lapela nova)',
    jsonDescription:
      'Estudio dixital en Valencia. Audita como se le unha empresa na web e, se fai falta, fai a páxina para que a entendan e escriban.',
    knowsAbout: ['Auditoría web', 'Deseño de experiencia', 'Creación de páxinas web'],
  },
  eu: {
    metaTitle: 'Lotta, Valentziako estudio digitala',
    metaDescription:
      'Lotta, Valentziako estudio digitala. Zure enpresa nola irakurtzen den aztertzen dugu eta webgunea egiten dugu, uler zaitzaten, bidea galdu gabe jarrai dezaten eta idatz diezazuten.',
    mailtoSubject: 'Kontsulta nire webguneari buruz',
    skip: 'Joan edukira',
    navLabel: 'Atalak',
    openMenu: 'Ireki menua',
    closeMenu: 'Itxi menua',
    language: 'Hizkuntza',
    write: 'Idatziguzu',
    seeExamples: 'Ikusi adibideak',
    scroll: 'Jarraitu behera',
    enter: 'Sartu',
    sendMail: 'Bidali mezu bat',
    nav: nav(['Prozesua', 'Zerbitzuak', 'Adibideak', 'Kontaktua']),
    kicker: 'Valentziako estudio digitala',
    heroTitle: 'Web argi batek',
    heroAccent: 'negozioa bere kabuz azaltzen du.',
    heroBody:
      'Nola irakurtzen zaituzten aztertzen dugu eta, beharrezkoa bada, webgunea egiten dugu. Sartzen denak ulertu behar du zer eskaintzen duzun, galdu gabe jarraitu eta idatzi. Beti ordena horretan.',
    beatsLabel: 'Sartzen denak zer egin ahal izan behar duen',
    beats: [
      { n: '01', title: 'Ulertzen zaituzte', text: 'Zer egiten duzun eta norentzat, lehen pantailan.' },
      { n: '02', title: 'Ez dira galtzen', text: 'Bloke bakoitzak hurrengora darama, mezuraino.' },
      { n: '03', title: 'Idatzi egiten dizute', text: 'Mezua begi-bistan dago eta argi dago zer gertatzen den sakatzean.' },
    ],
    processIndex: '01 — Prozesua',
    processTitle: 'Lehen elkarrizketatik argitaratutako webgunera.',
    processIntro:
      'Lau urrats, beti ordena honetan. Bakoitzak zerbait zehatza uzten du: zuk kontatzen diguzuna, diagnostikoa, webgunea eta argitalpena.',
    steps: [
      {
        number: '01',
        title: 'Negozioa kontatzen diguzu',
        text: 'Zer saltzen duzun, nori, eta webgunera lehen aldiz iristen den norbaitek zer egin beharko lukeen.',
      },
      {
        number: '02',
        title: 'Webgunea bezero batek bezala irakurtzen dugu',
        text: 'Jada existitzen bada, presaka zeharkatzen dugu, ezagutzen ez zaituen norbaitek bezala. Existitzen ez bada, lehen egunetik zer kontatu behar duen zehazten dugu.',
      },
      {
        number: '03',
        title: 'Idatzi eta diseinatzen dugu',
        text: 'Testuak, orriek eta botoiak istorio bera kontatzen dute. Diseinuak irakurtzeko erraza egiten du, ez du istorioa ordezkatzen.',
      },
      {
        number: '04',
        title: 'Argitaratzen dugu',
        text: 'Interneten geratzen da, zurea da, eta bisitak mezura iristen diren egiazta dezakezu.',
      },
    ],
    startIndex: '02 — Abiapuntua',
    startTitle: 'Hiru egoera. Irizpide bakarra.',
    startIntro:
      'Enkargua zure webgunea orain nola dagoen araberakoa da. Irizpidea ez da aldatzen: uler zaitzaten eta idatzi ahal izan dezaten.',
    starts: [
      {
        n: '01',
        title: 'Webgunea badago eta ez da ulertzen',
        text: 'Ondo diseinatuta egon daiteke eta, hala ere, ez esan zer saltzen duzun. Auditoriak markatzen du mezuak non galtzen den eta zer aldatu behar den lehenengo.',
      },
      {
        n: '02',
        title: 'Oraindik ez dago webgunerik',
        text: 'Negozioa martxan dago eta orria ez da existitzen. Lehen pantailak zer esan behar duen zehazten dugu eta hortik eraikitzen dugu.',
      },
      {
        n: '03',
        title: 'Bisitak daude eta mezurik ez',
        text: 'Jendea sartu eta ez du idazten. Ia beti bidea eten egiten da edo mezua ezkutatuta dago. Argi eta begi-bistan uzten dugu.',
      },
    ],
    servicesIndex: '03 — Zerbitzuak',
    servicesTitle: 'Hiru pakete. Irizpide bera.',
    servicesIntro:
      'Web profesional bat behar duten saltokientzat, plataforma konplexu bat ez.',
    services: [
      {
        title: 'Interneteko presentzia, web konplexurik gabe.',
        body: 'Negozioa orri bakarrean azaldu eta idatz diezaioten behar duenarentzat.',
        points: [
          'Orri bat hainbat atalekin',
          'Negozioaren kolore eta nortasunarekin egindako diseinua',
          'Ondo ikusten da mugikorrean, tabletan eta ordenagailuan',
          'Zerbitzuak, ordutegiak eta nola iritsi',
          'WhatsApp edo dei botoia, mapa eta formularioa',
          'SEO oinarrizkoa, bi aldaketa-txanda eta argitalpena',
        ],
      },
      {
        title: 'Dendaren web osoa.',
        body: 'Karta, zerbitzuak edo produktuak beren orrietan nahi dituenarentzat, eta erraz aurkitzeko kontaktua.',
        points: [
          '4 eta 5 orri artean',
          'Hasiera, zerbitzuak edo produktuak, negozioa eta kontaktua',
          'Argazki-galeria',
          'WhatsApp eta sareetarako estekak',
          'SEO oinarrizkoa eta mugikorrerako prest',
          'Bi aldaketa-txanda, entrega eta azalpena',
        ],
      },
      {
        title: 'Orri gehiago eta diseinu propioago bat.',
        body: 'Atal desberdinak, argazki gehiago eta ofizioari egokitutako kontaktua behar duenarentzat.',
        points: [
          '6 eta 8 orri artean',
          'Negozioaren araberako egitura',
          'Galeria osoagoa eta zerbitzuko atalak',
          'Egokitutako formularioak, mapa eta sareak',
          'Erreserba edo hitzorduetarako esteka, posible denean',
          'Hiru aldaketa-txanda, entrega eta azalpena',
        ],
      },
    ],
    examplesIndex: '04 — Adibideak',
    examplesTitle: 'Lau ofizio. Ibilbide bera.',
    examplesIntro:
      'Erakustaldiak dira, ez bezero errealak. Denetan negozioa ulertzen da sartzean, bide bat dago eta jarraitzeko modu argi bat.',
    examples: [
      {
        label: 'Jatetxea',
        description: 'Parteka dezazun afaria: sasoiko produktua eta erreserba begi-bistan.',
        imageAlt: 'Jatetxe-mahai bat plater mediterraneoekin',
      },
      {
        label: 'Hortz-klinika',
        description: 'Lehen bisita, lasai azaldua, eta erraz eskatzeko hitzordu bat.',
        imageAlt: 'Hortz-klinika moderno baten harrera argia',
      },
      {
        label: 'Labea',
        description: 'Goizeko erosketa: eguneko ogia, gozokiak eta igandeko enkarguak.',
        imageAlt: 'Artisau-ogiak labeberriak',
      },
      {
        label: 'Taberna',
        description: 'Lagunekin geratzea: garagardoak, giroa eta talde baterako lekua.',
        imageAlt: 'Taberna baten barne epela, zurezko barrarekin',
      },
    ],
    contactIndex: '05 — Kontaktua · Valentzia',
    contactTitle: 'Kontatu iezaguzu zure webgunea nola dagoen.',
    contactBody: 'Zer saltzen duzun, nori eta orririk baduzun. Horrekin esango dizugu zein pakete datorkizun.',
    contactReply: 'Erantzuna lanegun batean · Valentzia',
    footerRights: '© 2026 Lotta Digital Studio. Eskubide guztiak erreserbatuta.',
    footerOwner: 'Webgune hau Lotta Digital Studio-rena da.',
    instagram: 'Lotta Digital Studioren Instagram (fitxa berri batean irekitzen da)',
    jsonDescription:
      'Valentziako estudio digitala. Enpresa bat webean nola irakurtzen den aztertzen du eta, beharrezkoa bada, orria egiten du uler dadin eta idatz dezaten.',
    knowsAbout: ['Web auditoria', 'Esperientziaren diseinua', 'Web orrien sorrera'],
  },
}
