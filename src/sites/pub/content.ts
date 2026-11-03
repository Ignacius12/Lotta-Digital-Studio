import { createContext, useContext } from 'react'
import type { Lang } from '../../i18n/langs'
import { dayName, demoCopy, formatEuro, hoursRows, legalLinks, zipLabels, type Day, type Hours } from '../shared/demo'

const base = {
  name: 'El Candil',
  phone: { display: '+34 91 000 33 21', tel: '+34910003321' },
  address: {
    street: 'Calle de la Palma 27',
    city: 'Madrid',
    postalCode: '28004',
    region: 'Madrid',
    country: 'ES',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Palma+27,+Madrid',
    geo: { latitude: 40.4265, longitude: -3.7038 },
  },
  schemaHours: [
    { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '18:00', closes: '01:00' },
    { days: ['Friday', 'Saturday'], opens: '18:00', closes: '02:30' },
    { days: ['Sunday'], opens: '18:00', closes: '00:00' },
    { days: ['Monday'] },
  ] as Hours[],
  ogImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=80&auto=format&fit=crop',
  heroImage: {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600&q=80&auto=format&fit=crop',
    width: 1600,
    height: 1067,
  },
  navHrefs: ['#inicio', '#ambiente', '#carta', '#noches', '#contacto'],
  footerHrefs: ['#inicio', '#carta', '#noches', '#reservas', '#contacto'],
  drinks: [
    { id: 'cana', price: 2.2 },
    { id: 'clara', price: 2.4 },
    { id: 'vermut', price: 3.5 },
    { id: 'gintonic', price: 8.5 },
    { id: 'vino', price: 3.8 },
    { id: 'sin', price: 2.5 },
  ],
  bites: [
    { id: 'patatas', price: 5.5 },
    { id: 'tabla', price: 11 },
    { id: 'bocata', price: 6.5 },
    { id: 'nachos', price: 8 },
  ],
  nights: [
    { id: 'jueves', day: 'Thursday' },
    { id: 'viernes', day: 'Friday' },
    { id: 'sabado', day: 'Saturday' },
  ] as { id: string; day: Day }[],
  gallery: [
    { id: 'g1', src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=900&q=80&auto=format&fit=crop', width: 900, height: 700 },
    { id: 'g2', src: 'https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=900&q=80&auto=format&fit=crop', width: 900, height: 1100 },
    { id: 'g3', src: 'https://images.unsplash.com/photo-1575444758702-4a6b9222336e?w=900&q=80&auto=format&fit=crop', width: 900, height: 700 },
    { id: 'g4', src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&q=80&auto=format&fit=crop', width: 900, height: 900 },
  ],
}

const es = {
  description:
    'Pub de barrio en Madrid para quedar con amigos, tomarse algo sin prisa y quedarse más de lo previsto.',
  seo: {
    title: 'El Candil | Pub acogedor en Madrid',
    description:
      'Pub de barrio en Malasaña: cañas, vermut, música suave y buen ambiente. Reserva mesa para grupos por teléfono.',
  },
  hero: {
    eyebrow: 'Pub · Malasaña',
    title: 'Luz baja, caña fría y conversación larga.',
    subtitle:
      'Un pub para después del trabajo, el finde o esa noche que empieza “solo un rato”. Madera, buena música y sitio para quedarse.',
    imageAlt: 'Interior cálido de pub con barra de madera y luz ambientada',
  },
  book: 'Reservar',
  bookTable: 'Reservar mesa',
  seeMenu: 'Ver carta',
  skip: 'Saltar a la carta',
  atmosphere: {
    eyebrow: 'El ambiente',
    title: 'El ambiente lo es casi todo.',
    body: 'Venimos a vernos, a escuchar y a bajar el ritmo. Sin estridencias: buena compañía, copas bien servidas y una barra que conoce tu nombre si vuelves.',
    points: ['Mesas altas y rincones para grupos', 'Música a volumen de conversación', 'Terraza cuando el tiempo acompaña'],
  },
  menu: {
    eyebrow: 'La barra',
    title: 'Cañas, copas y algo para picar.',
    drinks: 'Para beber',
    bites: 'Para picar',
    drinkItems: [
      ['Caña bien tirada', 'La de siempre, fría y con su espuma'],
      ['Clara con limón', 'Ligera para empezar la noche'],
      ['Vermut de grifo', 'Con naranja y aceituna'],
      ['Gin-tonic de la casa', 'Botánico, sin florituras innecesarias'],
      ['Copa de tinto', 'Selección rotativa de la semana'],
      ['Cerveza sin alcohol', 'También hay noche sin resaca'],
    ],
    biteItems: [
      ['Patatas bravas', 'Salsa propia, picante suave'],
      ['Tabla de embutido', 'Para compartir entre cañas'],
      ['Bocata de calamares', 'Clásico de barra, sin rodeos'],
      ['Nachos del Candil', 'Queso, guacamole y jalapeños'],
    ],
  },
  nights: {
    eyebrow: 'Esta semana',
    title: 'Motivos para venir.',
    items: [
      ['Sesión acústica', 'Música en directo suave a partir de las 21:00.'],
      ['Afterwork largo', 'Caña + tapa de bienvenida hasta las 20:00.'],
      ['Noche de grupos', 'Reservas para mesas de 6 o más por teléfono.'],
    ],
  },
  gallery: {
    eyebrow: 'Ambiente',
    title: 'Así se siente El Candil.',
    alts: [
      'Gente disfrutando en un bar con ambiente cálido',
      'Cañas de cerveza servidas en barra',
      'Detalle de cerveza artesana en vaso',
      'Barra de pub con luz cálida',
    ],
  },
  reservations: {
    eyebrow: 'Grupos y mesas',
    title: '¿Venís en grupo?',
    description:
      'Para mesas de 6 o más, llama y te guardamos sitio. El resto: ven cuando quieras; si hay hueco, hay caña.',
    call: 'Llamar al pub',
  },
  locationEyebrow: 'Dónde',
  nav: ['Inicio', 'Ambiente', 'Carta', 'Noches', 'Contacto'],
  footer: ['Inicio', 'Carta', 'Noches', 'Reservas', 'Contacto'],
  privacy:
    'En esta demo las reservas se gestionan por teléfono. En un proyecto real se informaría del tratamiento de datos conforme al RGPD.',
}

type PubCopy = typeof es

const en: PubCopy = {
  description:
    'A neighbourhood pub in Madrid for meeting friends, having a drink without rushing and staying longer than planned.',
  seo: {
    title: 'El Candil | Cosy pub in Madrid',
    description:
      'Neighbourhood pub in Malasaña: draught beer, vermouth, mellow music and a good atmosphere. Book a table for groups by phone.',
  },
  hero: {
    eyebrow: 'Pub · Malasaña',
    title: 'Low light, cold beer and long conversations.',
    subtitle:
      'A pub for after work, the weekend or that night that starts as “just one”. Wood, good music and room to stay.',
    imageAlt: 'Warm pub interior with a wooden bar and soft lighting',
  },
  book: 'Book',
  bookTable: 'Book a table',
  seeMenu: 'See the menu',
  skip: 'Skip to the menu',
  atmosphere: {
    eyebrow: 'The atmosphere',
    title: 'The atmosphere is almost everything.',
    body: 'We come here to meet, to listen and to slow down. Nothing loud: good company, well-poured drinks and a bar that remembers your name when you come back.',
    points: ['High tables and corners for groups', 'Music at conversation volume', 'A terrace when the weather allows'],
  },
  menu: {
    eyebrow: 'The bar',
    title: 'Beers, drinks and something to nibble.',
    drinks: 'To drink',
    bites: 'To nibble',
    drinkItems: [
      ['A well-poured caña', 'The usual: cold, with a proper head'],
      ['Shandy with lemon', 'Light, to start the night'],
      ['Vermouth on tap', 'With orange and an olive'],
      ['House gin and tonic', 'Botanical, no needless frills'],
      ['Glass of red', 'A different selection every week'],
      ['Alcohol-free beer', 'Some nights come without a hangover'],
    ],
    biteItems: [
      ['Patatas bravas', 'Our own sauce, mildly spicy'],
      ['Cured meat board', 'For sharing between beers'],
      ['Fried squid sandwich', 'A bar classic, no fuss'],
      ['El Candil nachos', 'Cheese, guacamole and jalapeños'],
    ],
  },
  nights: {
    eyebrow: 'This week',
    title: 'Reasons to come.',
    items: [
      ['Acoustic session', 'Gentle live music from 21:00.'],
      ['Long afterwork', 'A beer and a welcome tapa until 20:00.'],
      ['Group night', 'Tables for 6 or more, booked by phone.'],
    ],
  },
  gallery: {
    eyebrow: 'Atmosphere',
    title: 'This is how El Candil feels.',
    alts: [
      'People enjoying a bar with a warm atmosphere',
      'Draught beers served at the bar',
      'Close-up of craft beer in a glass',
      'Pub bar with warm light',
    ],
  },
  reservations: {
    eyebrow: 'Groups and tables',
    title: 'Coming as a group?',
    description:
      'For tables of 6 or more, call and we’ll save you a spot. Otherwise, come whenever you like: if there’s room, there’s beer.',
    call: 'Call the pub',
  },
  locationEyebrow: 'Where',
  nav: ['Home', 'Atmosphere', 'Menu', 'Nights', 'Contact'],
  footer: ['Home', 'Menu', 'Nights', 'Bookings', 'Contact'],
  privacy:
    'In this demo, bookings are handled by phone. A real project would explain how personal data is processed under the GDPR.',
}

const ca: PubCopy = {
  description:
    'Pub de barri a Madrid per quedar amb amics, fer un glop sense presses i quedar-s’hi més del previst.',
  seo: {
    title: 'El Candil | Pub acollidor a Madrid',
    description:
      'Pub de barri a Malasaña: canyes, vermut, música suau i bon ambient. Reserva taula per a grups per telèfon.',
  },
  hero: {
    eyebrow: 'Pub · Malasaña',
    title: 'Llum baixa, canya freda i conversa llarga.',
    subtitle:
      'Un pub per a després de la feina, el cap de setmana o aquella nit que comença amb un “només una estona”. Fusta, bona música i lloc per quedar-s’hi.',
    imageAlt: 'Interior càlid de pub amb barra de fusta i llum ambiental',
  },
  book: 'Reserva',
  bookTable: 'Reserva taula',
  seeMenu: 'Mira la carta',
  skip: 'Salta a la carta',
  atmosphere: {
    eyebrow: 'L’ambient',
    title: 'L’ambient ho és gairebé tot.',
    body: 'Venim a veure’ns, a escoltar i a baixar el ritme. Sense estridències: bona companyia, copes ben servides i una barra que recorda el teu nom si tornes.',
    points: ['Taules altes i racons per a grups', 'Música a volum de conversa', 'Terrassa quan el temps acompanya'],
  },
  menu: {
    eyebrow: 'La barra',
    title: 'Canyes, copes i alguna cosa per picar.',
    drinks: 'Per beure',
    bites: 'Per picar',
    drinkItems: [
      ['Canya ben tirada', 'La de sempre, freda i amb la seva escuma'],
      ['Clara amb llimona', 'Lleugera per començar la nit'],
      ['Vermut d’aixeta', 'Amb taronja i oliva'],
      ['Gintònic de la casa', 'Botànic, sense floritures innecessàries'],
      ['Copa de negre', 'Selecció rotativa de la setmana'],
      ['Cervesa sense alcohol', 'També hi ha nits sense ressaca'],
    ],
    biteItems: [
      ['Patates braves', 'Salsa pròpia, picant suau'],
      ['Taula d’embotits', 'Per compartir entre canyes'],
      ['Entrepà de calamars', 'Clàssic de barra, sense embuts'],
      ['Nachos del Candil', 'Formatge, guacamole i jalapeños'],
    ],
  },
  nights: {
    eyebrow: 'Aquesta setmana',
    title: 'Motius per venir.',
    items: [
      ['Sessió acústica', 'Música en directe suau a partir de les 21:00.'],
      ['Afterwork llarg', 'Canya + tapa de benvinguda fins a les 20:00.'],
      ['Nit de grups', 'Reserves per a taules de 6 o més per telèfon.'],
    ],
  },
  gallery: {
    eyebrow: 'Ambient',
    title: 'Així és El Candil.',
    alts: [
      'Gent gaudint en un bar amb ambient càlid',
      'Canyes de cervesa servides a la barra',
      'Detall de cervesa artesana en un got',
      'Barra de pub amb llum càlida',
    ],
  },
  reservations: {
    eyebrow: 'Grups i taules',
    title: 'Veniu en grup?',
    description:
      'Per a taules de 6 o més, truca’ns i et guardarem lloc. La resta: vine quan vulguis; si hi ha lloc, hi ha canya.',
    call: 'Truca al pub',
  },
  locationEyebrow: 'On',
  nav: ['Inici', 'Ambient', 'Carta', 'Nits', 'Contacte'],
  footer: ['Inici', 'Carta', 'Nits', 'Reserves', 'Contacte'],
  privacy:
    'En aquesta demo les reserves es gestionen per telèfon. En un projecte real s’informaria del tractament de dades d’acord amb el RGPD.',
}

const gl: PubCopy = {
  description:
    'Pub de barrio en Madrid para quedar cos amigos, tomar algo sen présa e quedar máis do previsto.',
  seo: {
    title: 'El Candil | Pub acolledor en Madrid',
    description:
      'Pub de barrio en Malasaña: canas, vermú, música suave e bo ambiente. Reserva mesa para grupos por teléfono.',
  },
  hero: {
    eyebrow: 'Pub · Malasaña',
    title: 'Luz baixa, cana fría e conversa longa.',
    subtitle:
      'Un pub para despois do traballo, a fin de semana ou esa noite que empeza “só un pouco”. Madeira, boa música e sitio para quedar.',
    imageAlt: 'Interior cálido de pub con barra de madeira e luz ambiental',
  },
  book: 'Reservar',
  bookTable: 'Reservar mesa',
  seeMenu: 'Ver a carta',
  skip: 'Saltar á carta',
  atmosphere: {
    eyebrow: 'O ambiente',
    title: 'O ambiente éo case todo.',
    body: 'Vimos para vernos, escoitar e baixar o ritmo. Sen estridencias: boa compañía, copas ben servidas e unha barra que lembra o teu nome se volves.',
    points: ['Mesas altas e recunchos para grupos', 'Música a volume de conversa', 'Terraza cando o tempo acompaña'],
  },
  menu: {
    eyebrow: 'A barra',
    title: 'Canas, copas e algo para picar.',
    drinks: 'Para beber',
    bites: 'Para picar',
    drinkItems: [
      ['Cana ben tirada', 'A de sempre, fría e coa súa escuma'],
      ['Clara con limón', 'Lixeira para comezar a noite'],
      ['Vermú de billa', 'Con laranxa e oliva'],
      ['Gin-tonic da casa', 'Botánico, sen floreos innecesarios'],
      ['Copa de tinto', 'Selección rotativa da semana'],
      ['Cervexa sen alcohol', 'Tamén hai noites sen resaca'],
    ],
    biteItems: [
      ['Patacas bravas', 'Salsa propia, picante suave'],
      ['Táboa de embutido', 'Para compartir entre canas'],
      ['Bocadillo de luras', 'Clásico de barra, sen rodeos'],
      ['Nachos do Candil', 'Queixo, guacamole e jalapeños'],
    ],
  },
  nights: {
    eyebrow: 'Esta semana',
    title: 'Motivos para vir.',
    items: [
      ['Sesión acústica', 'Música en directo suave a partir das 21:00.'],
      ['Afterwork longo', 'Cana + tapa de benvida ata as 20:00.'],
      ['Noite de grupos', 'Reservas para mesas de 6 ou máis por teléfono.'],
    ],
  },
  gallery: {
    eyebrow: 'Ambiente',
    title: 'Así se sente El Candil.',
    alts: [
      'Xente gozando nun bar con ambiente cálido',
      'Canas de cervexa servidas na barra',
      'Detalle de cervexa artesá nun vaso',
      'Barra de pub con luz cálida',
    ],
  },
  reservations: {
    eyebrow: 'Grupos e mesas',
    title: 'Vides en grupo?',
    description:
      'Para mesas de 6 ou máis, chama e gardámosche sitio. O resto: ven cando queiras; se hai oco, hai cana.',
    call: 'Chamar ao pub',
  },
  locationEyebrow: 'Onde',
  nav: ['Inicio', 'Ambiente', 'Carta', 'Noites', 'Contacto'],
  footer: ['Inicio', 'Carta', 'Noites', 'Reservas', 'Contacto'],
  privacy:
    'Nesta demo as reservas xestiónanse por teléfono. Nun proxecto real informaríase do tratamento de datos conforme ao RXPD.',
}

const eu: PubCopy = {
  description:
    'Madrilgo auzo-taberna, lagunekin elkartzeko, lasai zerbait hartzeko eta aurreikusitakoa baino gehiago geratzeko.',
  seo: {
    title: 'El Candil | Taberna atsegina Madrilen',
    description:
      'Auzo-taberna Malasañan: garagardoa, bermuta, musika leuna eta giro ona. Erreserbatu taldeentzako mahaia telefonoz.',
  },
  hero: {
    eyebrow: 'Taberna · Malasaña',
    title: 'Argi apala, garagardo hotza eta solasaldi luzea.',
    subtitle:
      'Lanaren ondorengo, asteburuko edo “pixka bat bakarrik” hasten den gau horretarako taberna. Egurra, musika ona eta geratzeko lekua.',
    imageAlt: 'Taberna baten barrualde epela, egurrezko barra eta argi giroarekin',
  },
  book: 'Erreserbatu',
  bookTable: 'Erreserbatu mahaia',
  seeMenu: 'Ikusi karta',
  skip: 'Joan kartara',
  atmosphere: {
    eyebrow: 'Giroa',
    title: 'Giroa ia dena da.',
    body: 'Elkar ikustera, entzutera eta erritmoa jaistera etortzen gara. Zaratarik gabe: konpainia ona, ondo zerbitzatutako edariak eta itzultzen bazara zure izena gogoratzen duen barra.',
    points: ['Mahai altuak eta taldeentzako txokoak', 'Solasean aritzeko moduko musika', 'Terraza eguraldiak laguntzen duenean'],
  },
  menu: {
    eyebrow: 'Barra',
    title: 'Garagardoak, edariak eta mokadutxoak.',
    drinks: 'Edateko',
    bites: 'Mokadutxoak',
    drinkItems: [
      ['Ondo ateratako kaina', 'Betikoa, hotza eta bere aparrarekin'],
      ['Garagardoa limoiarekin', 'Arina, gaua hasteko'],
      ['Txorroteko bermuta', 'Laranja eta olibarekin'],
      ['Etxeko gin-tonica', 'Botanikoa, apaingarri alferrikakorik gabe'],
      ['Ardo beltz kopa', 'Asteko hautaketa aldakorra'],
      ['Alkoholik gabeko garagardoa', 'Ajerik gabeko gauak ere badaude'],
    ],
    biteItems: [
      ['Patata brabak', 'Etxeko saltsa, min leuna'],
      ['Hestebete-taula', 'Garagardo artean partekatzeko'],
      ['Txipiroi-ogitartekoa', 'Barrako klasikoa, inguruabarrik gabe'],
      ['Candileko nachoak', 'Gazta, guakamolea eta jalapeñoak'],
    ],
  },
  nights: {
    eyebrow: 'Aste honetan',
    title: 'Etortzeko arrazoiak.',
    items: [
      ['Saio akustikoa', 'Zuzeneko musika leuna 21:00etatik aurrera.'],
      ['Afterwork luzea', 'Kaina + ongietorriko tapa 20:00ak arte.'],
      ['Taldeen gaua', '6 lagun edo gehiagoko mahaien erreserbak telefonoz.'],
    ],
  },
  gallery: {
    eyebrow: 'Giroa',
    title: 'Horrelakoa da El Candil.',
    alts: [
      'Giro epeleko taberna batean gozatzen ari den jendea',
      'Barran zerbitzatutako garagardoak',
      'Edalontzi bateko garagardo artisauaren xehetasuna',
      'Argi epeleko taberna-barra',
    ],
  },
  reservations: {
    eyebrow: 'Taldeak eta mahaiak',
    title: 'Taldean zatozte?',
    description:
      '6 lagun edo gehiagoko mahaietarako, deitu eta lekua gordeko dizuegu. Bestela, etorri nahi duzuenean: lekua badago, garagardoa badago.',
    call: 'Deitu tabernara',
  },
  locationEyebrow: 'Non',
  nav: ['Hasiera', 'Giroa', 'Karta', 'Gauak', 'Kontaktua'],
  footer: ['Hasiera', 'Karta', 'Gauak', 'Erreserbak', 'Kontaktua'],
  privacy:
    'Demo honetan, erreserbak telefonoz kudeatzen dira. Benetako proiektu batean, datuen tratamenduaren berri emango litzateke DBEOren arabera.',
}

const copy: Record<Lang, PubCopy> = { es, en, ca, gl, eu }

export function getPub(lang: Lang) {
  const c = copy[lang]
  const t = demoCopy[lang]
  return {
    ...base,
    lang,
    c,
    t,
    hours: hoursRows(base.schemaHours, lang, t.closed),
    nav: zipLabels(base.navHrefs, c.nav),
    footerLinks: zipLabels(base.footerHrefs, c.footer),
    legalLinks: legalLinks(t),
    drinks: base.drinks.map((item, index) => ({
      id: item.id,
      price: formatEuro(item.price, lang),
      name: c.menu.drinkItems[index][0],
      description: c.menu.drinkItems[index][1],
    })),
    bites: base.bites.map((item, index) => ({
      id: item.id,
      price: formatEuro(item.price, lang),
      name: c.menu.biteItems[index][0],
      description: c.menu.biteItems[index][1],
    })),
    nights: base.nights.map((night, index) => ({
      id: night.id,
      day: dayName(night.day, lang),
      title: c.nights.items[index][0],
      description: c.nights.items[index][1],
    })),
    gallery: base.gallery.map((image, index) => ({ ...image, alt: c.gallery.alts[index] })),
  }
}

export type Pub = ReturnType<typeof getPub>

export const PubContext = createContext<Pub | null>(null)

export function usePub() {
  const value = useContext(PubContext)
  if (!value) throw new Error('PubContext')
  return value
}
