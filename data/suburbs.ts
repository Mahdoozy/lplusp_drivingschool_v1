export type SuburbData = {
  slug: string;
  name: string;
  postcode: string;
  heroTagline: string;
  nearestTestCentre: {
    name: string;
    address: string;
    distanceKm: number;
    travelTimeMinutes: number;
    tip: string;
  };
  pickupLandmarks: string[];
  practiceStreets: string[];
  commonChallenges: {
    title: string;
    description: string;
  }[];
  localSchoolsAndUnis: string[];
  suburbTestimonial: {
    quote: string;
    name: string;
    passedAt: string;
  };
};

export const SUBURBS: Record<string, SuburbData> = {
  'north-ryde': {
    slug: 'north-ryde',
    name: 'North Ryde',
    postcode: '2113',
    heroTagline: 'Home to Macquarie University and right next door to the Ryde test centre — we know this suburb inside out.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 1,
      travelTimeMinutes: 5,
      tip: 'We run all our mock tests on the exact Herring Rd, Waterloo Rd and Talavera Rd loops used by assessors at this centre.',
    },
    pickupLandmarks: [
      'Macquarie University campus',
      'North Ryde station',
      'Macquarie Shopping Centre',
    ],
    practiceStreets: [
      'Herring Road',
      'Waterloo Road',
      'Talavera Road',
      'Epping Road',
      'Lane Cove Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in with real instructor insights
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Macquarie University',
      'Holy Cross College Ryde',
      "Shepherd's Bay Campus",
    ],
    suburbTestimonial: {
      // TODO: replace with a real North Ryde student quote
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'east-ryde': {
    slug: 'east-ryde',
    name: 'East Ryde',
    postcode: '2113',
    heroTagline: 'A quiet residential suburb where we build your confidence before taking you onto the Ryde test routes.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 3,
      travelTimeMinutes: 8,
      tip: 'The Ryde test often uses roads you\'ll recognise from East Ryde — we practise those connections specifically.',
    },
    pickupLandmarks: [
      'Pittwater Road shops',
      'East Ryde Public School area',
      'Your home — we come to you',
    ],
    practiceStreets: [
      'Pittwater Road',
      'Sturt Road',
      'Cressy Road',
      'Waterloo Road',
      'Lane Cove Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'East Ryde Public School',
      'Macquarie University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'ryde': {
    slug: 'ryde',
    name: 'Ryde',
    postcode: '2112',
    heroTagline: 'Your test happens right here — we know every street on the Ryde test route better than anyone.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 2,
      travelTimeMinutes: 7,
      tip: 'Top Ryde, Victoria Road and the Meadowbank bridge area are all common on the test — we drive every one of them with you beforehand.',
    },
    pickupLandmarks: [
      'Top Ryde City',
      'Ryde train station',
      'Ryde Civic Centre',
    ],
    practiceStreets: [
      'Victoria Road',
      'Blaxland Road',
      'Church Street',
      'Devlin Street',
      'Meadowbank bridge approach',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Ryde Secondary College',
      'James Ruse Agricultural High School',
      'Meadowbank TAFE',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'west-ryde': {
    slug: 'west-ryde',
    name: 'West Ryde',
    postcode: '2114',
    heroTagline: 'West Ryde students can test at Ryde or Silverwater — we prepare you thoroughly for both routes.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 4,
      travelTimeMinutes: 10,
      tip: 'We cover both the Ryde and Silverwater test routes so you\'re comfortable whichever centre you book.',
    },
    pickupLandmarks: [
      'West Ryde station',
      'West Ryde Marketplace',
      'Your home — we pick up anywhere in West Ryde',
    ],
    practiceStreets: [
      'Victoria Road',
      'Ryrie Street',
      'West Parade',
      'Charles Street',
      'Meadowbank Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Shepherd\'s Bay TAFE',
      'Meadowbank Education Centre',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'macquarie-park': {
    slug: 'macquarie-park',
    name: 'Macquarie Park',
    postcode: '2113',
    heroTagline: 'The Ryde test centre is literally inside Macquarie Shopping Centre — if you live here, you\'re testing in your own backyard.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 1,
      travelTimeMinutes: 3,
      tip: 'The test routes use Herring Rd, Epping Rd, Waterloo Rd and the complex intersections around Macquarie University station — we practise all of these.',
    },
    pickupLandmarks: [
      'Macquarie University campus',
      'Macquarie Shopping Centre',
      'Macquarie University Station',
    ],
    practiceStreets: [
      'Herring Road',
      'Epping Road',
      'Waterloo Road',
      'Talavera Road',
      'Khartoum Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Macquarie University',
      'Macquarie University Hospital Campus',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'eastwood': {
    slug: 'eastwood',
    name: 'Eastwood',
    postcode: '2122',
    heroTagline: 'Eastwood\'s busy shopping strip and station area make it perfect for building real-world driving confidence.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 5,
      travelTimeMinutes: 12,
      tip: 'We practise the Ryde Road corridor and the approach to the test centre so the drive there feels routine on test day.',
    },
    pickupLandmarks: [
      'Eastwood station',
      'Eastwood shopping strip (Rowe Street)',
      'Your home — we pick up anywhere in Eastwood',
    ],
    practiceStreets: [
      'Rowe Street',
      'Ryde Road',
      'Shaftesbury Road',
      'Marsfield Road',
      'Pennant Hills Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Eastwood Public School',
      'Santa Sabina College',
      'Macquarie University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'epping': {
    slug: 'epping',
    name: 'Epping',
    postcode: '2121',
    heroTagline: 'Epping sits on the edge of two test centre zones — we cover both routes so you\'re prepared wherever you test.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 7,
      travelTimeMinutes: 15,
      tip: 'We\'ll cover the Ryde route via Epping Road and the Silverwater route via Pennant Hills Road — you decide which centre to book.',
    },
    pickupLandmarks: [
      'Epping station',
      'Epping shopping centre (Oxford Street)',
      'Your home — we pick up anywhere in Epping',
    ],
    practiceStreets: [
      'Oxford Street',
      'Epping Road',
      'Beecroft Road',
      'Carlingford Road',
      'Pennant Hills Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Epping Boys High School',
      'Epping Girls High School',
      'Carlingford High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'castle-hill': {
    slug: 'castle-hill',
    name: 'Castle Hill',
    postcode: '2154',
    heroTagline: 'Castle Hill has its own test centre and its own routes — we know every road the assessor will take you on.',
    nearestTestCentre: {
      name: 'Service NSW Castle Hill',
      address: '35 Old Northern Road, Castle Hill NSW 2154',
      distanceKm: 2,
      travelTimeMinutes: 6,
      tip: 'We practise Old Northern Road, Showground Road and the Castle Towers area specifically — all common on the Castle Hill test.',
    },
    pickupLandmarks: [
      'Castle Towers Shopping Centre',
      'Castle Hill station',
      'Hills District TAFE',
    ],
    practiceStreets: [
      'Old Northern Road',
      'Showground Road',
      'Castle Street',
      'Carrington Road',
      'Gilbert Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Castle Hill High School',
      'William Clarke College',
      'Hills District TAFE',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Castle Hill test centre',
    },
  },

  'north-rocks': {
    slug: 'north-rocks',
    name: 'North Rocks',
    postcode: '2151',
    heroTagline: 'North Rocks has its own test centre right at the shopping centre — you can practically walk in from the car park.',
    nearestTestCentre: {
      name: 'Service NSW North Rocks',
      address: 'North Rocks Shopping Centre, Shop 50–56, 328–336 North Rocks Road, North Rocks NSW 2151',
      distanceKm: 1,
      travelTimeMinutes: 4,
      tip: 'We practise North Rocks Road, Jenkins Road and the Barclay Road residential streets used by assessors here — nothing surprises our students on test day.',
    },
    pickupLandmarks: [
      'North Rocks Shopping Centre (Kmart end)',
      'North Rocks Road bus stops',
      'Your home — we pick up door to door',
    ],
    practiceStreets: [
      'North Rocks Road',
      'Jenkins Road',
      'Barclay Road',
      'Carlingford Road',
      'Purchase Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Carlingford High School',
      'Baulkham Hills High School',
      'North Rocks Public School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'North Rocks test centre',
    },
  },

  'carlingford': {
    slug: 'carlingford',
    name: 'Carlingford',
    postcode: '2118',
    heroTagline: 'Carlingford Court, the light rail and busy Pennant Hills Road — we prepare you for it all before test day.',
    nearestTestCentre: {
      name: 'Service NSW North Rocks',
      address: 'North Rocks Shopping Centre, 328–336 North Rocks Road, North Rocks NSW 2151',
      distanceKm: 3,
      travelTimeMinutes: 8,
      tip: 'We practise the exact routes from Carlingford into the North Rocks test centre, including the light rail intersection on Pennant Hills Road.',
    },
    pickupLandmarks: [
      'Carlingford station (light rail)',
      'Carlingford Court shopping centre',
      'Pennant Hills Road bus stops',
    ],
    practiceStreets: [
      'Pennant Hills Road',
      'Carlingford Road',
      'North Rocks Road',
      'Marsden Road',
      'Barclay Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Carlingford High School',
      'James Ruse Agricultural High School',
      'Kings School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'North Rocks test centre',
    },
  },

  'beecroft': {
    slug: 'beecroft',
    name: 'Beecroft',
    postcode: '2119',
    heroTagline: 'Beecroft\'s leafy streets and school zones are great for building precision — before we head to your test centre.',
    nearestTestCentre: {
      name: 'Service NSW Hornsby',
      address: '10 Edgeworth David Avenue, Hornsby NSW 2077',
      distanceKm: 8,
      travelTimeMinutes: 15,
      tip: 'The Hornsby test routes use Pacific Highway and spots around Hornsby Westfield — we practise that commute with you as part of every lesson.',
    },
    pickupLandmarks: [
      'Beecroft station',
      'Beecroft village shops',
      'Your home — we come to you',
    ],
    practiceStreets: [
      'Pennant Hills Road',
      'Beecroft Road',
      'Hannah Street',
      'Cardinal Avenue',
      'The Crescent',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Beecroft Public School',
      'Cheltenham Girls High School',
      'Normanhurst Boys High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Hornsby test centre',
    },
  },

  'telopea': {
    slug: 'telopea',
    name: 'Telopea',
    postcode: '2117',
    heroTagline: 'A suburb that flows straight into the Silverwater test zone — we practise those exact routes with every student.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 6,
      travelTimeMinutes: 12,
      tip: 'The Pennant Hills Road and Dundas Valley roads feed directly into the Silverwater test route — we drive them together so nothing is new on test day.',
    },
    pickupLandmarks: [
      'Telopea Public School area',
      'Toongabbie Creek parkland',
      'Your home — we pick up anywhere in Telopea',
    ],
    practiceStreets: [
      'Pennant Hills Road',
      'Dunmore Street',
      'Quarry Road',
      'Glenwood Drive',
      'Sturt Street',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Telopea Public School',
      'Arthur Phillip High School',
      'Western Sydney University (Parramatta)',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'dundas': {
    slug: 'dundas',
    name: 'Dundas',
    postcode: '2117',
    heroTagline: 'Close to the Silverwater test centre — we run mock tests on the exact routes used by assessors here.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 5,
      travelTimeMinutes: 10,
      tip: 'We use the Dundas Valley and Pennant Hills Road corridors in every lesson, then practice the Silverwater test circuit directly.',
    },
    pickupLandmarks: [
      'Dundas station',
      'Dundas village shops',
      'Your home anywhere in Dundas',
    ],
    practiceStreets: [
      'Pennant Hills Road',
      'Cumberland Highway',
      'Kissing Point Road',
      'Bettington Road',
      'Sturt Street',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Dundas Public School',
      'Telopea Public School',
      'Arthur Phillip High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'ermington': {
    slug: 'ermington',
    name: 'Ermington',
    postcode: '2115',
    heroTagline: 'Sitting right on the Parramatta River and close to Silverwater — a fantastic suburb for building confidence on quiet streets.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 4,
      travelTimeMinutes: 8,
      tip: 'We practise the River Road corridor and the Shepherd Street roundabout area — both feature on the Silverwater test route.',
    },
    pickupLandmarks: [
      'Parramatta River foreshore',
      'Ermington shopping centre',
      'Your home — we pick up anywhere in Ermington',
    ],
    practiceStreets: [
      'River Road',
      'Shepherd Street',
      'Victoria Road',
      'Abbotsford Road',
      'Morrison Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Ermington Public School',
      'Meadowbank TAFE',
      'Western Sydney University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'rydalmere': {
    slug: 'rydalmere',
    name: 'Rydalmere',
    postcode: '2116',
    heroTagline: 'TAFE Rydalmere is a popular pick-up spot — and the Silverwater test centre is just minutes away.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 4,
      travelTimeMinutes: 8,
      tip: 'We know the Church Street corridor and the TAFE approach roads well — your test drive to Silverwater will feel completely familiar.',
    },
    pickupLandmarks: [
      'TAFE NSW Rydalmere',
      'Rydalmere station',
      'Your home anywhere in Rydalmere',
    ],
    practiceStreets: [
      'Church Street',
      'Victoria Road',
      'James Ruse Drive',
      'Alfred Street',
      'Silverwater Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'TAFE NSW Rydalmere',
      'Western Sydney University',
      'Rydalmere East Public School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'melrose-park': {
    slug: 'melrose-park',
    name: 'Melrose Park',
    postcode: '2114',
    heroTagline: 'A quiet riverside suburb where we build real driving confidence before heading to the Silverwater test centre.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 5,
      travelTimeMinutes: 10,
      tip: 'We use Victoria Road and Wharf Road to connect your lessons directly to the Silverwater test routes — no surprises on test day.',
    },
    pickupLandmarks: [
      'Parramatta River foreshore',
      'Wharf Road bus stops',
      'Your home anywhere in Melrose Park',
    ],
    practiceStreets: [
      'Victoria Road',
      'Wharf Road',
      'Blaxland Road',
      'Morrison Road',
      'Silverwater Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Melrose Park Public School',
      'Meadowbank TAFE',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'meadowbank': {
    slug: 'meadowbank',
    name: 'Meadowbank',
    postcode: '2114',
    heroTagline: 'Light rail, the Parramatta River and Ryde test routes — Meadowbank learners see the full range of Sydney driving.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 5,
      travelTimeMinutes: 12,
      tip: 'We practise the Shepherd Street bridge and the Victoria Road climb into Ryde — both come up on the test route.',
    },
    pickupLandmarks: [
      'Meadowbank station (light rail)',
      'Meadowbank Park',
      'Your home anywhere in Meadowbank',
    ],
    practiceStreets: [
      'Shepherd Street',
      'Victoria Road',
      'Constitution Road',
      'Park Road',
      'John Street',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Meadowbank Education Centre (TAFE)',
      'Arthur Phillip High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'rhodes': {
    slug: 'rhodes',
    name: 'Rhodes',
    postcode: '2138',
    heroTagline: 'High-density, high-traffic Rhodes builds the confidence you need to handle any driving situation on test day.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 6,
      travelTimeMinutes: 12,
      tip: 'We use the Homebush Bay Drive and Concord Road corridors that connect Rhodes to the Silverwater test centre — you\'ll drive them with us before you drive them for real.',
    },
    pickupLandmarks: [
      'Rhodes station',
      'Rhodes shopping centre',
      'Sydney Olympic Park precinct',
    ],
    practiceStreets: [
      'Concord Road',
      'Homebush Bay Drive',
      'Rider Boulevard',
      'Walker Street',
      'Shoreline Drive',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Rhodes Public School',
      'TAFE Meadowbank',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'gladesville': {
    slug: 'gladesville',
    name: 'Gladesville',
    postcode: '2111',
    heroTagline: 'Victoria Road, the Gladesville Bridge and a vibrant shopping strip — Gladesville builds real traffic confidence.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 6,
      travelTimeMinutes: 14,
      tip: 'We practise the Victoria Road approach and the roundabouts near Top Ryde that feature on the Ryde test route.',
    },
    pickupLandmarks: [
      'Gladesville Bridge end',
      'Victoria Road shopping strip',
      'Your home anywhere in Gladesville',
    ],
    practiceStreets: [
      'Victoria Road',
      'Pittwater Road',
      'Wharf Road',
      'Morrison Road',
      'Ryde Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Gladesville Public School',
      'Trinity Grammar School',
      'Marsden High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'putney': {
    slug: 'putney',
    name: 'Putney',
    postcode: '2112',
    heroTagline: 'Quiet riverside streets for building basics, then straight onto the Ryde test routes when you\'re ready.',
    nearestTestCentre: {
      name: 'Service NSW Ryde',
      address: 'Macquarie Shopping Centre, Corner Waterloo Rd & Herring Rd, North Ryde NSW 2113',
      distanceKm: 5,
      travelTimeMinutes: 12,
      tip: 'Putney\'s residential streets are ideal for early lessons — we graduate to Victoria Road and the Ryde test circuit once you\'re confident.',
    },
    pickupLandmarks: [
      'Kissing Point Road shops',
      'Putney foreshore park',
      'Your home anywhere in Putney',
    ],
    practiceStreets: [
      'Kissing Point Road',
      'Victoria Road',
      'Tennyson Road',
      'Ryde Road',
      'Morrison Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Putney Public School',
      'Marsden High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Ryde test centre',
    },
  },

  'silverwater': {
    slug: 'silverwater',
    name: 'Silverwater',
    postcode: '2128',
    heroTagline: 'The Silverwater test centre is right in your suburb — testing here is a home game for our students.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 1,
      travelTimeMinutes: 3,
      tip: 'We run mock tests on the exact industrial roads and M4 approach intersections used by assessors at this centre.',
    },
    pickupLandmarks: [
      'Silverwater Road shops',
      'Silverwater Service NSW (test centre)',
      'Your home anywhere in Silverwater',
    ],
    practiceStreets: [
      'Silverwater Road',
      'Holker Street',
      'Carnarvon Street',
      'Clyde Street',
      'M4 Western Motorway approach',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Silverwater Road Public School',
      'Western Sydney University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'newington': {
    slug: 'newington',
    name: 'Newington',
    postcode: '2127',
    heroTagline: 'Built for the Olympics with wide boulevards and roundabouts — perfect for building driving confidence from day one.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 3,
      travelTimeMinutes: 7,
      tip: 'We use the Olympic Park road network for early confidence, then transition to the Silverwater test routes — a natural progression.',
    },
    pickupLandmarks: [
      'Sydney Olympic Park',
      'Newington shopping precinct',
      'Your home anywhere in Newington',
    ],
    practiceStreets: [
      'Olympic Boulevard',
      'Dawn Fraser Avenue',
      'Burroway Road',
      'Homebush Bay Drive',
      'Silverwater Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Newington Public School',
      'Western Sydney University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'auburn': {
    slug: 'auburn',
    name: 'Auburn',
    postcode: '2144',
    heroTagline: 'Auburn\'s busy streets build the real-world traffic confidence you need to pass first time at Silverwater.',
    nearestTestCentre: {
      name: 'Service NSW Silverwater',
      address: '1 Holker Street, Silverwater NSW 2128',
      distanceKm: 4,
      travelTimeMinutes: 9,
      tip: 'The Auburn Road corridor and surrounding streets require confident lane changing and pedestrian awareness — skills we build in every lesson.',
    },
    pickupLandmarks: [
      'Auburn station',
      'Auburn shopping district (Auburn Road)',
      'Your home anywhere in Auburn',
    ],
    practiceStreets: [
      'Auburn Road',
      'Parramatta Road',
      'Silverwater Road',
      'Mary Street',
      'South Parade',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Auburn Boys High School',
      'Auburn Girls High School',
      'Western Sydney University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Silverwater test centre',
    },
  },

  'chatswood': {
    slug: 'chatswood',
    name: 'Chatswood',
    postcode: '2067',
    heroTagline: 'Chatswood has its own test centre and some of Sydney\'s most complex traffic — we\'ll have you confident on every metre.',
    nearestTestCentre: {
      name: 'Service NSW Chatswood',
      address: '1–3 Searle Street, Chatswood NSW 2067',
      distanceKm: 1,
      travelTimeMinutes: 4,
      tip: 'The Victoria Avenue shopping strip, Pacific Highway and Chatswood Chase area are all on the test route — we drive every one with you first.',
    },
    pickupLandmarks: [
      'Chatswood station',
      'Chatswood Chase shopping centre',
      'Westfield Chatswood',
    ],
    practiceStreets: [
      'Victoria Avenue',
      'Pacific Highway',
      'Archer Street',
      'Mowbray Road',
      'Willoughby Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Chatswood High School',
      'Monte Sant\' Angelo Mercy College',
      'Knox Grammar School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Chatswood test centre',
    },
  },

  'hornsby': {
    slug: 'hornsby',
    name: 'Hornsby',
    postcode: '2077',
    heroTagline: 'Hornsby has its own test centre and a challenging mix of Pacific Highway traffic and quiet residential streets.',
    nearestTestCentre: {
      name: 'Service NSW Hornsby',
      address: '10 Edgeworth David Avenue, Hornsby NSW 2077',
      distanceKm: 1,
      travelTimeMinutes: 4,
      tip: 'We practise Pacific Highway, Peats Ferry Road and the streets around Hornsby Westfield that assessors use regularly.',
    },
    pickupLandmarks: [
      'Hornsby station',
      'Westfield Hornsby',
      'Your home anywhere in Hornsby',
    ],
    practiceStreets: [
      'Pacific Highway',
      'Peats Ferry Road',
      'Edgeworth David Avenue',
      'Florence Street',
      'Hunter Street',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Hornsby Girls High School',
      'Asquith Boys High School',
      'Barker College',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Hornsby test centre',
    },
  },

  'blacktown': {
    slug: 'blacktown',
    name: 'Blacktown',
    postcode: '2148',
    heroTagline: 'Blacktown\'s busy roads and its own test centre make it a great place to develop real driving skills.',
    nearestTestCentre: {
      name: 'Service NSW Blacktown',
      address: '1 Ashley Lane, Blacktown NSW 2148',
      distanceKm: 2,
      travelTimeMinutes: 6,
      tip: 'We cover the Main Street and Richmond Road corridors used on the Blacktown test — you\'ll recognise every intersection on test day.',
    },
    pickupLandmarks: [
      'Blacktown station',
      'Westpoint Blacktown shopping centre',
      'Your home anywhere in Blacktown',
    ],
    practiceStreets: [
      'Main Street',
      'Richmond Road',
      'Flushcombe Road',
      'Sunnyholt Road',
      'Seven Hills Road',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Blacktown Boys High School',
      'Blacktown Girls High School',
      'Western Sydney University',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Blacktown test centre',
    },
  },

  'bankstown': {
    slug: 'bankstown',
    name: 'Bankstown',
    postcode: '2200',
    heroTagline: 'Bankstown\'s dense traffic teaches real-world driving fast — and the test centre is right in the heart of the suburb.',
    nearestTestCentre: {
      name: 'Service NSW Bankstown',
      address: '66–72 Chapel Road, Bankstown NSW 2200',
      distanceKm: 1,
      travelTimeMinutes: 5,
      tip: 'We practise Chapel Road, the Hume Highway corridor and the streets around Bankstown Central used on the test route.',
    },
    pickupLandmarks: [
      'Bankstown station',
      'Bankstown Central shopping centre',
      'Your home anywhere in Bankstown',
    ],
    practiceStreets: [
      'Chapel Road',
      'Hume Highway',
      'North Terrace',
      'South Terrace',
      'Restwell Street',
    ],
    commonChallenges: [
      // TODO: Mick/Sidra to fill in
      { title: '', description: '' },
    ],
    localSchoolsAndUnis: [
      'Bankstown Senior College',
      'Western Sydney University',
      'Bankstown Girls High School',
    ],
    suburbTestimonial: {
      quote: '',
      name: '',
      passedAt: 'Bankstown test centre',
    },
  },
};
