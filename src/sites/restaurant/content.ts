import { createContext, useContext } from 'react'
import type { Lang } from '../../i18n/langs'
import { demoCopy, hoursRows, legalLinks, zipLabels, type Hours } from '../shared/demo'

export type MenuCategoryId = 'compartir' | 'entrantes' | 'principales' | 'arroces' | 'postres' | 'bebidas'
export type TrustIcon = 'stars' | 'leaf' | 'utensils' | 'clock'

const base = {
  name: 'Casa Oliva',
  shortName: 'CASA OLIVA',
  phone: { display: '+34 91 000 12 34', tel: '+34910001234' },
  email: 'reservas@casaoliva.demo',
  address: {
    street: 'Calle de la Oliva 18',
    city: 'Madrid',
    postalCode: '28013',
    region: 'Madrid',
    country: 'ES',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+de+la+Oliva+18,+Madrid',
    geo: { latitude: 40.4165, longitude: -3.7085 },
  },
  schemaHours: [
    { days: ['Tuesday', 'Wednesday', 'Thursday'], opens: '13:00', closes: '23:30' },
    { days: ['Friday', 'Saturday'], opens: '13:00', closes: '00:00' },
    { days: ['Sunday'], opens: '13:00', closes: '17:00' },
    { days: ['Monday'] },
  ] as Hours[],
  instagram: 'https://instagram.com/',
  ogImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80&auto=format&fit=crop',
  heroImage: {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80&auto=format&fit=crop',
    width: 1600,
    height: 1067,
  },
  aboutImage: {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  reservationsImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80&auto=format&fit=crop',
  navHrefs: ['#inicio', '#menu', '#nosotros', '#galeria', '#contacto'],
  footerHrefs: ['#inicio', '#menu', '#nosotros', '#contacto', '#reservas'],
  trustIcons: ['stars', 'leaf', 'utensils', 'clock'] as TrustIcon[],
  categories: [
    { id: 'compartir', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&q=80&auto=format&fit=crop' },
    { id: 'entrantes', src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&q=80&auto=format&fit=crop' },
    { id: 'principales', src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1000&q=80&auto=format&fit=crop' },
    { id: 'arroces', src: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1000&q=80&auto=format&fit=crop' },
    { id: 'postres', src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=1000&q=80&auto=format&fit=crop' },
    { id: 'bebidas', src: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=1000&q=80&auto=format&fit=crop' },
  ] as { id: MenuCategoryId; src: string }[],
  menu: [
    { id: 'pan-aceite', category: 'compartir', price: 4.5 },
    { id: 'croquetas', category: 'compartir', price: 12 },
    { id: 'boquerones', category: 'compartir', price: 10 },
    { id: 'hummus', category: 'compartir', price: 9 },
    { id: 'tabla-quesos', category: 'compartir', price: 16 },
    { id: 'ensalada', category: 'entrantes', price: 11 },
    { id: 'sopa', category: 'entrantes', price: 9.5 },
    { id: 'tartar', category: 'entrantes', price: 18 },
    { id: 'alcachofas', category: 'entrantes', price: 14 },
    { id: 'lubina', category: 'principales', price: 24 },
    { id: 'cordero', category: 'principales', price: 26 },
    { id: 'berenjena', category: 'principales', price: 18 },
    { id: 'secreto', category: 'principales', price: 23 },
    { id: 'paella', category: 'arroces', price: 22 },
    { id: 'arroz-setas', category: 'arroces', price: 19 },
    { id: 'fideua', category: 'arroces', price: 20 },
    { id: 'tarta', category: 'postres', price: 8 },
    { id: 'crema', category: 'postres', price: 7 },
    { id: 'helado', category: 'postres', price: 7.5 },
    { id: 'agua', category: 'bebidas', price: 2.5 },
    { id: 'vino-casa', category: 'bebidas', price: 4.5 },
    { id: 'vermut', category: 'bebidas', price: 5 },
    { id: 'cafe', category: 'bebidas', price: 1.8 },
  ] as { id: string; category: MenuCategoryId; price: number }[],
  gallery: [
    { id: 'g1', src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=80&auto=format&fit=crop', width: 900, height: 1200 },
    { id: 'g2', src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1000&q=80&auto=format&fit=crop', width: 1000, height: 750 },
    { id: 'g3', src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80&auto=format&fit=crop', width: 800, height: 1000 },
    { id: 'g4', src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=900&q=80&auto=format&fit=crop', width: 900, height: 700 },
  ],
}

const es = {
  description:
    'Restaurante mediterráneo para cenas que se alargan: producto de temporada, platos para compartir y una mesa sin prisas en el centro de Madrid.',
  cuisine: 'Mediterránea',
  seo: {
    title: 'Casa Oliva | Restaurante mediterráneo en Madrid',
    description:
      'Casa Oliva: cocina mediterránea de producto en Madrid. Consulta el menú, reserva mesa y descubre nuestra cocina de temporada.',
  },
  hero: {
    title: 'Mesa larga, producto de temporada, aceite de verdad.',
    subtitle:
      'Para quienes reservan con ganas de compartir: cocina mediterránea de temporada, carta viva y una mesa pensada para quedarse.',
    imageAlt: 'Mesa servida con platos mediterráneos en ambiente de restaurante',
    meta: ['Para compartir', 'Producto de temporada', 'Reservas recomendadas'],
  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Una cocina que empieza por el producto.',
    imageAlt: 'Interior cálido del restaurante con mesas de madera y luz natural',
    blocks: [
      {
        heading: 'Producto y temporada',
        body: 'Cocinamos para la mesa compartida: aceite de oliva virgen, verdura de huerta, pescado del día y recetas mediterráneas con criterio de temporada.',
      },
      {
        heading: 'Mesa sin prisa',
        body: 'Si buscas una cena especial sin teatralidad —solo producto bueno y ritmo pausado— esta es tu mesa.',
      },
      {
        heading: 'Sobremesa cuidada',
        body: 'Reservamos con calma, servimos sin prisa y cuidamos cada detalle para que la sobremesa sea tan buena como el plato.',
      },
    ],
  },
  trustEyebrow: 'Para mesas que se quedan',
  trustLabel: 'Información rápida',
  trust: ['4,8 en Google', 'Temporada y cercanía', 'Platos para compartir', 'Cenas sin prisa'],
  nav: ['Inicio', 'Menú', 'Nosotros', 'Galería', 'Contacto'],
  footer: ['Inicio', 'Menú', 'Nosotros', 'Contacto', 'Reservas'],
  skip: 'Saltar al menú',
  homeLabel: 'inicio',
  book: 'Reservar mesa',
  seeMenu: 'Ver menú',
  menu: {
    eyebrow: 'Carta',
    title: 'Menú',
    description: 'Producto de temporada, cocina mediterránea y platos pensados para compartir.',
    tabs: 'Categorías del menú',
  },
  categories: [
    ['Para compartir', 'Platos para compartir en la mesa'],
    ['Entrantes', 'Entrante fresco de temporada'],
    ['Principales', 'Plato principal emplatado'],
    ['Arroces', 'Arroz mediterráneo en cazuela'],
    ['Postres', 'Postre artesanal'],
    ['Bebidas', 'Copa de vino en la mesa'],
  ],
  dishes: [
    ['Pan de masa madre y AOVE', 'Aceite de oliva virgen extra de cosecha temprana'],
    ['Croquetas de jamón ibérico', 'Bechamel cremosa y jamón ibérico'],
    ['Boquerones en vinagre', 'Con ajo tierno y perejil'],
    ['Hummus de garbanzo y pimentón', 'Con pan plano tostado'],
    ['Tabla de quesos artesanos', 'Selección de tres quesos con membrillo'],
    ['Ensalada de temporada', 'Hojas verdes, tomate raf y vinagreta de limón'],
    ['Crema de calabaza asada', 'Con semillas tostadas y aceite de romero'],
    ['Tartar de atún rojo', 'Aguacate, soja suave y cebolleta'],
    ['Alcachofas confitadas', 'Con jamón y yema curada'],
    ['Lubina a la plancha', 'Verduras de temporada y salsa verde'],
    ['Carrillera de cordero', 'Estofada a fuego lento con puré de patata'],
    ['Berenjena asada y queso fresco', 'Tomate confitado y hierbas'],
    ['Secreto ibérico', 'Con pimientos asados y patatas panadera'],
    ['Arroz del senyoret', 'Marisco pelado, azafrán y fumet propio'],
    ['Arroz meloso de setas', 'Boletus, parmesano y trufa'],
    ['Fideuà de pescado', 'Con alioli suave'],
    ['Tarta de queso al horno', 'Con coulis de frutos rojos'],
    ['Crema catalana', 'Azúcar caramelizado al momento'],
    ['Helado de aceite de oliva', 'Con naranja confitada'],
    ['Agua mineral', 'Con o sin gas (50 cl)'],
    ['Vino de la casa', 'Copa de tinto o blanco'],
    ['Vermut artesano', 'Con aceituna y naranja'],
    ['Café espresso', 'Tueste medio, origen seleccionado'],
  ],
  gallery: {
    eyebrow: 'Galería',
    title: 'Así se siente Casa Oliva.',
    alts: [
      'Plato principal de cocina mediterránea emplatado',
      'Ensalada fresca de temporada con verduras de color',
      'Ambiente del comedor con luz cálida',
      'Detalle de plato de pasta y verduras',
    ],
  },
  reservations: {
    eyebrow: 'Reservas',
    title: 'Reserva tu mesa',
    description:
      'Llama y te confirmamos disponibilidad al momento. Atención de martes a domingo en horario de servicio.',
    question: '¿Quieres reservar?',
    call: 'Llamar para reservar',
    imageAlt: 'Comedor de Casa Oliva con mesas preparadas',
  },
  locationEyebrow: 'Ubicación',
  privacy:
    'En esta demo las reservas se hacen por teléfono. En un proyecto real se informaría del tratamiento de datos conforme al RGPD.',
}

type RestaurantCopy = typeof es

const en: RestaurantCopy = {
  description:
    'A Mediterranean restaurant for dinners that run late: seasonal produce, dishes to share and an unhurried table in the centre of Madrid.',
  cuisine: 'Mediterranean',
  seo: {
    title: 'Casa Oliva | Mediterranean restaurant in Madrid',
    description:
      'Casa Oliva: produce-led Mediterranean cooking in Madrid. See the menu, book a table and discover our seasonal kitchen.',
  },
  hero: {
    title: 'A long table, seasonal produce, real olive oil.',
    subtitle:
      'For people who book to share: seasonal Mediterranean cooking, a menu that keeps changing and a table made for staying.',
    imageAlt: 'Table laid with Mediterranean dishes in a restaurant setting',
    meta: ['To share', 'Seasonal produce', 'Booking recommended'],
  },
  about: {
    eyebrow: 'About us',
    title: 'Cooking that starts with the produce.',
    imageAlt: 'Warm restaurant interior with wooden tables and natural light',
    blocks: [
      {
        heading: 'Produce and season',
        body: 'We cook for the shared table: virgin olive oil, garden vegetables, fish of the day and Mediterranean recipes that follow the season.',
      },
      {
        heading: 'An unhurried table',
        body: 'If you want a special dinner without the theatre — just good produce and an easy pace — this is your table.',
      },
      {
        heading: 'Time to linger',
        body: 'We take bookings calmly, serve without rushing and look after every detail so the conversation afterwards is as good as the food.',
      },
    ],
  },
  trustEyebrow: 'For tables that stay',
  trustLabel: 'At a glance',
  trust: ['4.8 on Google', 'Seasonal and local', 'Dishes to share', 'Unhurried dinners'],
  nav: ['Home', 'Menu', 'About', 'Gallery', 'Contact'],
  footer: ['Home', 'Menu', 'About', 'Contact', 'Bookings'],
  skip: 'Skip to the menu',
  homeLabel: 'home',
  book: 'Book a table',
  seeMenu: 'See the menu',
  menu: {
    eyebrow: 'The kitchen',
    title: 'Menu',
    description: 'Seasonal produce, Mediterranean cooking and dishes made for sharing.',
    tabs: 'Menu categories',
  },
  categories: [
    ['To share', 'Dishes to share on the table'],
    ['Starters', 'Fresh seasonal starter'],
    ['Mains', 'Plated main course'],
    ['Rice dishes', 'Mediterranean rice in a clay pot'],
    ['Desserts', 'Homemade dessert'],
    ['Drinks', 'Glass of wine on the table'],
  ],
  dishes: [
    ['Sourdough bread and olive oil', 'Early-harvest extra virgin olive oil'],
    ['Iberian ham croquettes', 'Creamy béchamel and Iberian ham'],
    ['Anchovies in vinegar', 'With young garlic and parsley'],
    ['Chickpea and paprika hummus', 'With toasted flatbread'],
    ['Artisan cheese board', 'Three cheeses with quince paste'],
    ['Seasonal salad', 'Leafy greens, Raf tomato and lemon vinaigrette'],
    ['Roast pumpkin soup', 'With toasted seeds and rosemary oil'],
    ['Bluefin tuna tartare', 'Avocado, light soy and spring onion'],
    ['Confit artichokes', 'With ham and cured egg yolk'],
    ['Grilled sea bass', 'Seasonal vegetables and salsa verde'],
    ['Lamb cheek', 'Slow-braised, with mashed potato'],
    ['Roast aubergine and fresh cheese', 'Confit tomato and herbs'],
    ['Iberian pork secreto', 'With roasted peppers and baker’s potatoes'],
    ['Arroz del senyoret', 'Peeled seafood, saffron and house fish stock'],
    ['Creamy mushroom rice', 'Porcini, parmesan and truffle'],
    ['Fish fideuà', 'With mild aioli'],
    ['Baked cheesecake', 'With red berry coulis'],
    ['Crema catalana', 'Sugar caramelised to order'],
    ['Olive oil ice cream', 'With candied orange'],
    ['Mineral water', 'Still or sparkling (50 cl)'],
    ['House wine', 'Glass of red or white'],
    ['Craft vermouth', 'With olive and orange'],
    ['Espresso', 'Medium roast, single origin'],
  ],
  gallery: {
    eyebrow: 'Gallery',
    title: 'This is how Casa Oliva feels.',
    alts: [
      'Plated Mediterranean main course',
      'Fresh seasonal salad with colourful vegetables',
      'Dining room in warm light',
      'Close-up of a pasta and vegetable dish',
    ],
  },
  reservations: {
    eyebrow: 'Bookings',
    title: 'Book your table',
    description:
      'Call and we will confirm availability straight away. We take calls Tuesday to Sunday during service hours.',
    question: 'Want to book?',
    call: 'Call to book',
    imageAlt: 'Casa Oliva dining room with the tables laid',
  },
  locationEyebrow: 'Location',
  privacy:
    'In this demo bookings are made by phone. A real project would explain how personal data is processed under the GDPR.',
}

const ca: RestaurantCopy = {
  description:
    'Restaurant mediterrani per a sopars que s’allarguen: producte de temporada, plats per compartir i una taula sense presses al centre de Madrid.',
  cuisine: 'Mediterrània',
  seo: {
    title: 'Casa Oliva | Restaurant mediterrani a Madrid',
    description:
      'Casa Oliva: cuina mediterrània de producte a Madrid. Consulta el menú, reserva taula i descobreix la nostra cuina de temporada.',
  },
  hero: {
    title: 'Taula llarga, producte de temporada, oli de veritat.',
    subtitle:
      'Per a qui reserva amb ganes de compartir: cuina mediterrània de temporada, carta viva i una taula pensada per quedar-s’hi.',
    imageAlt: 'Taula parada amb plats mediterranis en un ambient de restaurant',
    meta: ['Per compartir', 'Producte de temporada', 'Reserves recomanades'],
  },
  about: {
    eyebrow: 'Nosaltres',
    title: 'Una cuina que comença pel producte.',
    imageAlt: 'Interior càlid del restaurant amb taules de fusta i llum natural',
    blocks: [
      {
        heading: 'Producte i temporada',
        body: 'Cuinem per a la taula compartida: oli d’oliva verge, verdura d’horta, peix del dia i receptes mediterrànies amb criteri de temporada.',
      },
      {
        heading: 'Taula sense presses',
        body: 'Si busques un sopar especial sense teatralitat —només bon producte i un ritme pausat—, aquesta és la teva taula.',
      },
      {
        heading: 'Sobretaula cuidada',
        body: 'Reservem amb calma, servim sense presses i cuidem cada detall perquè la sobretaula sigui tan bona com el plat.',
      },
    ],
  },
  trustEyebrow: 'Per a taules que s’hi queden',
  trustLabel: 'Informació ràpida',
  trust: ['4,8 a Google', 'Temporada i proximitat', 'Plats per compartir', 'Sopars sense presses'],
  nav: ['Inici', 'Menú', 'Nosaltres', 'Galeria', 'Contacte'],
  footer: ['Inici', 'Menú', 'Nosaltres', 'Contacte', 'Reserves'],
  skip: 'Salta al menú',
  homeLabel: 'inici',
  book: 'Reserva taula',
  seeMenu: 'Mira el menú',
  menu: {
    eyebrow: 'Carta',
    title: 'Menú',
    description: 'Producte de temporada, cuina mediterrània i plats pensats per compartir.',
    tabs: 'Categories del menú',
  },
  categories: [
    ['Per compartir', 'Plats per compartir a taula'],
    ['Entrants', 'Entrant fresc de temporada'],
    ['Principals', 'Plat principal emplatat'],
    ['Arrossos', 'Arròs mediterrani en cassola'],
    ['Postres', 'Postres artesanes'],
    ['Begudes', 'Copa de vi a taula'],
  ],
  dishes: [
    ['Pa de massa mare i AOVE', 'Oli d’oliva verge extra de collita primerenca'],
    ['Croquetes de pernil ibèric', 'Beixamel cremosa i pernil ibèric'],
    ['Seitons en vinagre', 'Amb all tendre i julivert'],
    ['Hummus de cigró i pebre roig', 'Amb pa pla torrat'],
    ['Taula de formatges artesans', 'Selecció de tres formatges amb codonyat'],
    ['Amanida de temporada', 'Fulles verdes, tomàquet raf i vinagreta de llimona'],
    ['Crema de carbassa rostida', 'Amb llavors torrades i oli de romaní'],
    ['Tàrtar de tonyina vermella', 'Alvocat, soja suau i ceba tendra'],
    ['Carxofes confitades', 'Amb pernil i rovell curat'],
    ['Llobarro a la planxa', 'Verdures de temporada i salsa verda'],
    ['Galta de xai', 'Estofada a foc lent amb puré de patata'],
    ['Albergínia rostida i formatge fresc', 'Tomàquet confitat i herbes'],
    ['Secret ibèric', 'Amb pebrots escalivats i patates a la fornera'],
    ['Arròs del senyoret', 'Marisc pelat, safrà i fumet propi'],
    ['Arròs melós de bolets', 'Ceps, parmesà i tòfona'],
    ['Fideuà de peix', 'Amb allioli suau'],
    ['Pastís de formatge al forn', 'Amb coulis de fruits vermells'],
    ['Crema catalana', 'Sucre caramel·litzat al moment'],
    ['Gelat d’oli d’oliva', 'Amb taronja confitada'],
    ['Aigua mineral', 'Amb gas o sense (50 cl)'],
    ['Vi de la casa', 'Copa de negre o blanc'],
    ['Vermut artesà', 'Amb oliva i taronja'],
    ['Cafè espresso', 'Torrat mitjà, origen seleccionat'],
  ],
  gallery: {
    eyebrow: 'Galeria',
    title: 'Així és Casa Oliva.',
    alts: [
      'Plat principal de cuina mediterrània emplatat',
      'Amanida fresca de temporada amb verdures de colors',
      'Ambient del menjador amb llum càlida',
      'Detall d’un plat de pasta i verdures',
    ],
  },
  reservations: {
    eyebrow: 'Reserves',
    title: 'Reserva la teva taula',
    description:
      'Truca’ns i et confirmem la disponibilitat a l’instant. Atenem de dimarts a diumenge en horari de servei.',
    question: 'Vols reservar?',
    call: 'Truca per reservar',
    imageAlt: 'Menjador de Casa Oliva amb les taules parades',
  },
  locationEyebrow: 'Ubicació',
  privacy:
    'En aquesta demo les reserves es fan per telèfon. En un projecte real s’informaria del tractament de dades d’acord amb el RGPD.',
}

const gl: RestaurantCopy = {
  description:
    'Restaurante mediterráneo para ceas que se alongan: produto de tempada, pratos para compartir e unha mesa sen présas no centro de Madrid.',
  cuisine: 'Mediterránea',
  seo: {
    title: 'Casa Oliva | Restaurante mediterráneo en Madrid',
    description:
      'Casa Oliva: cociña mediterránea de produto en Madrid. Consulta o menú, reserva mesa e descobre a nosa cociña de tempada.',
  },
  hero: {
    title: 'Mesa longa, produto de tempada, aceite de verdade.',
    subtitle:
      'Para quen reserva con ganas de compartir: cociña mediterránea de tempada, carta viva e unha mesa pensada para quedar.',
    imageAlt: 'Mesa servida con pratos mediterráneos nun ambiente de restaurante',
    meta: ['Para compartir', 'Produto de tempada', 'Reservas recomendadas'],
  },
  about: {
    eyebrow: 'Nós',
    title: 'Unha cociña que comeza polo produto.',
    imageAlt: 'Interior cálido do restaurante con mesas de madeira e luz natural',
    blocks: [
      {
        heading: 'Produto e tempada',
        body: 'Cociñamos para a mesa compartida: aceite de oliva virxe, verdura de horta, peixe do día e receitas mediterráneas con criterio de tempada.',
      },
      {
        heading: 'Mesa sen présas',
        body: 'Se buscas unha cea especial sen teatralidade —só bo produto e un ritmo pausado—, esta é a túa mesa.',
      },
      {
        heading: 'Sobremesa coidada',
        body: 'Reservamos con calma, servimos sen présas e coidamos cada detalle para que a sobremesa sexa tan boa coma o prato.',
      },
    ],
  },
  trustEyebrow: 'Para mesas que se quedan',
  trustLabel: 'Información rápida',
  trust: ['4,8 en Google', 'Tempada e proximidade', 'Pratos para compartir', 'Ceas sen présas'],
  nav: ['Inicio', 'Menú', 'Nós', 'Galería', 'Contacto'],
  footer: ['Inicio', 'Menú', 'Nós', 'Contacto', 'Reservas'],
  skip: 'Saltar ao menú',
  homeLabel: 'inicio',
  book: 'Reservar mesa',
  seeMenu: 'Ver o menú',
  menu: {
    eyebrow: 'Carta',
    title: 'Menú',
    description: 'Produto de tempada, cociña mediterránea e pratos pensados para compartir.',
    tabs: 'Categorías do menú',
  },
  categories: [
    ['Para compartir', 'Pratos para compartir na mesa'],
    ['Entrantes', 'Entrante fresco de tempada'],
    ['Principais', 'Prato principal emprazado'],
    ['Arroces', 'Arroz mediterráneo en cazola'],
    ['Sobremesas', 'Sobremesa artesá'],
    ['Bebidas', 'Copa de viño na mesa'],
  ],
  dishes: [
    ['Pan de masa nai e AOVE', 'Aceite de oliva virxe extra de colleita temperá'],
    ['Croquetas de xamón ibérico', 'Bechamel cremosa e xamón ibérico'],
    ['Bocareos en vinagre', 'Con allo tenro e perexil'],
    ['Hummus de garavanzo e pemento', 'Con pan plano tostado'],
    ['Táboa de queixos artesáns', 'Selección de tres queixos con marmelo'],
    ['Ensalada de tempada', 'Follas verdes, tomate raf e vinagreta de limón'],
    ['Crema de cabaza asada', 'Con sementes tostadas e aceite de romeu'],
    ['Tártaro de atún vermello', 'Aguacate, soia suave e cebolete'],
    ['Alcachofas confitadas', 'Con xamón e xema curada'],
    ['Robaliza á prancha', 'Verduras de tempada e salsa verde'],
    ['Fazula de año', 'Estufada a lume lento con puré de pataca'],
    ['Berenxena asada e queixo fresco', 'Tomate confitado e herbas'],
    ['Secreto ibérico', 'Con pementos asados e patacas panadeiras'],
    ['Arroz do senyoret', 'Marisco pelado, azafrán e fumet propio'],
    ['Arroz meloso de cogomelos', 'Boletos, parmesano e trufa'],
    ['Fideuà de peixe', 'Con allioli suave'],
    ['Torta de queixo ao forno', 'Con coulis de froitos vermellos'],
    ['Crema catalá', 'Azucre caramelizado ao momento'],
    ['Xeado de aceite de oliva', 'Con laranxa confitada'],
    ['Auga mineral', 'Con ou sen gas (50 cl)'],
    ['Viño da casa', 'Copa de tinto ou branco'],
    ['Vermú artesán', 'Con oliva e laranxa'],
    ['Café expreso', 'Torrado medio, orixe seleccionada'],
  ],
  gallery: {
    eyebrow: 'Galería',
    title: 'Así se sente Casa Oliva.',
    alts: [
      'Prato principal de cociña mediterránea emprazado',
      'Ensalada fresca de tempada con verduras de cores',
      'Ambiente do comedor con luz cálida',
      'Detalle dun prato de pasta e verduras',
    ],
  },
  reservations: {
    eyebrow: 'Reservas',
    title: 'Reserva a túa mesa',
    description:
      'Chama e confirmámosche a dispoñibilidade ao momento. Atendemos de martes a domingo en horario de servizo.',
    question: 'Queres reservar?',
    call: 'Chamar para reservar',
    imageAlt: 'Comedor de Casa Oliva coas mesas preparadas',
  },
  locationEyebrow: 'Localización',
  privacy:
    'Nesta demo as reservas fanse por teléfono. Nun proxecto real informaríase do tratamento de datos conforme ao RGPD.',
}

const eu: RestaurantCopy = {
  description:
    'Luzatzen diren afarietarako jatetxe mediterraneoa: sasoiko produktua, partekatzeko platerak eta presarik gabeko mahaia Madrilgo erdigunean.',
  cuisine: 'Mediterraneoa',
  seo: {
    title: 'Casa Oliva | Jatetxe mediterraneoa Madrilen',
    description:
      'Casa Oliva: produktuan oinarritutako sukaldaritza mediterraneoa Madrilen. Ikusi menua, erreserbatu mahaia eta ezagutu gure sasoiko sukaldaritza.',
  },
  hero: {
    title: 'Mahai luzea, sasoiko produktua, benetako olioa.',
    subtitle:
      'Partekatzeko gogoz erreserbatzen dutenentzat: sasoiko sukaldaritza mediterraneoa, karta bizia eta geratzeko pentsatutako mahaia.',
    imageAlt: 'Plater mediterraneoz hornitutako mahaia jatetxe giroan',
    meta: ['Partekatzeko', 'Sasoiko produktua', 'Erreserba gomendatua'],
  },
  about: {
    eyebrow: 'Gu',
    title: 'Produktutik hasten den sukaldaritza.',
    imageAlt: 'Jatetxearen barrualde epela, egurrezko mahaiekin eta argi naturalarekin',
    blocks: [
      {
        heading: 'Produktua eta sasoia',
        body: 'Mahai partekaturako sukaldatzen dugu: oliba-olio birjina, baratzeko barazkiak, eguneko arraina eta sasoiaren araberako errezeta mediterraneoak.',
      },
      {
        heading: 'Presarik gabeko mahaia',
        body: 'Afari berezi bat bilatzen baduzu, antzerkirik gabe —produktu ona eta erritmo lasaia besterik ez—, hau da zure mahaia.',
      },
      {
        heading: 'Mahai-osteko solasa',
        body: 'Lasai erreserbatzen dugu, presarik gabe zerbitzatzen dugu eta xehetasun guztiak zaintzen ditugu, mahai-osteko solasa platera bezain ona izan dadin.',
      },
    ],
  },
  trustEyebrow: 'Geratzen diren mahaientzat',
  trustLabel: 'Informazio azkarra',
  trust: ['4,8 Googlen', 'Sasoia eta hurbiltasuna', 'Partekatzeko platerak', 'Presarik gabeko afariak'],
  nav: ['Hasiera', 'Menua', 'Gu', 'Galeria', 'Kontaktua'],
  footer: ['Hasiera', 'Menua', 'Gu', 'Kontaktua', 'Erreserbak'],
  skip: 'Joan menura',
  homeLabel: 'hasiera',
  book: 'Erreserbatu mahaia',
  seeMenu: 'Ikusi menua',
  menu: {
    eyebrow: 'Karta',
    title: 'Menua',
    description: 'Sasoiko produktua, sukaldaritza mediterraneoa eta partekatzeko pentsatutako platerak.',
    tabs: 'Menuaren kategoriak',
  },
  categories: [
    ['Partekatzeko', 'Mahaian partekatzeko platerak'],
    ['Sarrerak', 'Sasoiko sarrera freskoa'],
    ['Plater nagusiak', 'Plater nagusia aurkeztuta'],
    ['Arrozak', 'Arroz mediterraneoa kazolan'],
    ['Postreak', 'Etxeko postrea'],
    ['Edariak', 'Ardo-kopa mahaian'],
  ],
  dishes: [
    ['Ama-oreko ogia eta AOVE', 'Uzta goiztiarreko oliba-olio birjina estra'],
    ['Urdaiazpiko iberikoaren kroketak', 'Besamel krematsua eta urdaiazpiko iberikoa'],
    ['Antxoak ozpinetan', 'Baratxuri berriarekin eta perrexilarekin'],
    ['Txitxirio eta piperrauts hummusa', 'Ogi lau txigortuarekin'],
    ['Gazta artisauen ohola', 'Hiru gazta, irasagar-ogiarekin'],
    ['Sasoiko entsalada', 'Hosto berdeak, raf tomatea eta limoi-ozpinoliotsa'],
    ['Kalabaza errearen krema', 'Hazi txigortuekin eta erromero-olioarekin'],
    ['Hegalaburraren tartarra', 'Ahuakatea, soja leuna eta tipulina'],
    ['Orburu konfitatuak', 'Urdaiazpikoarekin eta gorringo onduarekin'],
    ['Lupia plantxan', 'Sasoiko barazkiak eta saltsa berdea'],
    ['Arkume-masailak', 'Su motelean egosiak, patata-purearekin'],
    ['Alberjinia errea eta gazta freskoa', 'Tomate konfitatua eta belarrak'],
    ['Sekretu iberikoa', 'Piper erreekin eta okin-patatekin'],
    ['Senyoret arroza', 'Itsaski zurituak, azafraia eta etxeko fumeta'],
    ['Onddo-arroz krematsua', 'Onddo beltzak, parmesanoa eta boilurra'],
    ['Arrain-fideua', 'Allioli leunarekin'],
    ['Labeko gazta-tarta', 'Fruitu gorrien coulisarekin'],
    ['Krema katalana', 'Unean bertan karamelizatutako azukrea'],
    ['Oliba-olio izozkia', 'Laranja konfitatuarekin'],
    ['Ur minerala', 'Gasarekin edo gabe (50 cl)'],
    ['Etxeko ardoa', 'Ardo beltz edo zuri kopa'],
    ['Bermut artisaua', 'Olibarekin eta laranjarekin'],
    ['Espresso kafea', 'Erreketa ertaina, jatorri hautatua'],
  ],
  gallery: {
    eyebrow: 'Galeria',
    title: 'Horrelakoa da Casa Oliva.',
    alts: [
      'Sukaldaritza mediterraneoko plater nagusia aurkeztuta',
      'Sasoiko entsalada freskoa, koloretako barazkiekin',
      'Jangelako giroa argi epelarekin',
      'Pasta eta barazki plater baten xehetasuna',
    ],
  },
  reservations: {
    eyebrow: 'Erreserbak',
    title: 'Erreserbatu zure mahaia',
    description:
      'Deitu eta berehala baieztatuko dizugu tokirik dagoen. Asteartetik igandera artatzen dugu, zerbitzu-orduetan.',
    question: 'Erreserbatu nahi duzu?',
    call: 'Deitu erreserbatzeko',
    imageAlt: 'Casa Olivako jangela, mahaiak prest dituela',
  },
  locationEyebrow: 'Kokapena',
  privacy:
    'Demo honetan erreserbak telefonoz egiten dira. Benetako proiektu batean, datuen tratamenduari buruzko informazioa emango litzateke DBEOren arabera.',
}

const copy: Record<Lang, RestaurantCopy> = { es, en, ca, gl, eu }

export function getRestaurant(lang: Lang) {
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
    trust: base.trustIcons.map((icon, index) => ({ icon, label: c.trust[index] })),
    categories: base.categories.map((category, index) => ({
      ...category,
      label: c.categories[index][0],
      alt: c.categories[index][1],
    })),
    menu: base.menu.map((item, index) => ({
      ...item,
      name: c.dishes[index][0],
      description: c.dishes[index][1],
    })),
    gallery: base.gallery.map((image, index) => ({ ...image, alt: c.gallery.alts[index] })),
  }
}

export type Restaurant = ReturnType<typeof getRestaurant>

export const RestaurantContext = createContext<Restaurant | null>(null)

export function useRestaurant() {
  const value = useContext(RestaurantContext)
  if (!value) throw new Error('RestaurantContext')
  return value
}
