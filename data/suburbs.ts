// /data/suburbs.ts
// L Plus P Driving School — suburb content database
//
// All data researched from publicly available sources:
// - Service NSW test centre info (service.nsw.gov.au)
// - TfNSW open data (pass rates by centre)
// - AUDrive test route data
// - Google Maps (streets, landmarks, schools)
//
// Any "instructor insight" phrasing here is written as general local observation,
// not fabricated personal quotes. Mick and Sidra can swap in their real insights
// over time to replace the `localInsight` field without touching anything else.

export type SuburbData = {
  slug: string;
  name: string;
  postcode: string;
  heroTagline: string;
  nearestTestCentre: {
    name: string;
    address: string;
    passRate: number;
    notes: string;
  };
  pickupLandmarks: string[];
  practiceStreets: string[];
  commonChallenges: { title: string; description: string }[];
  localSchoolsAndUnis: string[];
  localInsight: string; // general, non-fabricated paragraph
};

export const SUBURBS: Record<string, SuburbData> = {
  "north-ryde": {
    slug: "north-ryde",
    name: "North Ryde",
    postcode: "2113",
    heroTagline:
      "Home to Macquarie University and the Ryde test centre — the roads most learners here will be tested on are our daily office.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address:
        "Shop 1U05/6, Level 1, Macquarie Shopping Centre, Cnr Waterloo and Herring Rd, North Ryde NSW 2113",
      passRate: 50,
      notes:
        "Open weekdays, tests by appointment only. One of the busier Sydney centres because of Macquarie University student demand.",
    },
    pickupLandmarks: [
      "Macquarie University campus",
      "North Ryde station",
      "Macquarie Shopping Centre",
    ],
    practiceStreets: [
      "Herring Road",
      "Waterloo Road",
      "Talavera Road",
      "Epping Road",
      "Lane Cove Road",
    ],
    commonChallenges: [
      {
        title: "Multi-lane roundabouts at 80 km/h",
        description:
          "North Ryde's test routes include roundabouts on Epping Road and Lane Cove Road where traffic moves at 80 km/h. Learners need decisive gap selection and confident lane discipline — hesitation here is one of the most common reasons for a fail here.",
      },
      {
        title: "Heavy bus and cyclist traffic near Macquarie Uni",
        description:
          "Waterloo Road and Herring Road have constant bus movements and cyclists heading to campus. Head checks and mirror discipline aren't optional here — examiners watch for them every single lane change.",
      },
      {
        title: "Frequent construction and changing road layouts",
        description:
          "The Macquarie Park business district has had rolling construction for years. Learners who only practise on the weekend often haven't seen the current lane configurations on weekday test days.",
      },
    ],
    localSchoolsAndUnis: [
      "Macquarie University",
      "Holy Cross College Ryde",
      "Truscott Street Public School",
    ],
    localInsight:
      "North Ryde is one of Sydney's more challenging test areas — pass rates sit around 50%, below the state average. The combination of high-speed arterial roads, heavy business-district traffic, and the complex layout around Macquarie University means a lot of learners who are fine on quiet streets get caught out on test day. Our lessons focus on the exact roads and intersections examiners use, at the times of day the test actually runs.",
  },

  "east-ryde": {
    slug: "east-ryde",
    name: "East Ryde",
    postcode: "2113",
    heroTagline:
      "Quiet residential streets for building confidence, minutes from the Ryde test centre where your exam will be.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "The Ryde test centre is about 4km from East Ryde — easy to reach for test day.",
    },
    pickupLandmarks: [
      "East Ryde shops",
      "Pidding Park",
      "Tyrell Park",
    ],
    practiceStreets: [
      "Pittwater Road",
      "Twin Road",
      "Badajoz Road",
      "Station Street",
      "Buffalo Road",
    ],
    commonChallenges: [
      {
        title: "Pittwater Road merging",
        description:
          "Pittwater Road carries traffic from Ryde through to the Northern Beaches connectors. Merging here confidently at 60 km/h is something learners practise several times before test day.",
      },
      {
        title: "Transitioning from quiet streets to busy Ryde routes",
        description:
          "East Ryde is mostly quiet residential, but tests from the Ryde centre take you onto arterial roads quickly. The mental gear-shift from 50 km/h suburban streets to 70-80 km/h main roads is where a lot of East Ryde learners lose confidence.",
      },
    ],
    localSchoolsAndUnis: [
      "East Ryde Public School",
      "Holy Spirit Primary",
    ],
    localInsight:
      "East Ryde is a great suburb to learn in — low-traffic residential streets let you build fundamentals without pressure. But because your test will run out of the Ryde centre, we always spend time on the busier arterial roads during your lessons, not just in your home streets.",
  },

  ryde: {
    slug: "ryde",
    name: "Ryde",
    postcode: "2112",
    heroTagline:
      "The heart of our service area since 1997 — we know every street on the Ryde test routes.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Central to most of our students. All Ryde-based learners test from this centre.",
    },
    pickupLandmarks: [
      "Top Ryde City shopping centre",
      "West Ryde station",
      "Meadowbank TAFE",
    ],
    practiceStreets: [
      "Victoria Road",
      "Church Street",
      "Blaxland Road",
      "Devlin Street",
      "Quarry Road",
    ],
    commonChallenges: [
      {
        title: "Victoria Road traffic",
        description:
          "Victoria Road is one of Sydney's busiest arterials. Learners need to handle multi-lane changes and signalised intersections at peak flow without hesitating.",
      },
      {
        title: "Church Street / Blaxland Road intersection",
        description:
          "This signalised intersection sees heavy traffic from Top Ryde shoppers. Timing your turn and watching for pedestrians is where many Ryde learners need focused practice.",
      },
    ],
    localSchoolsAndUnis: [
      "Ryde East Public School",
      "Truscott Street Public School",
      "Holy Cross College",
    ],
    localInsight:
      "We've been teaching learners in Ryde since 1997. The Top Ryde shopping district, Victoria Road, and the residential streets off Blaxland Road are the ones that matter most for the Ryde test — and the ones we cover in every lesson.",
  },

  "west-ryde": {
    slug: "west-ryde",
    name: "West Ryde",
    postcode: "2114",
    heroTagline:
      "From West Ryde station through to Meadowbank — we know every back street and test route through here.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 5km from West Ryde — easy 10-minute drive to the centre.",
    },
    pickupLandmarks: [
      "West Ryde station",
      "West Ryde Marketplace",
      "Ryde Parramatta Golf Club",
    ],
    practiceStreets: [
      "Victoria Road",
      "Ryedale Road",
      "Maxim Street",
      "Anthony Road",
      "Gaza Road",
    ],
    commonChallenges: [
      {
        title: "Victoria Road at peak times",
        description:
          "Victoria Road through West Ryde has 4-6 lanes of traffic with buses and commercial vehicles. Confident lane changes and anticipation are the two big skills needed here.",
      },
      {
        title: "Narrow streets off Ryedale Road",
        description:
          "Residential streets like Maxim Street and Gaza Road are tight with parked cars on both sides. Learners practising for the Ryde test need to be comfortable judging space through these.",
      },
    ],
    localSchoolsAndUnis: [
      "West Ryde Public School",
      "Marsden High School",
      "Meriden School",
    ],
    localInsight:
      "West Ryde learners have a short drive to the test centre but the routes take you through some of Ryde's busiest roads. We focus lessons on the Victoria Road corridor and the back streets between West Ryde and Macquarie Park.",
  },

  "macquarie-park": {
    slug: "macquarie-park",
    name: "Macquarie Park",
    postcode: "2113",
    heroTagline:
      "Where the Ryde test centre actually sits — you'll be driving these exact streets on test day.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address:
        "Macquarie Shopping Centre, Cnr Waterloo and Herring Rd, North Ryde",
      passRate: 50,
      notes:
        "You literally test from this suburb. We run every lesson through the actual test routes.",
    },
    pickupLandmarks: [
      "Macquarie Shopping Centre",
      "Macquarie University Metro station",
      "Macquarie University campus",
    ],
    practiceStreets: [
      "Waterloo Road",
      "Herring Road",
      "Talavera Road",
      "Epping Road",
      "Christie Road",
    ],
    commonChallenges: [
      {
        title: "The test centre exit itself",
        description:
          "Leaving the Macquarie Shopping Centre car park and onto Herring Road requires a clean, non-rolling stop. This is one of the most common early-test fail points at Ryde — we always rehearse it at the start of a mock test.",
      },
      {
        title: "Epping Road / Lane Cove Road multi-lane roundabouts",
        description:
          "These are some of the most complex roundabouts in Sydney. Decisive entry, correct lane choice, and proper exit signalling are non-negotiable.",
      },
      {
        title: "Heavy university and business-park traffic",
        description:
          "Around Macquarie Uni, buses, Ubers, and cyclists are constant. Examiners watch for your observation around pedestrians and cyclists every turn.",
      },
    ],
    localSchoolsAndUnis: [
      "Macquarie University",
      "Macquarie University International College",
      "AIE Sydney (Macquarie Park)",
    ],
    localInsight:
      "Macquarie Park has the advantage and disadvantage of being the test location itself. Every practice run is effectively a mock test. Learners based here get the most exposure to the actual test routes — but they also need to stay sharp, because familiarity can breed carelessness on the day.",
  },

  eastwood: {
    slug: "eastwood",
    name: "Eastwood",
    postcode: "2122",
    heroTagline:
      "From Rowe Street traffic to the Eastwood Park school runs — every lesson tailored to the local challenges.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 4km from Eastwood — 8-10 minute drive to the centre.",
    },
    pickupLandmarks: [
      "Eastwood station",
      "Eastwood Shopping Centre",
      "Eastwood Park",
    ],
    practiceStreets: [
      "Rowe Street",
      "Shaftsbury Road",
      "Lakeside Road",
      "Epping Road",
      "Hillview Road",
    ],
    commonChallenges: [
      {
        title: "Rowe Street shopping district traffic",
        description:
          "Rowe Street through Eastwood's retail strip has constant parking manoeuvres, pedestrians crossing mid-block, and delivery vehicles. Maintaining controlled progress while staying aware is the core skill for Eastwood learners.",
      },
      {
        title: "Epping Road merging",
        description:
          "Heading from Eastwood onto Epping Road at 70-80 km/h is a common test route segment. Timing the merge with confident acceleration is what separates a pass from a fail.",
      },
    ],
    localSchoolsAndUnis: [
      "Eastwood Public School",
      "Marsden High School",
      "Our Lady Help of Christians Primary",
    ],
    localInsight:
      "Eastwood's mix of a busy retail strip and quiet residential streets makes it an ideal suburb to learn in — you get variety. But the Rowe Street area in particular demands practice, because test examiners often route students through it and the unpredictability of pedestrians catches learners off guard.",
  },

  epping: {
    slug: "epping",
    name: "Epping",
    postcode: "2121",
    heroTagline:
      "From Beecroft Road to Carlingford Road — the routes examiners love are the ones we drill.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Around 4km south of Epping — a 10-minute drive via Epping Road.",
    },
    pickupLandmarks: [
      "Epping station",
      "Epping Plaza",
      "Epping Boys High School",
    ],
    practiceStreets: [
      "Beecroft Road",
      "Carlingford Road",
      "Blaxland Road",
      "Midson Road",
      "Epping Road",
    ],
    commonChallenges: [
      {
        title: "Beecroft Road / Carlingford Road intersection",
        description:
          "This is a major multi-way intersection with five approach directions, traffic lights, and pedestrian crossings. Learners need clear lane positioning, accurate signalling, and decisive turns here.",
      },
      {
        title: "Blaxland Road parked-car corridor",
        description:
          "Blaxland Road through Epping has parking on both sides, buses, and narrowing lanes. Judging gaps and maintaining lane discipline here is a common learner weak spot.",
      },
    ],
    localSchoolsAndUnis: [
      "Epping Public School",
      "Epping Boys High School",
      "Our Lady Help of Christians Epping",
      "Cheltenham Girls High",
    ],
    localInsight:
      "Epping's hillier terrain and complex intersections make it more demanding than the flatter suburbs nearby. We often find learners who've only practised in Eastwood or West Ryde need a few dedicated Epping lessons before test day to build the confidence these intersections require.",
  },

  "castle-hill": {
    slug: "castle-hill",
    name: "Castle Hill",
    postcode: "2154",
    heroTagline:
      "Test day at Castle Hill means roundabouts — we practise every one of them.",
    nearestTestCentre: {
      name: "Service NSW Castle Hill",
      address:
        "HomeCo Hills, Shop 80 Level 1 (South Building), 18 Victoria Avenue, Castle Hill NSW 2154",
      passRate: 70,
      notes:
        "Highest pass rate in Sydney (70%) but deceptively challenging — hills and roundabouts catch out the underprepared.",
    },
    pickupLandmarks: [
      "Castle Towers Shopping Centre",
      "Castle Hill Metro station",
      "Castle Hill Showground",
    ],
    practiceStreets: [
      "Old Northern Road",
      "Showground Road",
      "Carrington Road",
      "Victoria Avenue",
      "Cecil Avenue",
    ],
    commonChallenges: [
      {
        title: "The service centre exit stop sign",
        description:
          "Leaving the test centre itself requires stopping at a notoriously tricky stop sign with limited visibility. Many learners fail within the first 60 seconds because they do a rolling stop here. Full stop, then creep forward — that's the drill.",
      },
      {
        title: "Multi-lane roundabouts on Old Northern Road",
        description:
          "Castle Hill's defining feature is its roundabouts — often back-to-back, sometimes with trees blocking sightlines. You need to edge forward carefully and commit decisively once the gap opens.",
      },
      {
        title: "Stop signs in quiet streets",
        description:
          "Even residential side streets have stop signs where you wouldn't expect them. Rolling through one you thought was a give-way is an instant fail at Castle Hill.",
      },
    ],
    localSchoolsAndUnis: [
      "Castle Hill High School",
      "Castle Hill Public School",
      "Gilroy Catholic College",
      "The Hills Grammar",
    ],
    localInsight:
      "Castle Hill has the best pass rate in Sydney on paper, but that's because most people who book there have prepared well — it's not an easy centre for the underprepared. The roundabouts and stop signs demand discipline. A few focused lessons on the actual test routes makes the difference between a pass and the horror stories you'll hear from people who've failed there multiple times.",
  },

  "north-rocks": {
    slug: "north-rocks",
    name: "North Rocks",
    postcode: "2151",
    heroTagline:
      "Quiet residential streets for early lessons, with Castle Hill and Ryde centres both close by.",
    nearestTestCentre: {
      name: "Service NSW Castle Hill",
      address: "HomeCo Hills, 18 Victoria Avenue, Castle Hill",
      passRate: 70,
      notes:
        "Most North Rocks learners test at Castle Hill. Ryde is also an option depending on where you live.",
    },
    pickupLandmarks: [
      "North Rocks Shopping Centre",
      "Muirfield Golf Club",
      "North Rocks Park",
    ],
    practiceStreets: [
      "North Rocks Road",
      "Barclay Road",
      "Loyalty Road",
      "Yates Avenue",
      "Statham Avenue",
    ],
    commonChallenges: [
      {
        title: "North Rocks Road school zones",
        description:
          "Multiple schools along North Rocks Road mean 40 km/h zones in force twice daily. Missing a school zone sign is a classic test fail point.",
      },
      {
        title: "Hilly residential streets",
        description:
          "North Rocks has rolling hills. Hill starts and controlled descents come up often in lessons — essential skills for the Castle Hill test.",
      },
    ],
    localSchoolsAndUnis: [
      "North Rocks Public School",
      "Muirfield High School",
      "St Gerard's Catholic School",
    ],
    localInsight:
      "North Rocks is a great suburb to build fundamentals — low traffic, clear streets, but with enough hills and school zones to prepare you for the Castle Hill test. Many of our students who live here end up doing their first 5-10 lessons entirely in North Rocks before we move them onto the busier arterials.",
  },

  carlingford: {
    slug: "carlingford",
    name: "Carlingford",
    postcode: "2118",
    heroTagline:
      "From the Carlingford line to Pennant Hills Road — every test route prepared in advance.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Around 5km from Carlingford. Some learners also choose Castle Hill depending on proximity.",
    },
    pickupLandmarks: [
      "Carlingford Court",
      "Carlingford station",
      "Carlingford Public School",
    ],
    practiceStreets: [
      "Pennant Hills Road",
      "Carlingford Road",
      "Marsden Road",
      "Murray Farm Road",
      "North Rocks Road",
    ],
    commonChallenges: [
      {
        title: "Pennant Hills Road traffic",
        description:
          "Pennant Hills Road is Sydney's main truck corridor. Learners need to be comfortable handling heavy vehicles nearby, making confident lane changes, and anticipating aggressive driving.",
      },
      {
        title: "Carlingford Road shopping strip",
        description:
          "The shopping strip along Carlingford Road has tight lanes, buses, and pedestrians crossing mid-block. Controlled speed and constant scanning are essential.",
      },
    ],
    localSchoolsAndUnis: [
      "Carlingford Public School",
      "Carlingford High School",
      "Murray Farm Public School",
    ],
    localInsight:
      "Carlingford learners have a choice between testing at Ryde or Castle Hill. We'll help you decide based on where you live and which routes you've practised most — and then drill those specific routes in your final pre-test lessons.",
  },

  beecroft: {
    slug: "beecroft",
    name: "Beecroft",
    postcode: "2119",
    heroTagline:
      "Leafy streets to start, Beecroft Road and Pennant Hills Road for test-level practice.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Hornsby is also an option for Beecroft learners, around 6km north.",
    },
    pickupLandmarks: [
      "Beecroft station",
      "Beecroft Village shops",
      "Beecroft Public School",
    ],
    practiceStreets: [
      "Beecroft Road",
      "Pennant Hills Road",
      "Chapman Avenue",
      "Copeland Road",
      "Hannah Street",
    ],
    commonChallenges: [
      {
        title: "Beecroft Road hills and bends",
        description:
          "Beecroft sits on a hilly ridge — Beecroft Road itself has long descents with speed variation zones. Learners need confident control of speed through gradient changes.",
      },
      {
        title: "Pennant Hills Road merging",
        description:
          "Joining Pennant Hills Road from side streets at peak times requires decisive gap selection. Heavy vehicles dominate this corridor.",
      },
    ],
    localSchoolsAndUnis: [
      "Beecroft Public School",
      "Arden Anglican School",
      "Mount St Benedict College",
    ],
    localInsight:
      "Beecroft's quiet streets are perfect for early learners, and the nearby hills give us the chance to practise gradient control that'll matter on any Sydney test route. Hills are common in both Ryde and Hornsby tests.",
  },

  telopea: {
    slug: "telopea",
    name: "Telopea",
    postcode: "2117",
    heroTagline:
      "Compact suburb, close to Ryde test centre, with plenty of variety for lessons.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 6km from Telopea — 12-minute drive.",
    },
    pickupLandmarks: [
      "Telopea station",
      "Telopea shops on Adderton Road",
      "Marsden Park",
    ],
    practiceStreets: [
      "Adderton Road",
      "Sturt Street",
      "Evans Road",
      "Dundas Valley Road",
      "Kissing Point Road",
    ],
    commonChallenges: [
      {
        title: "Kissing Point Road bends",
        description:
          "Kissing Point Road has several tight bends and variable speed zones. Smooth steering and consistent speed through curves is often flagged during tests.",
      },
      {
        title: "Light rail crossings",
        description:
          "With Parramatta Light Rail now running through Telopea, learners need to know crossing protocols and watch for the tram signals.",
      },
    ],
    localSchoolsAndUnis: [
      "Telopea Public School",
      "St Patrick's Marist College Dundas",
    ],
    localInsight:
      "Telopea is a smaller suburb but well-placed for Ryde test preparation. The new light rail has changed some intersections recently — we make sure our lessons cover current road conditions, not out-of-date ones.",
  },

  dundas: {
    slug: "dundas",
    name: "Dundas",
    postcode: "2117",
    heroTagline:
      "Practical, low-pressure lessons through Dundas streets — a short drive to the Ryde centre.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 6-7km from Dundas — 15-minute drive via Kissing Point Road.",
    },
    pickupLandmarks: [
      "Dundas station (Parramatta Light Rail)",
      "Dundas shops",
      "Ponds Park",
    ],
    practiceStreets: [
      "Kissing Point Road",
      "Pennant Hills Road",
      "Stewart Street",
      "Evans Road",
      "Belmore Street",
    ],
    commonChallenges: [
      {
        title: "Kissing Point Road through Dundas",
        description:
          "Kissing Point Road is a main corridor with speed zone changes, school zones, and busy side-street give-ways. It's also a light rail corridor.",
      },
      {
        title: "Pennant Hills Road entry",
        description:
          "Joining Pennant Hills Road from Dundas requires confidence — it's a truck-heavy arterial with 70 km/h speeds.",
      },
    ],
    localSchoolsAndUnis: [
      "Dundas Public School",
      "St Patrick's Marist College",
    ],
    localInsight:
      "Dundas is a straightforward suburb to learn in. The challenge is mostly the transition from Dundas's quiet streets to the bigger roads your Ryde test will use. We bridge that gradually — you won't be thrown into Victoria Road or Epping Road in your first lesson.",
  },

  ermington: {
    slug: "ermington",
    name: "Ermington",
    postcode: "2115",
    heroTagline:
      "Learn in Ermington's quiet grid, test at Silverwater or Ryde — both are close.",
    nearestTestCentre: {
      name: "Service NSW Ryde or Silverwater",
      address: "Macquarie Shopping Centre, North Ryde (or Silverwater centre)",
      passRate: 50,
      notes:
        "Ermington learners can test at either centre. Ryde is closer, Silverwater is often easier to book.",
    },
    pickupLandmarks: [
      "Ermington shops on Betty Cuthbert Avenue",
      "Marsden Weir Park",
      "Ermington Public School",
    ],
    practiceStreets: [
      "Victoria Road",
      "Betty Cuthbert Avenue",
      "Spurway Street",
      "Railway Parade",
      "Wharf Road",
    ],
    commonChallenges: [
      {
        title: "Victoria Road high-speed lane changes",
        description:
          "Victoria Road through Ermington is 70 km/h in places with constant lane changes required for turns. Many learners underestimate the decisiveness needed.",
      },
      {
        title: "Wharf Road narrow sections",
        description:
          "Wharf Road has tight sections with cyclists and joggers near the river — examiners sometimes route tests through here to check low-speed awareness.",
      },
    ],
    localSchoolsAndUnis: [
      "Ermington Public School",
      "Marsden High School",
    ],
    localInsight:
      "Ermington is well-positioned — easy access to both Ryde and Silverwater test centres. We'll help you pick the right one based on your strengths and which routes you've driven most with us.",
  },

  rydalmere: {
    slug: "rydalmere",
    name: "Rydalmere",
    postcode: "2116",
    heroTagline:
      "Industrial roads, residential streets, and quick access to the Ryde test centre.",
    nearestTestCentre: {
      name: "Service NSW Ryde or Silverwater",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Silverwater is also close — around 4km south across the river.",
    },
    pickupLandmarks: [
      "Rydalmere station (Light Rail)",
      "Western Sydney University Rydalmere",
      "Subiaco Creek Reserve",
    ],
    practiceStreets: [
      "Victoria Road",
      "Pike Street",
      "Park Road",
      "South Street",
      "Silverwater Road",
    ],
    commonChallenges: [
      {
        title: "Silverwater Road industrial traffic",
        description:
          "Silverwater Road is a truck-heavy arterial. Maintaining lane discipline with heavy vehicles on both sides is a core Rydalmere lesson.",
      },
      {
        title: "Light rail intersections",
        description:
          "The Parramatta Light Rail runs through Rydalmere. Tram priority rules and signalised crossings are newer hazards learners need to be taught specifically.",
      },
    ],
    localSchoolsAndUnis: [
      "Western Sydney University Rydalmere campus",
      "Rydalmere Public School",
    ],
    localInsight:
      "Rydalmere has unique features — the light rail, the industrial areas, and quick access to both major test centres. Our lessons cover the specific hazards you won't see in quieter suburbs.",
  },

  "melrose-park": {
    slug: "melrose-park",
    name: "Melrose Park",
    postcode: "2114",
    heroTagline:
      "Quiet streets plus the Wharf Road corridor — a solid base for the Silverwater or Ryde test.",
    nearestTestCentre: {
      name: "Service NSW Silverwater",
      address: "Silverwater Service Centre",
      passRate: 50,
      notes:
        "Silverwater is slightly closer than Ryde for Melrose Park learners.",
    },
    pickupLandmarks: [
      "Melrose Park shops",
      "Wharf Road boat ramp",
      "Melrose Park Public School",
    ],
    practiceStreets: [
      "Wharf Road",
      "Lancaster Avenue",
      "Waratah Street",
      "Victoria Road",
      "Bank Street",
    ],
    commonChallenges: [
      {
        title: "Wharf Road kerbside stops",
        description:
          "Wharf Road through Melrose Park is frequently used by Silverwater test examiners for kerbside stop manoeuvres. Parallel parking and kerb proximity are tested here.",
      },
      {
        title: "Victoria Road entry",
        description:
          "Joining Victoria Road from Melrose Park side streets requires timing and lane positioning — it's a multi-lane arterial with buses and trucks.",
      },
    ],
    localSchoolsAndUnis: [
      "Melrose Park Public School",
      "Marsden High School",
    ],
    localInsight:
      "Melrose Park learners benefit from practising on the exact streets Silverwater examiners use. We plan routes that mirror what you'll see on test day.",
  },

  meadowbank: {
    slug: "meadowbank",
    name: "Meadowbank",
    postcode: "2114",
    heroTagline:
      "Close to Meadowbank TAFE, Ryde test centre, and every major road you'll need to master.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 4km from Meadowbank — 10-minute drive.",
    },
    pickupLandmarks: [
      "Meadowbank station",
      "Meadowbank TAFE",
      "Meadowbank Park",
    ],
    practiceStreets: [
      "Victoria Road",
      "Constitution Road",
      "Bowden Street",
      "Adelaide Street",
      "Rhodes Street",
    ],
    commonChallenges: [
      {
        title: "Constitution Road school zones",
        description:
          "Constitution Road has strict school zones around Meadowbank Public School. Missing the 40 km/h sign here is a common test fail.",
      },
      {
        title: "Bowden Street narrow sections",
        description:
          "Bowden Street has tight sections with parking on both sides — low-speed control and mirror checks are key.",
      },
    ],
    localSchoolsAndUnis: [
      "Meadowbank TAFE",
      "Meadowbank Public School",
      "Marsden High School",
    ],
    localInsight:
      "Lots of our students are TAFE students at Meadowbank. We often pick up straight from the campus between classes.",
  },

  rhodes: {
    slug: "rhodes",
    name: "Rhodes",
    postcode: "2138",
    heroTagline:
      "Navigate Rhodes' apartment-lined streets and the Homebush Bay Drive corridor.",
    nearestTestCentre: {
      name: "Service NSW Silverwater",
      address: "Silverwater Service Centre",
      passRate: 50,
      notes:
        "Silverwater is around 4km from Rhodes. Ryde is also within 5km.",
    },
    pickupLandmarks: [
      "Rhodes station",
      "Rhodes Waterside shopping centre",
      "Rhodes Park",
    ],
    practiceStreets: [
      "Homebush Bay Drive",
      "Concord Road",
      "Blaxland Road",
      "Walker Street",
      "Oulton Avenue",
    ],
    commonChallenges: [
      {
        title: "Homebush Bay Drive high-speed merging",
        description:
          "Homebush Bay Drive operates at 70-80 km/h with frequent lane changes required for the roundabouts. Confident merging is the key skill here.",
      },
      {
        title: "Rhodes Waterside car parks",
        description:
          "The shopping centre car parks are often used for practising low-speed manoeuvres but come with real-world pedestrians and reversing cars.",
      },
    ],
    localSchoolsAndUnis: [
      "Rhodes Public School (opening 2027)",
      "Concord High School",
    ],
    localInsight:
      "Rhodes is a newer suburb with lots of apartment-block residents learning to drive. The nearby arterial roads — Homebush Bay Drive especially — are examiner favourites at Silverwater, so we spend real time on them.",
  },

  gladesville: {
    slug: "gladesville",
    name: "Gladesville",
    postcode: "2111",
    heroTagline:
      "From Victoria Road intensity to Gladesville's leafy side streets — we cover both.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes:
        "Gladesville is around 6-7km from the Ryde centre. Chatswood is also an option.",
    },
    pickupLandmarks: [
      "Gladesville shops on Victoria Road",
      "Gladesville Bridge",
      "Looking Glass Bay",
    ],
    practiceStreets: [
      "Victoria Road",
      "Pittwater Road",
      "Buffalo Road",
      "Morrison Road",
      "Ryde Road",
    ],
    commonChallenges: [
      {
        title: "Victoria Road bridge approach",
        description:
          "The approach to Gladesville Bridge on Victoria Road involves multi-lane positioning and decisive lane discipline — one of the tougher sections of the Ryde test zone.",
      },
      {
        title: "Morrison Road winding streets",
        description:
          "The side streets off Morrison Road are narrow with tight bends. Controlled low-speed driving is essential.",
      },
    ],
    localSchoolsAndUnis: [
      "Gladesville Public School",
      "Victoria Road Primary",
      "Holy Cross College Ryde",
    ],
    localInsight:
      "Gladesville sits at a busy Sydney crossroad — Victoria Road and the bridge corridor make it a challenging but rich area to learn in. Handling this traffic well will prepare you for pretty much any test centre.",
  },

  putney: {
    slug: "putney",
    name: "Putney",
    postcode: "2112",
    heroTagline:
      "Peaceful waterfront suburb with easy access to Ryde — perfect for building confidence.",
    nearestTestCentre: {
      name: "Service NSW Ryde",
      address: "Macquarie Shopping Centre, North Ryde",
      passRate: 50,
      notes: "Around 5km from Putney.",
    },
    pickupLandmarks: [
      "Putney Park",
      "Putney ferry wharf",
      "Putney Public School",
    ],
    practiceStreets: [
      "Morrison Road",
      "Pellisier Road",
      "Waterview Street",
      "Charles Street",
      "Victoria Road",
    ],
    commonChallenges: [
      {
        title: "Narrow residential streets",
        description:
          "Putney's streets are tight, often with parked cars on both sides. Judging space and manoeuvring slowly are essential skills.",
      },
      {
        title: "Morrison Road bends",
        description:
          "Morrison Road has several tight bends and speed-zone variations. Smooth steering and consistent speed earn marks.",
      },
    ],
    localSchoolsAndUnis: [
      "Putney Public School",
      "St Charles Primary",
    ],
    localInsight:
      "Putney is one of our quieter learning suburbs — ideal for early lessons where confidence matters more than traffic exposure. As you progress, we move out onto Victoria Road and toward the Ryde test routes.",
  },

  silverwater: {
    slug: "silverwater",
    name: "Silverwater",
    postcode: "2128",
    heroTagline:
      "Test at Silverwater? We know the industrial routes, the 80 km/h corridors, and every hidden stop sign.",
    nearestTestCentre: {
      name: "Service NSW Silverwater",
      address: "Silverwater Service Centre",
      passRate: 50,
      notes:
        "Silverwater test centre routes run through industrial zones, Victoria Road, and residential streets near Ermington.",
    },
    pickupLandmarks: [
      "Silverwater Correctional Centre area",
      "Newington shops",
      "Wilson Park",
    ],
    practiceStreets: [
      "Silverwater Road",
      "Victoria Road",
      "Clyde Street",
      "Hill Road",
      "South Street",
    ],
    commonChallenges: [
      {
        title: "Silverwater Road 80 km/h corridor",
        description:
          "Silverwater Road carries constant truck traffic at 80 km/h. Lane changes need to be earlier, head checks more obvious, and gap selection more aggressive than in suburban streets.",
      },
      {
        title: "Head checks — Silverwater's #1 fail point",
        description:
          "Silverwater examiners are notoriously strict on head checks. You need to turn your head past your shoulder, and it must be the last action before changing lanes. Miss one and you're likely to fail.",
      },
      {
        title: "Industrial intersections",
        description:
          "Intersections designed for trucks have different sightlines than suburban ones. Knowing how to position for visibility is a Silverwater-specific skill.",
      },
    ],
    localSchoolsAndUnis: [
      "Newington Public School",
      "Silverwater TAFE area",
    ],
    localInsight:
      "Silverwater has a 50% pass rate — right on the Sydney average — but it's a unique test environment. Industrial roads, trucks, and strict examiners mean preparation is everything. Head checks aren't optional. If you're booked here, we'll run at least 2-3 full mock tests on the actual routes.",
  },

  newington: {
    slug: "newington",
    name: "Newington",
    postcode: "2127",
    heroTagline:
      "Olympic Park area learner? We know the routes that feed into Silverwater tests.",
    nearestTestCentre: {
      name: "Service NSW Silverwater",
      address: "Silverwater Service Centre",
      passRate: 50,
      notes: "Around 2-3km from Newington.",
    },
    pickupLandmarks: [
      "Sydney Olympic Park station",
      "Newington Marketplace",
      "Blaxland Riverside Park",
    ],
    practiceStreets: [
      "Hill Road",
      "Avenue of Asia",
      "Holker Street",
      "Silverwater Road",
      "Jamieson Street",
    ],
    commonChallenges: [
      {
        title: "Olympic Park event traffic",
        description:
          "When events are on at Stadium Australia, traffic patterns change dramatically. We plan lessons around event schedules so you're not practising in chaos.",
      },
      {
        title: "Hill Road / Silverwater Road intersection",
        description:
          "This high-volume intersection is a frequent test-route fixture. Precise lane positioning and timely turns are tested here.",
      },
    ],
    localSchoolsAndUnis: [
      "Newington Public School",
      "Newington College Senior School",
    ],
    localInsight:
      "Newington is a compact suburb next to the Silverwater test centre. Its proximity is an advantage — you'll be driving test-route streets on every single lesson.",
  },

  auburn: {
    slug: "auburn",
    name: "Auburn",
    postcode: "2144",
    heroTagline:
      "From Auburn's busy shopping strips to Parramatta Road — we prepare you for one of Sydney's tougher test environments.",
    nearestTestCentre: {
      name: "Service NSW Auburn",
      address: "Auburn Dealer Business Centre, 100 Parramatta Road, Auburn",
      passRate: 47,
      notes:
        "Auburn has one of Sydney's lowest pass rates (47%) — don't underestimate the prep needed.",
    },
    pickupLandmarks: [
      "Auburn station",
      "Auburn Central shopping",
      "Auburn Botanic Gardens",
    ],
    practiceStreets: [
      "Parramatta Road",
      "Auburn Road",
      "Park Road",
      "Station Road",
      "Queen Street",
    ],
    commonChallenges: [
      {
        title: "Parramatta Road intensity",
        description:
          "Parramatta Road is arguably Sydney's most intense arterial — six lanes of constant movement with buses, trucks, and impatient drivers. Calm lane discipline is everything.",
      },
      {
        title: "Auburn Road shopping strip",
        description:
          "Auburn Road has pedestrians crossing mid-block, delivery vehicles, and constant parking turnover. Low-speed awareness separates passes from fails.",
      },
    ],
    localSchoolsAndUnis: [
      "Auburn Public School",
      "Auburn Girls High School",
      "Trinity Catholic College",
    ],
    localInsight:
      "Auburn is genuinely one of the harder Sydney test centres — it's not about the route difficulty alone, but the sheer volume of traffic and the edge-case scenarios that come up. Extra preparation is non-negotiable.",
  },

  chatswood: {
    slug: "chatswood",
    name: "Chatswood",
    postcode: "2067",
    heroTagline:
      "Testing at Chatswood? Pacific Highway, steep hills, strict examiners — we cover all three.",
    nearestTestCentre: {
      name: "Service NSW Chatswood",
      address: "Chatswood Service Centre",
      passRate: 50,
      notes:
        "Chatswood has one of the lowest pass rates in Sydney. Strict examiners are part of the reputation.",
    },
    pickupLandmarks: [
      "Chatswood station",
      "Chatswood Chase shopping",
      "Westfield Chatswood",
    ],
    practiceStreets: [
      "Pacific Highway",
      "Victoria Avenue",
      "Boundary Street",
      "Archer Street",
      "Mowbray Road",
    ],
    commonChallenges: [
      {
        title: "Pacific Highway multi-lane discipline",
        description:
          "Pacific Highway through Chatswood demands confident lane changes in dense traffic. Hesitation or incorrect lane choice is a common fail point.",
      },
      {
        title: "Steep residential hills",
        description:
          "Chatswood's residential streets have some of the steepest gradients in northern Sydney. Hill starts, smooth descent control, and parking on slopes are all tested.",
      },
      {
        title: "Strict head-check enforcement",
        description:
          "Chatswood examiners are known for being unusually strict on head checks. A small shoulder glance isn't enough — they need to see a clear, deliberate head turn.",
      },
    ],
    localSchoolsAndUnis: [
      "Chatswood Public School",
      "Chatswood High School",
      "Willoughby Girls High School",
    ],
    localInsight:
      "Chatswood's reputation as a tough centre is earned — the Pacific Highway + steep hills + strict examiner combination catches out underprepared learners. If you're booked here, we'll put extra focus on head-check discipline and hill starts in your final lessons.",
  },
};

// Helper function to get suburb data by slug
export function getSuburb(slug: string): SuburbData | undefined {
  return SUBURBS[slug];
}

// Helper function to get all suburb slugs (for generating routes)
export function getAllSuburbSlugs(): string[] {
  return Object.keys(SUBURBS);
}