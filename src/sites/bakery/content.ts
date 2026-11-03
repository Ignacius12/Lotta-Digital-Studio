import { createContext, useContext } from 'react'
import type { Lang } from '../../i18n/langs'
import { demoCopy, formatEuro, hoursRows, legalLinks, zipLabels, type Hours } from '../shared/demo'

const base = {
  name: 'Horno La Espiga',
  phone: { display: '+34 91 000 78 90', tel: '+34910007890' },
  address: {
    street: 'Calle del Panadero 9',
    city: 'Madrid',
    postalCode: '28005',
    region: 'Madrid',
    country: 'ES',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+del+Panadero+9,+Madrid',
    geo: { latitude: 40.4112, longitude: -3.7088 },
  },
  schemaHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:00', closes: '15:00' },
    { days: ['Sunday'], opens: '08:00', closes: '14:00' },
  ] as Hours[],
  ogImage: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop',
  heroImage: {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80&auto=format&fit=crop',
    width: 1600,
    height: 1067,
  },
  aboutImage: {
    src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  navHrefs: ['#inicio', '#horno', '#panes', '#encargos', '#contacto'],
  footerHrefs: ['#inicio', '#panes', '#encargos', '#contacto'],
  products: [
    { id: 'barra', price: 1.4, src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1000&q=80&auto=format&fit=crop' },
    { id: 'masa-madre', price: 3.8, src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1000&q=80&auto=format&fit=crop' },
    { id: 'integral', price: 3.2, src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=1000&q=80&auto=format&fit=crop' },
    { id: 'croissant', price: 1.6, src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1000&q=80&auto=format&fit=crop' },
    { id: 'ensaimada', price: 2.4, src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1000&q=80&auto=format&fit=crop' },
    { id: 'empanada', price: 2.9, src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=1000&q=80&auto=format&fit=crop' },
  ],
  specialties: [
    { id: 'domingo', src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=900&q=80&auto=format&fit=crop' },
    { id: 'fiesta', src: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=900&q=80&auto=format&fit=crop' },
  ],
  gallery: [
    { id: 'g1', src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80&auto=format&fit=crop', width: 900, height: 700 },
    { id: 'g2', src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900&q=80&auto=format&fit=crop', width: 900, height: 1100 },
    { id: 'g3', src: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=900&q=80&auto=format&fit=crop', width: 900, height: 700 },
    { id: 'g4', src: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=900&q=80&auto=format&fit=crop', width: 900, height: 900 },
  ],
}

const es = {
  description:
    'Horno de toda la vida para la compra de la mañana: barra crujiente, bollería del día y encargos para el domingo.',
  seo: {
    title: 'Horno La Espiga | Panadería tradicional en Madrid',
    description:
      'Horno de pan tradicional en Madrid. Pan del día, bollería artesana y encargos. Abierto de madrugada.',
  },
  hero: {
    eyebrow: 'De madrugada, para el barrio',
    title: 'El pan del barrio, todavía caliente.',
    subtitle:
      'Para la compra rápida de la mañana y el encargo del domingo. Amasamos despacio, abrimos temprano y vendemos lo de hoy.',
    imageAlt: 'Panes artesanos recién horneados sobre madera',
    meta: ['Abierto a las 7:00', 'Hornada diaria', 'Encargos de domingo'],
  },
  order: 'Encargar',
  orderByPhone: 'Encargar por teléfono',
  seeBreads: 'Ver panes del día',
  skip: 'Saltar a panes del día',
  about: {
    eyebrow: 'El horno',
    title: 'El mismo oficio, la misma calle.',
    imageAlt: 'Interior de panadería con croissants y mostrador de madera',
    blocks: [
      {
        heading: 'Pan del barrio',
        body: 'Si pasas de camino al trabajo o bajas a por el pan del fin de semana, aquí encuentras corteza crujiente y miga con memoria.',
      },
      {
        heading: 'Sin atajos',
        body: 'Fermentación larga, harina seleccionada y un mostrador que se vacía según sale la hornada.',
      },
      {
        heading: 'Encargos con tiempo',
        body: 'Encargos con un día de antelación para fiestas, mesas grandes y el pan del domingo que no puede faltar.',
      },
    ],
  },
  trustLabel: 'Señas del horno',
  trust: ['Sale de madrugada', 'Harina de cercanía', 'Oficio de barrio', 'Cola corta, pan caliente'],
  products: {
    eyebrow: 'Hoy en el mostrador',
    title: 'Panes y bollería del día',
    description: 'Disponibilidad según hornada. Si buscas algo concreto, llámanos antes de venir.',
    side: 'Del día',
    items: [
      ['Barra de pueblo', 'Corteza crujiente y miga alveolada', 'Barra de pan rústica recién horneada'],
      ['Hogaza de masa madre', 'Fermentación lenta de 18 horas', 'Hogaza de masa madre sobre madera'],
      ['Pan integral de espelta', 'Con semillas tostadas', 'Pan integral con semillas en cesta'],
      ['Croissant de mantequilla', 'Hojaldre laminado a mano', 'Croissants de mantequilla en el mostrador'],
      ['Ensaimada', 'Clásica o rellena de cabello de ángel', 'Bollería dulce artesanal'],
      ['Empanada gallega', 'Del día · atún o carne', 'Mostrador de panadería con productos del día'],
    ],
    carousel: 'carrusel',
    slide: (index: number, total: number, name: string) => `Producto ${index} de ${total}: ${name}`,
    prev: 'Producto anterior',
    next: 'Producto siguiente',
    dots: 'Productos del mostrador',
    see: (name: string) => `Ver ${name}`,
  },
  specialties: {
    eyebrow: 'Para encargar',
    title: 'Cestas, fiestas y mesas bien puestas.',
    items: [
      ['Cesta del domingo', 'Hogaza, bollería y un dulce de temporada para la mesa.', 'Pan rústico recién cortado'],
      ['Encargos para fiestas', 'Bandejas de bollería y pan para celebraciones del barrio.', 'Cupcakes y bollería dulce artesanal'],
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: 'El pan, de cerca.',
    alts: ['Variedad de panes artesanos', 'Croissants en el mostrador', 'Fachada de panadería tradicional', 'Panes en cestas de mimbre'],
  },
  orderSection: {
    eyebrow: 'Encargos',
    title: '¿Quieres encargar?',
    description:
      'Llama y te reservamos la hornada o preparamos tu pedido para fiestas y domingos. Mejor con un día de antelación.',
    call: 'Llamar al horno',
  },
  locationEyebrow: 'Dónde estamos',
  locationNote: 'El pan caliente suele salir a primera hora. Si llegas tarde, pregunta qué queda de la hornada.',
  nav: ['Inicio', 'El horno', 'Panes', 'Encargos', 'Contacto'],
  footer: ['Inicio', 'Panes', 'Encargos', 'Contacto'],
  privacy:
    'En esta demo los encargos se gestionan por teléfono. En un proyecto real se informaría del tratamiento de datos conforme al RGPD.',
}

type BakeryCopy = typeof es

const en: BakeryCopy = {
  description:
    'A neighbourhood bakery for the morning shop: crusty baguettes, fresh pastries and Sunday orders.',
  seo: {
    title: 'Horno La Espiga | Traditional bakery in Madrid',
    description:
      'Traditional bakery in Madrid. Bread of the day, handmade pastries and orders. Open from early morning.',
  },
  hero: {
    eyebrow: 'Baked before dawn, for the neighbourhood',
    title: 'The neighbourhood’s bread, still warm.',
    subtitle:
      'For the quick morning shop and the Sunday order. We knead slowly, open early and sell what was baked today.',
    imageAlt: 'Freshly baked artisan loaves on wood',
    meta: ['Open at 7:00', 'Baked daily', 'Sunday orders'],
  },
  order: 'Order',
  orderByPhone: 'Order by phone',
  seeBreads: 'See today’s bread',
  skip: 'Skip to today’s bread',
  about: {
    eyebrow: 'The bakery',
    title: 'The same craft, the same street.',
    imageAlt: 'Bakery interior with croissants and a wooden counter',
    blocks: [
      {
        heading: 'Neighbourhood bread',
        body: 'Whether you’re on your way to work or popping out for the weekend loaf, here you’ll find a crackling crust and a crumb with character.',
      },
      {
        heading: 'No shortcuts',
        body: 'Long fermentation, carefully chosen flour and a counter that empties as each batch comes out.',
      },
      {
        heading: 'Order ahead',
        body: 'Order a day ahead for parties, big tables and the Sunday loaf you can’t do without.',
      },
    ],
  },
  trustLabel: 'About the bakery',
  trust: ['Baked before dawn', 'Locally milled flour', 'A neighbourhood craft', 'Short queue, warm bread'],
  products: {
    eyebrow: 'On the counter today',
    title: 'Today’s bread and pastries',
    description: 'Availability depends on the batch. If you’re after something specific, call before you come.',
    side: 'Today',
    items: [
      ['Country baguette', 'Crackling crust and an open crumb', 'Rustic, freshly baked baguette'],
      ['Sourdough loaf', 'Slow 18-hour fermentation', 'Sourdough loaf on wood'],
      ['Wholegrain spelt bread', 'With toasted seeds', 'Wholegrain bread with seeds in a basket'],
      ['Butter croissant', 'Hand-laminated pastry', 'Butter croissants on the counter'],
      ['Ensaimada', 'Classic or filled with pumpkin jam', 'Handmade sweet pastries'],
      ['Galician empanada', 'Made today · tuna or meat', 'Bakery counter with the day’s products'],
    ],
    carousel: 'carousel',
    slide: (index, total, name) => `Product ${index} of ${total}: ${name}`,
    prev: 'Previous product',
    next: 'Next product',
    dots: 'Products on the counter',
    see: (name) => `Show ${name}`,
  },
  specialties: {
    eyebrow: 'To order',
    title: 'Baskets, parties and well-laid tables.',
    items: [
      ['Sunday basket', 'A loaf, pastries and a seasonal sweet for the table.', 'Freshly sliced rustic bread'],
      ['Party orders', 'Trays of pastries and bread for neighbourhood celebrations.', 'Cupcakes and handmade sweet pastries'],
    ],
  },
  gallery: {
    eyebrow: 'Gallery',
    title: 'Bread, up close.',
    alts: ['A variety of artisan breads', 'Croissants on the counter', 'Front of a traditional bakery', 'Loaves in wicker baskets'],
  },
  orderSection: {
    eyebrow: 'Orders',
    title: 'Want to place an order?',
    description:
      'Call us and we’ll set aside a batch or prepare your order for parties and Sundays. Ideally a day ahead.',
    call: 'Call the bakery',
  },
  locationEyebrow: 'Find us',
  locationNote: 'Warm bread usually comes out first thing. If you come later, ask what’s left from the batch.',
  nav: ['Home', 'The bakery', 'Bread', 'Orders', 'Contact'],
  footer: ['Home', 'Bread', 'Orders', 'Contact'],
  privacy:
    'In this demo, orders are handled by phone. A real project would explain how personal data is processed under the GDPR.',
}

const ca: BakeryCopy = {
  description:
    'Forn de tota la vida per a la compra del matí: barra cruixent, brioixeria del dia i encàrrecs per al diumenge.',
  seo: {
    title: 'Horno La Espiga | Forn tradicional a Madrid',
    description:
      'Forn de pa tradicional a Madrid. Pa del dia, brioixeria artesana i encàrrecs. Obert de bon matí.',
  },
  hero: {
    eyebrow: 'De matinada, per al barri',
    title: 'El pa del barri, encara calent.',
    subtitle:
      'Per a la compra ràpida del matí i l’encàrrec del diumenge. Pastem a poc a poc, obrim d’hora i venem el d’avui.',
    imageAlt: 'Pans artesans acabats de fornejar sobre fusta',
    meta: ['Obert a les 7:00', 'Fornada diària', 'Encàrrecs de diumenge'],
  },
  order: 'Encarrega',
  orderByPhone: 'Encarrega per telèfon',
  seeBreads: 'Mira el pa del dia',
  skip: 'Salta al pa del dia',
  about: {
    eyebrow: 'El forn',
    title: 'El mateix ofici, el mateix carrer.',
    imageAlt: 'Interior de forn amb croissants i taulell de fusta',
    blocks: [
      {
        heading: 'Pa del barri',
        body: 'Si passes de camí a la feina o baixes a buscar el pa del cap de setmana, aquí trobaràs crosta cruixent i molla amb memòria.',
      },
      {
        heading: 'Sense dreceres',
        body: 'Fermentació llarga, farina seleccionada i un taulell que es buida a mesura que surt la fornada.',
      },
      {
        heading: 'Encàrrecs amb temps',
        body: 'Encàrrecs amb un dia d’antelació per a festes, taules grans i el pa del diumenge que no pot faltar.',
      },
    ],
  },
  trustLabel: 'Senyes del forn',
  trust: ['Surt de matinada', 'Farina de proximitat', 'Ofici de barri', 'Cua curta, pa calent'],
  products: {
    eyebrow: 'Avui al taulell',
    title: 'Pa i brioixeria del dia',
    description: 'Disponibilitat segons la fornada. Si busques alguna cosa concreta, truca’ns abans de venir.',
    side: 'Del dia',
    items: [
      ['Barra de poble', 'Crosta cruixent i molla alveolada', 'Barra de pa rústica acabada de fornejar'],
      ['Pa de massa mare', 'Fermentació lenta de 18 hores', 'Pa de massa mare sobre fusta'],
      ['Pa integral d’espelta', 'Amb llavors torrades', 'Pa integral amb llavors en una cistella'],
      ['Croissant de mantega', 'Full laminat a mà', 'Croissants de mantega al taulell'],
      ['Ensaïmada', 'Clàssica o farcida de cabell d’àngel', 'Brioixeria dolça artesana'],
      ['Empanada gallega', 'Del dia · tonyina o carn', 'Taulell de forn amb productes del dia'],
    ],
    carousel: 'carrusel',
    slide: (index, total, name) => `Producte ${index} de ${total}: ${name}`,
    prev: 'Producte anterior',
    next: 'Producte següent',
    dots: 'Productes del taulell',
    see: (name) => `Mostra ${name}`,
  },
  specialties: {
    eyebrow: 'Per encarregar',
    title: 'Cistelles, festes i taules ben parades.',
    items: [
      ['Cistella del diumenge', 'Pa de pagès, brioixeria i un dolç de temporada per a la taula.', 'Pa rústic acabat de tallar'],
      ['Encàrrecs per a festes', 'Safates de brioixeria i pa per a celebracions del barri.', 'Magdalenes i brioixeria dolça artesana'],
    ],
  },
  gallery: {
    eyebrow: 'Galeria',
    title: 'El pa, de prop.',
    alts: ['Varietat de pans artesans', 'Croissants al taulell', 'Façana d’un forn tradicional', 'Pans en cistelles de vímet'],
  },
  orderSection: {
    eyebrow: 'Encàrrecs',
    title: 'Vols fer un encàrrec?',
    description:
      'Truca’ns i et reservarem la fornada o et prepararem la comanda per a festes i diumenges. Millor amb un dia d’antelació.',
    call: 'Truca al forn',
  },
  locationEyebrow: 'On som',
  locationNote: 'El pa calent sol sortir a primera hora. Si arribes tard, pregunta què queda de la fornada.',
  nav: ['Inici', 'El forn', 'Pans', 'Encàrrecs', 'Contacte'],
  footer: ['Inici', 'Pans', 'Encàrrecs', 'Contacte'],
  privacy:
    'En aquesta demo els encàrrecs es gestionen per telèfon. En un projecte real s’informaria del tractament de dades d’acord amb el RGPD.',
}

const gl: BakeryCopy = {
  description:
    'Forno de toda a vida para a compra da mañá: barra crocante, bollería do día e encargos para o domingo.',
  seo: {
    title: 'Horno La Espiga | Panadaría tradicional en Madrid',
    description:
      'Forno de pan tradicional en Madrid. Pan do día, bollería artesá e encargos. Aberto desde moi cedo.',
  },
  hero: {
    eyebrow: 'De madrugada, para o barrio',
    title: 'O pan do barrio, aínda quente.',
    subtitle:
      'Para a compra rápida da mañá e o encargo do domingo. Amasamos amodo, abrimos cedo e vendemos o de hoxe.',
    imageAlt: 'Pans artesáns recén cocidos sobre madeira',
    meta: ['Aberto ás 7:00', 'Fornada diaria', 'Encargos de domingo'],
  },
  order: 'Encargar',
  orderByPhone: 'Encargar por teléfono',
  seeBreads: 'Ver os pans do día',
  skip: 'Saltar aos pans do día',
  about: {
    eyebrow: 'O forno',
    title: 'O mesmo oficio, a mesma rúa.',
    imageAlt: 'Interior de panadaría con cruasáns e mostrador de madeira',
    blocks: [
      {
        heading: 'Pan do barrio',
        body: 'Se pasas camiño do traballo ou baixas polo pan da fin de semana, aquí atopas codia crocante e miolo con memoria.',
      },
      {
        heading: 'Sen atallos',
        body: 'Fermentación longa, fariña seleccionada e un mostrador que se baleira segundo sae a fornada.',
      },
      {
        heading: 'Encargos con tempo',
        body: 'Encargos cun día de antelación para festas, mesas grandes e o pan do domingo que non pode faltar.',
      },
    ],
  },
  trustLabel: 'Sinais do forno',
  trust: ['Sae de madrugada', 'Fariña de proximidade', 'Oficio de barrio', 'Cola curta, pan quente'],
  products: {
    eyebrow: 'Hoxe no mostrador',
    title: 'Pans e bollería do día',
    description: 'Dispoñibilidade segundo a fornada. Se buscas algo concreto, chámanos antes de vir.',
    side: 'Do día',
    items: [
      ['Barra de aldea', 'Codia crocante e miolo alveolado', 'Barra de pan rústica recén cocida'],
      ['Bola de masa nai', 'Fermentación lenta de 18 horas', 'Bola de masa nai sobre madeira'],
      ['Pan integral de espelta', 'Con sementes torradas', 'Pan integral con sementes nunha cesta'],
      ['Cruasán de manteiga', 'Follado laminado a man', 'Cruasáns de manteiga no mostrador'],
      ['Ensaimada', 'Clásica ou recheada de cabelo de anxo', 'Bollería doce artesá'],
      ['Empanada galega', 'Do día · atún ou carne', 'Mostrador de panadaría con produtos do día'],
    ],
    carousel: 'carrusel',
    slide: (index, total, name) => `Produto ${index} de ${total}: ${name}`,
    prev: 'Produto anterior',
    next: 'Produto seguinte',
    dots: 'Produtos do mostrador',
    see: (name) => `Ver ${name}`,
  },
  specialties: {
    eyebrow: 'Para encargar',
    title: 'Cestas, festas e mesas ben postas.',
    items: [
      ['Cesta do domingo', 'Bola de pan, bollería e un doce de tempada para a mesa.', 'Pan rústico recén cortado'],
      ['Encargos para festas', 'Bandexas de bollería e pan para celebracións do barrio.', 'Magdalenas e bollería doce artesá'],
    ],
  },
  gallery: {
    eyebrow: 'Galería',
    title: 'O pan, de preto.',
    alts: ['Variedade de pans artesáns', 'Cruasáns no mostrador', 'Fachada dunha panadaría tradicional', 'Pans en cestas de vimbio'],
  },
  orderSection: {
    eyebrow: 'Encargos',
    title: 'Queres facer un encargo?',
    description:
      'Chama e reservámosche a fornada ou preparamos o teu pedido para festas e domingos. Mellor cun día de antelación.',
    call: 'Chamar ao forno',
  },
  locationEyebrow: 'Onde estamos',
  locationNote: 'O pan quente adoita saír a primeira hora. Se chegas tarde, pregunta que queda da fornada.',
  nav: ['Inicio', 'O forno', 'Pans', 'Encargos', 'Contacto'],
  footer: ['Inicio', 'Pans', 'Encargos', 'Contacto'],
  privacy:
    'Nesta demo os encargos xestiónanse por teléfono. Nun proxecto real informaríase do tratamento de datos conforme ao RXPD.',
}

const eu: BakeryCopy = {
  description:
    'Betiko okindegia goizeko erosketarako: ogi-barra kurruskaria, eguneko gozogintza eta igandeko enkarguak.',
  seo: {
    title: 'Horno La Espiga | Okindegi tradizionala Madrilen',
    description:
      'Ogi-labe tradizionala Madrilen. Eguneko ogia, gozogintza artisaua eta enkarguak. Goiz-goizetik irekita.',
  },
  hero: {
    eyebrow: 'Goizaldean, auzoarentzat',
    title: 'Auzoko ogia, oraindik bero.',
    subtitle:
      'Goizeko erosketa azkarrerako eta igandeko enkargurako. Poliki oratzen dugu, goiz irekitzen dugu eta gaurkoa saltzen dugu.',
    imageAlt: 'Labetik atera berri diren ogi artisauak egurraren gainean',
    meta: ['7:00etan irekita', 'Eguneroko labealdia', 'Igandeko enkarguak'],
  },
  order: 'Enkargatu',
  orderByPhone: 'Enkargatu telefonoz',
  seeBreads: 'Ikusi eguneko ogiak',
  skip: 'Joan eguneko ogietara',
  about: {
    eyebrow: 'Okindegia',
    title: 'Ofizio bera, kale bera.',
    imageAlt: 'Okindegiaren barrualdea, croissantekin eta egurrezko erakusmahaiarekin',
    blocks: [
      {
        heading: 'Auzoko ogia',
        body: 'Lanera bidean bazoaz edo asteburuko ogiaren bila jaitsi bazara, hemen azal kurruskaria eta memoriadun mamia aurkituko dituzu.',
      },
      {
        heading: 'Lasterbiderik gabe',
        body: 'Hartzidura luzea, irin hautatua eta labealdia atera ahala husten den erakusmahaia.',
      },
      {
        heading: 'Enkarguak aldez aurretik',
        body: 'Egun bat lehenago egin enkarguak festetarako, mahai handietarako eta falta ezin den igandeko ogirako.',
      },
    ],
  },
  trustLabel: 'Okindegiaren ezaugarriak',
  trust: ['Goizaldean labetik', 'Hurbileko irina', 'Auzoko ofizioa', 'Ilara laburra, ogi beroa'],
  products: {
    eyebrow: 'Gaur erakusmahaian',
    title: 'Eguneko ogiak eta gozogintza',
    description: 'Labealdiaren araberako eskuragarritasuna. Zerbait zehatza nahi baduzu, deitu etorri aurretik.',
    side: 'Egunekoa',
    items: [
      ['Herriko ogi-barra', 'Azal kurruskaria eta mami harroa', 'Labetik atera berri den ogi-barra rustikoa'],
      ['Ama-orezko ogia', '18 orduko hartzidura geldoa', 'Ama-orezko ogia egurraren gainean'],
      ['Ezkanda integralezko ogia', 'Hazi txigortuekin', 'Hazidun ogi integrala saski batean'],
      ['Gurinezko croissanta', 'Eskuz geruzatutako hostorea', 'Gurinezko croissantak erakusmahaian'],
      ['Ensaimada', 'Klasikoa edo aingeru-ilez betea', 'Gozogintza artisaua'],
      ['Galiziako enpanada', 'Egunekoa · atuna edo haragia', 'Eguneko produktuak dituen okindegiko erakusmahaia'],
    ],
    carousel: 'karrusela',
    slide: (index, total, name) => `${index}/${total} produktua: ${name}`,
    prev: 'Aurreko produktua',
    next: 'Hurrengo produktua',
    dots: 'Erakusmahaiko produktuak',
    see: (name) => `Ikusi: ${name}`,
  },
  specialties: {
    eyebrow: 'Enkargatzeko',
    title: 'Saskiak, festak eta ondo jarritako mahaiak.',
    items: [
      ['Igandeko saskia', 'Ogia, gozogintza eta sasoiko goxoki bat mahairako.', 'Ebaki berri den ogi rustikoa'],
      ['Festetarako enkarguak', 'Gozogintza- eta ogi-erretiluak auzoko ospakizunetarako.', 'Cupcakeak eta gozogintza artisaua'],
    ],
  },
  gallery: {
    eyebrow: 'Galeria',
    title: 'Ogia, gertutik.',
    alts: ['Ogi artisauen aukera', 'Croissantak erakusmahaian', 'Okindegi tradizional baten fatxada', 'Ogiak zumezko saskietan'],
  },
  orderSection: {
    eyebrow: 'Enkarguak',
    title: 'Enkargu bat egin nahi duzu?',
    description:
      'Deitu, eta labealdia gordeko dizugu edo zure eskaera prestatuko dugu festetarako eta igandeetarako. Hobe egun bat lehenago.',
    call: 'Deitu okindegira',
  },
  locationEyebrow: 'Non gauden',
  locationNote: 'Ogi beroa goiz-goizean ateratzen da normalean. Berandu iristen bazara, galdetu labealditik zer geratzen den.',
  nav: ['Hasiera', 'Okindegia', 'Ogiak', 'Enkarguak', 'Kontaktua'],
  footer: ['Hasiera', 'Ogiak', 'Enkarguak', 'Kontaktua'],
  privacy:
    'Demo honetan, enkarguak telefonoz kudeatzen dira. Benetako proiektu batean, datuen tratamenduaren berri emango litzateke DBEOren arabera.',
}

const copy: Record<Lang, BakeryCopy> = { es, en, ca, gl, eu }

export function getBakery(lang: Lang) {
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
    products: base.products.map((product, index) => ({
      ...product,
      price: formatEuro(product.price, lang),
      name: c.products.items[index][0],
      description: c.products.items[index][1],
      alt: c.products.items[index][2],
    })),
    specialties: base.specialties.map((item, index) => ({
      ...item,
      name: c.specialties.items[index][0],
      description: c.specialties.items[index][1],
      alt: c.specialties.items[index][2],
    })),
    gallery: base.gallery.map((image, index) => ({ ...image, alt: c.gallery.alts[index] })),
  }
}

export type Bakery = ReturnType<typeof getBakery>

export const BakeryContext = createContext<Bakery | null>(null)

export function useBakery() {
  const value = useContext(BakeryContext)
  if (!value) throw new Error('BakeryContext')
  return value
}
