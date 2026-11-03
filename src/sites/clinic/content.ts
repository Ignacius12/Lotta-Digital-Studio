import { createContext, useContext } from 'react'
import type { Lang } from '../../i18n/langs'
import { demoCopy, hoursRows, legalLinks, zipLabels, type Hours } from '../shared/demo'

const base = {
  name: 'Clínica Alba',
  phone: { display: '+34 91 000 45 67', tel: '+34910004567' },
  email: 'citas@clinicaalba.demo',
  address: {
    street: 'Calle de Núñez de Balboa 42',
    city: 'Madrid',
    postalCode: '28001',
    region: 'Madrid',
    country: 'ES',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Calle+de+Nunez+de+Balboa+42,+Madrid',
    geo: { latitude: 40.4272, longitude: -3.6828 },
  },
  schemaHours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:30', closes: '20:00' },
    { days: ['Friday'], opens: '09:30', closes: '15:00' },
    { days: ['Saturday', 'Sunday'] },
  ] as Hours[],
  ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop',
  heroImage: {
    src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600&q=80&auto=format&fit=crop',
    width: 1600,
    height: 1067,
  },
  aboutImage: {
    src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80&auto=format&fit=crop',
    width: 1200,
    height: 1500,
  },
  treatmentsImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1400&q=80&auto=format&fit=crop',
  navHrefs: ['#inicio', '#tratamientos', '#clinica', '#equipo', '#contacto'],
  footerHrefs: ['#inicio', '#tratamientos', '#equipo', '#cita', '#contacto'],
  treatmentIds: ['higiene', 'estetica', 'ortodoncia', 'implantes', 'endodoncia', 'pediatrica'],
  team: [
    { id: 'dra-alba', src: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80&auto=format&fit=crop' },
    { id: 'dr-ruiz', src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80&auto=format&fit=crop' },
    { id: 'dra-sanz', src: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80&auto=format&fit=crop' },
  ],
}

const es = {
  description:
    'Clínica dental en Madrid orientada al cuidado preventivo, la estética natural y una experiencia tranquila para cada paciente.',
  seo: {
    title: 'Clínica Alba | Odontología en Madrid',
    description:
      'Clínica dental en Madrid. Tratamientos, equipo y cita telefónica. Cuidado claro, cercano y profesional.',
  },
  hero: {
    eyebrow: 'Odontología en Madrid',
    title: 'Tu sonrisa, con calma y sin prisa.',
    subtitle:
      'Para pacientes que quieren entender cada paso. Te explicamos opciones, tiempos y cuidados con claridad — especialmente en la primera visita.',
    imageAlt: 'Recepción e interior luminoso de una clínica dental moderna',
    meta: ['Primera visita sin prisa', 'Explicaciones claras', 'Ambiente calmado'],
  },
  book: 'Pedir cita',
  seeTreatments: 'Ver tratamientos',
  skip: 'Saltar a tratamientos',
  about: {
    eyebrow: 'La clínica',
    title: 'Diseñada para que te sientas acompañado.',
    imageAlt: 'Pasillo luminoso de clínica con acabados limpios y contemporáneos',
    blocks: [
      {
        heading: 'Escucha primero',
        body: 'Sabemos que ir al dentista no siempre es fácil. Por eso empezamos escuchando, explicamos sin tecnicismos y avanzamos a tu ritmo.',
      },
      {
        heading: 'Entorno calmado',
        body: 'Protocolos actuales, materiales de calidad y un entorno luminoso pensado para bajar la tensión desde que entras.',
      },
      {
        heading: 'Claridad en cada visita',
        body: 'En cada visita priorizamos claridad: tiempos, opciones y cuidados que puedes entender antes de decidir.',
      },
    ],
  },
  trustLabel: 'Información de confianza',
  trust: [
    ['+12', 'años cuidando sonrisas'],
    ['Trato', 'cercano y claro'],
    ['1ª visita', 'sin sorpresas'],
    ['L–V', 'horario de consulta'],
  ],
  treatments: {
    eyebrow: 'Cuidados',
    title: 'Tratamientos claros, sin complicaciones.',
    description:
      'Información sencilla para decidir con tranquilidad. Cada servicio se explica en consulta, con tiempos y opciones comprensibles.',
    imageAlt: 'Espacio de consulta luminoso y calmado',
    items: [
      ['Higiene y prevención', 'Limpiezas, revisiones y hábitos para mantener tu salud bucal.'],
      ['Estética dental', 'Blanqueamiento y sonrisas naturales, sin exagerar el resultado.'],
      ['Ortodoncia', 'Alineación con criterios funcionales y estéticos equilibrados.'],
      ['Implantología', 'Reposición de piezas con planificación cuidadosa y seguimiento.'],
      ['Endodoncia', 'Tratamientos conservadores para salvar piezas dañadas.'],
      ['Odontopediatría', 'Cuidado infantil en un entorno calmado y comprensible.'],
    ],
  },
  team: {
    eyebrow: 'Equipo',
    title: 'Profesionales que te acompañan.',
    description:
      'Perfiles de ejemplo para esta demo. En un proyecto real se mostrarían datos verificados del equipo.',
    members: [
      ['Dra. Elena Alba', 'Directora médica · Odontología general', 'Retrato profesional de la Dra. Elena Alba'],
      ['Dr. Marcos Ruiz', 'Implantología y cirugía oral', 'Retrato profesional del Dr. Marcos Ruiz'],
      ['Dra. Lucía Sanz', 'Ortodoncia y estética', 'Retrato profesional de la Dra. Lucía Sanz'],
    ],
  },
  appointment: {
    eyebrow: 'Cita',
    title: 'Pide tu cita',
    description:
      'Llama y te damos disponibilidad. Atención en horario de consulta de lunes a viernes.',
    phoneLabel: 'Teléfono de citas',
    call: 'Llamar ahora',
  },
  locationEyebrow: 'Ubicación',
  nav: ['Inicio', 'Tratamientos', 'Clínica', 'Equipo', 'Contacto'],
  footer: ['Inicio', 'Tratamientos', 'Equipo', 'Cita', 'Contacto'],
  privacy:
    'En esta demo las citas se gestionan por teléfono. En un proyecto real se informaría del tratamiento de datos conforme al RGPD.',
}

type ClinicCopy = typeof es

const en: ClinicCopy = {
  description:
    'A dental clinic in Madrid focused on preventive care, natural-looking aesthetics and a calm experience for every patient.',
  seo: {
    title: 'Clínica Alba | Dentist in Madrid',
    description:
      'Dental clinic in Madrid. Treatments, team and appointments by phone. Clear, friendly and professional care.',
  },
  hero: {
    eyebrow: 'Dentistry in Madrid',
    title: 'Your smile, calmly and without rushing.',
    subtitle:
      'For patients who want to understand every step. We explain options, timings and aftercare clearly — especially on your first visit.',
    imageAlt: 'Bright reception and interior of a modern dental clinic',
    meta: ['An unhurried first visit', 'Clear explanations', 'A calm setting'],
  },
  book: 'Book a visit',
  seeTreatments: 'See treatments',
  skip: 'Skip to treatments',
  about: {
    eyebrow: 'The clinic',
    title: 'Designed so you feel looked after.',
    imageAlt: 'Bright clinic corridor with clean, contemporary finishes',
    blocks: [
      {
        heading: 'We listen first',
        body: 'We know going to the dentist isn’t always easy. That’s why we start by listening, explain things without jargon and move at your pace.',
      },
      {
        heading: 'A calm setting',
        body: 'Up-to-date protocols, quality materials and a bright space designed to ease the tension from the moment you walk in.',
      },
      {
        heading: 'Clarity at every visit',
        body: 'At every visit we put clarity first: timings, options and aftercare you can understand before you decide.',
      },
    ],
  },
  trustLabel: 'Why patients trust us',
  trust: [
    ['12+', 'years caring for smiles'],
    ['Friendly', 'and clear care'],
    ['1st visit', 'with no surprises'],
    ['Mon–Fri', 'surgery hours'],
  ],
  treatments: {
    eyebrow: 'Care',
    title: 'Clear treatments, no complications.',
    description:
      'Simple information so you can decide calmly. Every service is explained in the surgery, with timings and options you can follow.',
    imageAlt: 'Bright, calm treatment room',
    items: [
      ['Hygiene and prevention', 'Cleanings, check-ups and habits to keep your mouth healthy.'],
      ['Cosmetic dentistry', 'Whitening and natural-looking smiles, without overdoing it.'],
      ['Orthodontics', 'Alignment that balances function and appearance.'],
      ['Dental implants', 'Replacing teeth with careful planning and follow-up.'],
      ['Root canal treatment', 'Conservative treatments to save damaged teeth.'],
      ['Children’s dentistry', 'Care for children in a calm, easy-to-understand setting.'],
    ],
  },
  team: {
    eyebrow: 'Team',
    title: 'Professionals by your side.',
    description:
      'Sample profiles for this demo. A real project would show verified details of the team.',
    members: [
      ['Dr Elena Alba', 'Medical director · General dentistry', 'Professional portrait of Dr Elena Alba'],
      ['Dr Marcos Ruiz', 'Implantology and oral surgery', 'Professional portrait of Dr Marcos Ruiz'],
      ['Dr Lucía Sanz', 'Orthodontics and cosmetic dentistry', 'Professional portrait of Dr Lucía Sanz'],
    ],
  },
  appointment: {
    eyebrow: 'Appointments',
    title: 'Book your appointment',
    description:
      'Call us and we’ll tell you what’s available. We answer during surgery hours, Monday to Friday.',
    phoneLabel: 'Appointments line',
    call: 'Call now',
  },
  locationEyebrow: 'Location',
  nav: ['Home', 'Treatments', 'Clinic', 'Team', 'Contact'],
  footer: ['Home', 'Treatments', 'Team', 'Appointments', 'Contact'],
  privacy:
    'In this demo, appointments are handled by phone. A real project would explain how personal data is processed under the GDPR.',
}

const ca: ClinicCopy = {
  description:
    'Clínica dental a Madrid orientada a la cura preventiva, l’estètica natural i una experiència tranquil·la per a cada pacient.',
  seo: {
    title: 'Clínica Alba | Odontologia a Madrid',
    description:
      'Clínica dental a Madrid. Tractaments, equip i cita per telèfon. Atenció clara, propera i professional.',
  },
  hero: {
    eyebrow: 'Odontologia a Madrid',
    title: 'El teu somriure, amb calma i sense presses.',
    subtitle:
      'Per a pacients que volen entendre cada pas. T’expliquem opcions, terminis i cures amb claredat, sobretot a la primera visita.',
    imageAlt: 'Recepció i interior lluminós d’una clínica dental moderna',
    meta: ['Primera visita sense presses', 'Explicacions clares', 'Ambient tranquil'],
  },
  book: 'Demana cita',
  seeTreatments: 'Mira els tractaments',
  skip: 'Salta als tractaments',
  about: {
    eyebrow: 'La clínica',
    title: 'Pensada perquè et sentis acompanyat.',
    imageAlt: 'Passadís lluminós de clínica amb acabats nets i contemporanis',
    blocks: [
      {
        heading: 'Primer escoltem',
        body: 'Sabem que anar al dentista no sempre és fàcil. Per això comencem escoltant, expliquem sense tecnicismes i avancem al teu ritme.',
      },
      {
        heading: 'Entorn tranquil',
        body: 'Protocols actuals, materials de qualitat i un espai lluminós pensat per rebaixar la tensió des que entres.',
      },
      {
        heading: 'Claredat a cada visita',
        body: 'A cada visita prioritzem la claredat: terminis, opcions i cures que pots entendre abans de decidir.',
      },
    ],
  },
  trustLabel: 'Informació de confiança',
  trust: [
    ['+12', 'anys cuidant somriures'],
    ['Tracte', 'proper i clar'],
    ['1a visita', 'sense sorpreses'],
    ['Dl–Dv', 'horari de consulta'],
  ],
  treatments: {
    eyebrow: 'Cures',
    title: 'Tractaments clars, sense complicacions.',
    description:
      'Informació senzilla per decidir amb tranquil·litat. Cada servei s’explica a la consulta, amb terminis i opcions comprensibles.',
    imageAlt: 'Consulta lluminosa i tranquil·la',
    items: [
      ['Higiene i prevenció', 'Neteges, revisions i hàbits per mantenir la teva salut bucodental.'],
      ['Estètica dental', 'Blanquejament i somriures naturals, sense exagerar el resultat.'],
      ['Ortodòncia', 'Alineació amb criteris funcionals i estètics equilibrats.'],
      ['Implantologia', 'Reposició de peces amb una planificació acurada i seguiment.'],
      ['Endodòncia', 'Tractaments conservadors per salvar peces danyades.'],
      ['Odontopediatria', 'Atenció infantil en un entorn tranquil i comprensible.'],
    ],
  },
  team: {
    eyebrow: 'Equip',
    title: 'Professionals que t’acompanyen.',
    description:
      'Perfils d’exemple per a aquesta demo. En un projecte real es mostrarien dades verificades de l’equip.',
    members: [
      ['Dra. Elena Alba', 'Directora mèdica · Odontologia general', 'Retrat professional de la Dra. Elena Alba'],
      ['Dr. Marcos Ruiz', 'Implantologia i cirurgia oral', 'Retrat professional del Dr. Marcos Ruiz'],
      ['Dra. Lucía Sanz', 'Ortodòncia i estètica', 'Retrat professional de la Dra. Lucía Sanz'],
    ],
  },
  appointment: {
    eyebrow: 'Cita',
    title: 'Demana la teva cita',
    description:
      'Truca’ns i et direm la disponibilitat. Atenem en horari de consulta, de dilluns a divendres.',
    phoneLabel: 'Telèfon de cites',
    call: 'Truca ara',
  },
  locationEyebrow: 'Ubicació',
  nav: ['Inici', 'Tractaments', 'Clínica', 'Equip', 'Contacte'],
  footer: ['Inici', 'Tractaments', 'Equip', 'Cita', 'Contacte'],
  privacy:
    'En aquesta demo les cites es gestionen per telèfon. En un projecte real s’informaria del tractament de dades d’acord amb el RGPD.',
}

const gl: ClinicCopy = {
  description:
    'Clínica dental en Madrid orientada ao coidado preventivo, á estética natural e a unha experiencia tranquila para cada paciente.',
  seo: {
    title: 'Clínica Alba | Odontoloxía en Madrid',
    description:
      'Clínica dental en Madrid. Tratamentos, equipo e cita por teléfono. Atención clara, próxima e profesional.',
  },
  hero: {
    eyebrow: 'Odontoloxía en Madrid',
    title: 'O teu sorriso, con calma e sen présa.',
    subtitle:
      'Para pacientes que queren entender cada paso. Explicámosche opcións, tempos e coidados con claridade, sobre todo na primeira visita.',
    imageAlt: 'Recepción e interior luminoso dunha clínica dental moderna',
    meta: ['Primeira visita sen présa', 'Explicacións claras', 'Ambiente tranquilo'],
  },
  book: 'Pedir cita',
  seeTreatments: 'Ver tratamentos',
  skip: 'Saltar aos tratamentos',
  about: {
    eyebrow: 'A clínica',
    title: 'Pensada para que te sintas acompañado.',
    imageAlt: 'Corredor luminoso de clínica con acabados limpos e contemporáneos',
    blocks: [
      {
        heading: 'Primeiro escoitamos',
        body: 'Sabemos que ir ao dentista non sempre é doado. Por iso comezamos escoitando, explicamos sen tecnicismos e avanzamos ao teu ritmo.',
      },
      {
        heading: 'Contorno tranquilo',
        body: 'Protocolos actuais, materiais de calidade e un espazo luminoso pensado para baixar a tensión desde que entras.',
      },
      {
        heading: 'Claridade en cada visita',
        body: 'En cada visita priorizamos a claridade: tempos, opcións e coidados que podes entender antes de decidir.',
      },
    ],
  },
  trustLabel: 'Información de confianza',
  trust: [
    ['+12', 'anos coidando sorrisos'],
    ['Trato', 'próximo e claro'],
    ['1.ª visita', 'sen sorpresas'],
    ['L–V', 'horario de consulta'],
  ],
  treatments: {
    eyebrow: 'Coidados',
    title: 'Tratamentos claros, sen complicacións.',
    description:
      'Información sinxela para decidir con tranquilidade. Cada servizo explícase na consulta, con tempos e opcións comprensibles.',
    imageAlt: 'Consulta luminosa e tranquila',
    items: [
      ['Hixiene e prevención', 'Limpezas, revisións e hábitos para manter a túa saúde bucal.'],
      ['Estética dental', 'Branqueamento e sorrisos naturais, sen esaxerar o resultado.'],
      ['Ortodoncia', 'Aliñamento con criterios funcionais e estéticos equilibrados.'],
      ['Implantoloxía', 'Reposición de pezas cunha planificación coidada e seguimento.'],
      ['Endodoncia', 'Tratamentos conservadores para salvar pezas danadas.'],
      ['Odontopediatría', 'Coidado infantil nun contorno tranquilo e comprensible.'],
    ],
  },
  team: {
    eyebrow: 'Equipo',
    title: 'Profesionais que te acompañan.',
    description:
      'Perfís de exemplo para esta demo. Nun proxecto real amosaríanse datos verificados do equipo.',
    members: [
      ['Dra. Elena Alba', 'Directora médica · Odontoloxía xeral', 'Retrato profesional da Dra. Elena Alba'],
      ['Dr. Marcos Ruiz', 'Implantoloxía e cirurxía oral', 'Retrato profesional do Dr. Marcos Ruiz'],
      ['Dra. Lucía Sanz', 'Ortodoncia e estética', 'Retrato profesional da Dra. Lucía Sanz'],
    ],
  },
  appointment: {
    eyebrow: 'Cita',
    title: 'Pide a túa cita',
    description:
      'Chama e dámosche dispoñibilidade. Atendemos en horario de consulta, de luns a venres.',
    phoneLabel: 'Teléfono de citas',
    call: 'Chamar agora',
  },
  locationEyebrow: 'Localización',
  nav: ['Inicio', 'Tratamentos', 'Clínica', 'Equipo', 'Contacto'],
  footer: ['Inicio', 'Tratamentos', 'Equipo', 'Cita', 'Contacto'],
  privacy:
    'Nesta demo as citas xestiónanse por teléfono. Nun proxecto real informaríase do tratamento de datos conforme ao RXPD.',
}

const eu: ClinicCopy = {
  description:
    'Madrilgo hortz-klinika, prebentziozko zainketara, estetika naturalera eta paziente bakoitzarentzako esperientzia lasaira bideratua.',
  seo: {
    title: 'Clínica Alba | Odontologia Madrilen',
    description:
      'Hortz-klinika Madrilen. Tratamenduak, taldea eta hitzordua telefonoz. Arreta argia, hurbila eta profesionala.',
  },
  hero: {
    eyebrow: 'Odontologia Madrilen',
    title: 'Zure irribarrea, lasai eta presarik gabe.',
    subtitle:
      'Urrats bakoitza ulertu nahi duten pazienteentzat. Aukerak, epeak eta zainketak argi azaltzen dizkizugu, batez ere lehen bisitan.',
    imageAlt: 'Hortz-klinika moderno baten harrera eta barrualde argitsua',
    meta: ['Lehen bisita presarik gabe', 'Azalpen argiak', 'Giro lasaia'],
  },
  book: 'Eskatu hitzordua',
  seeTreatments: 'Ikusi tratamenduak',
  skip: 'Joan tratamenduetara',
  about: {
    eyebrow: 'Klinika',
    title: 'Lagunduta senti zaitezen pentsatua.',
    imageAlt: 'Klinikako korridore argitsua, akabera garbi eta garaikideekin',
    blocks: [
      {
        heading: 'Lehenik, entzun',
        body: 'Badakigu dentistarenera joatea ez dela beti erraza. Horregatik, entzuten hasten gara, teknizismorik gabe azaltzen dugu eta zure erritmoan aurrera egiten dugu.',
      },
      {
        heading: 'Ingurune lasaia',
        body: 'Protokolo eguneratuak, kalitatezko materialak eta espazio argitsu bat, sartzen zarenetik tentsioa arintzeko pentsatua.',
      },
      {
        heading: 'Argitasuna bisita bakoitzean',
        body: 'Bisita bakoitzean argitasuna lehenesten dugu: erabaki aurretik uler ditzakezun epeak, aukerak eta zainketak.',
      },
    ],
  },
  trustLabel: 'Konfiantza-informazioa',
  trust: [
    ['+12', 'urte irribarreak zaintzen'],
    ['Tratu', 'hurbila eta argia'],
    ['1. bisita', 'ezustekorik gabe'],
    ['Al–Or', 'kontsulta-ordutegia'],
  ],
  treatments: {
    eyebrow: 'Zainketak',
    title: 'Tratamendu argiak, konplikaziorik gabe.',
    description:
      'Informazio erraza, lasai erabakitzeko. Zerbitzu bakoitza kontsultan azaltzen da, epe eta aukera ulergarriekin.',
    imageAlt: 'Kontsulta-gela argitsu eta lasaia',
    items: [
      ['Higienea eta prebentzioa', 'Garbiketak, azterketak eta ohiturak, ahoko osasuna zaintzeko.'],
      ['Hortz-estetika', 'Zuritzea eta irribarre naturalak, emaitza gehiegizkoa izan gabe.'],
      ['Ortodontzia', 'Lerrokatzea, irizpide funtzional eta estetiko orekatuekin.'],
      ['Inplantologia', 'Hortzak ordezkatzea, plangintza zainduarekin eta jarraipenarekin.'],
      ['Endodontzia', 'Tratamendu kontserbadoreak, kaltetutako hortzak salbatzeko.'],
      ['Haur-odontologia', 'Haurrentzako arreta, ingurune lasai eta ulergarrian.'],
    ],
  },
  team: {
    eyebrow: 'Taldea',
    title: 'Laguntzen dizuten profesionalak.',
    description:
      'Demo honetarako adibide-profilak. Benetako proiektu batean, taldearen datu egiaztatuak erakutsiko lirateke.',
    members: [
      ['Elena Alba doktorea', 'Zuzendari medikoa · Odontologia orokorra', 'Elena Alba doktorearen erretratu profesionala'],
      ['Marcos Ruiz doktorea', 'Inplantologia eta aho-kirurgia', 'Marcos Ruiz doktorearen erretratu profesionala'],
      ['Lucía Sanz doktorea', 'Ortodontzia eta estetika', 'Lucía Sanz doktorearen erretratu profesionala'],
    ],
  },
  appointment: {
    eyebrow: 'Hitzordua',
    title: 'Eskatu zure hitzordua',
    description:
      'Deitu, eta libre dauden orduak esango dizkizugu. Kontsulta-orduetan erantzuten dugu, astelehenetik ostiralera.',
    phoneLabel: 'Hitzorduetarako telefonoa',
    call: 'Deitu orain',
  },
  locationEyebrow: 'Kokapena',
  nav: ['Hasiera', 'Tratamenduak', 'Klinika', 'Taldea', 'Kontaktua'],
  footer: ['Hasiera', 'Tratamenduak', 'Taldea', 'Hitzordua', 'Kontaktua'],
  privacy:
    'Demo honetan, hitzorduak telefonoz kudeatzen dira. Benetako proiektu batean, datuen tratamenduaren berri emango litzateke DBEOren arabera.',
}

const copy: Record<Lang, ClinicCopy> = { es, en, ca, gl, eu }

export function getClinic(lang: Lang) {
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
    trust: c.trust.map(([value, label]) => ({ value, label })),
    treatments: base.treatmentIds.map((id, index) => ({
      id,
      name: c.treatments.items[index][0],
      description: c.treatments.items[index][1],
    })),
    team: base.team.map((member, index) => ({
      ...member,
      name: c.team.members[index][0],
      role: c.team.members[index][1],
      alt: c.team.members[index][2],
    })),
  }
}

export type Clinic = ReturnType<typeof getClinic>

export const ClinicContext = createContext<Clinic | null>(null)

export function useClinic() {
  const value = useContext(ClinicContext)
  if (!value) throw new Error('ClinicContext')
  return value
}
