const options = [
  {
    "id": "nus",
    "name": "NUS on-campus housing",
    "short": "NUS on-campus",
    "type": "Campus dorm",
    "coords": [
      1.2966,
      103.7764
    ],
    "distance": 0.4,
    "quality": 4.7,
    "ratingLabel": "Qualitative 4.7/5",
    "price": {
      "min": 771,
      "avg": 967,
      "max": 1274,
      "label": "S$771–1,274/mo",
      "basis": "AY26/27 NUS weekly residence rates converted using weekly × 52 / 12; GST-inclusive per pax.",
      "confidence": "official"
    },
    "bestFor": "Eligible NUS students who want lowest commute, student community and predictable admin.",
    "watchOut": "Competitive allocation; some halls/RCs have meal plans, programmes or eligibility constraints.",
    "notes": [
      "Best first application if eligible",
      "UTown Residence / PGPR / RCs / Halls",
      "Usually strongest value-to-commute ratio"
    ],
    "sources": [
      [
        "NUS OSA accommodation overview",
        "https://osa.nus.edu.sg/accommodation/"
      ],
      [
        "NUS hostel options",
        "https://osa.nus.edu.sg/accommodation/hostel-options/"
      ],
      [
        "NUS UG residence rates PDF, 2026",
        "https://osa.nus.edu.sg/wp-content/uploads/2026/02/UG-Residences-Rates-as-at-25-Feb-2026.pdf"
      ]
    ],
    "commute": {
      "mode": "walk / NUS shuttle",
      "time": "0–15 min",
      "minutes": 8,
      "note": "On campus; exact time depends on hall/RC and faculty building."
    }
  },
  {
    "id": "lyf",
    "name": "lyf one-north Singapore",
    "short": "lyf one-north",
    "type": "Coliving aparthotel",
    "coords": [
      1.3003,
      103.7877
    ],
    "distance": 1.4,
    "quality": 4.5,
    "ratingLabel": "8.5–9.1/10; 4.0–4.5/5 snippets",
    "price": {
      "min": 2788,
      "avg": 2794,
      "max": 2800,
      "label": "S$2,788–2,800/mo",
      "basis": "uHomes lyf one-north listing showed SG$2,788/month; search result snippet showed SG$2,800/month. Verify final serviced-apartment rate directly.",
      "confidence": "listing"
    },
    "bestFor": "Private coliving/aparthotel feel near one-north MRT with shared kitchen, gym and pool.",
    "watchOut": "May price more like a serviced apartment or hotel than a student hostel.",
    "notes": [
      "Strongest private overall pick",
      "Modern facilities and excellent MRT access",
      "Near NUS but check monthly pricing"
    ],
    "sources": [
      [
        "Official lyf one-north page",
        "https://www.discoverasr.com/en/lyf/singapore/lyf-one-north-singapore"
      ],
      [
        "uHomes lyf one-north monthly listing",
        "https://en.uhomes.com/sg/singapore/detail-apartments-1516720"
      ],
      [
        "Trip.com review page",
        "https://us.trip.com/hotels/singapore-hotel-detail-80962806/lyf-one-north-singapore/review.html"
      ],
      [
        "Booking.com reviews",
        "https://www.booking.com/reviews/sg/hotel/lyf-one-north-singapore.html"
      ],
      [
        "Tripadvisor page",
        "https://www.tripadvisor.com/Hotel_Review-g294265-d23753780-Reviews-Lyf_One_North_Singapore-Singapore.html"
      ]
    ],
    "commute": {
      "mode": "MRT + NUS shuttle / bus 95",
      "time": "10–25 min",
      "minutes": 18,
      "note": "one-north area; one stop or short bus/taxi hop to Kent Ridge campus."
    }
  },
  {
    "id": "coliwoo",
    "name": "Coliwoo Hotel Pasir Panjang",
    "short": "Coliwoo Pasir Panjang",
    "type": "Coliving hotel",
    "coords": [
      1.2766,
      103.792
    ],
    "distance": 0.9,
    "quality": 4.35,
    "ratingLabel": "8.7/10 or ~4.3/5 snippets",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Official Coliwoo Pasir Panjang and uHomes pages confirmed flexible one-night to 12-month leases, but no reliable monthly room-rate table was extractable; request a property quote.",
      "confidence": "enquiry"
    },
    "bestFor": "Closest practical private coliving-style option for NUS Kent Ridge.",
    "watchOut": "Ratings vary by platform; inspect room size, lease terms, housekeeping and utility rules.",
    "notes": [
      "Closest private option",
      "Pasir Panjang / Haw Par Villa side",
      "Kitchenette / washer-dryer style rooms may suit longer stays"
    ],
    "sources": [
      [
        "Official Coliwoo Pasir Panjang page",
        "https://coliwoo.com/hotel-apartment-rental/pasir-panjang/"
      ],
      [
        "uHomes Coliwoo Pasir Panjang listing",
        "https://en.uhomes.com/sg/singapore/detail-apartments-1576435"
      ],
      [
        "Trip.com reviews",
        "https://sg.trip.com/hotels/singapore-hotel-detail-114683085/coliwoo-hotel-pasir-panjang-coliving/review.html"
      ],
      [
        "Coliwoo blog: Pasir Panjang",
        "https://coliwoo.com/blog_post/coliwoo-hotel-pasir-panjang-modern-co-living-excellence-with-flexible-stays/"
      ]
    ],
    "commute": {
      "mode": "bus / taxi",
      "time": "10–25 min",
      "minutes": 17,
      "note": "Pasir Panjang/Haw Par Villa side; direct buses and short taxi rides work well."
    }
  },
  {
    "id": "casamia",
    "name": "Casa Mia Coliving near West-side locations",
    "short": "Casa Mia near West",
    "type": "Coliving room",
    "coords": [
      1.3047,
      103.7648
    ],
    "distance": 2.5,
    "quality": 4.6,
    "ratingLabel": "Provider claims Google Reviews 4.6",
    "price": {
      "min": 850,
      "avg": 1725,
      "max": 2600,
      "label": "S$850–2,600/mo",
      "basis": "Casa Mia student housing page says from S$850/mo; EdgeProp profile cites S$950 standard rooms up to S$2,600 ensuite/master rooms.",
      "confidence": "estimate"
    },
    "bestFor": "Private bedroom in a shared apartment with community and furnished setup.",
    "watchOut": "Not one fixed building; only Clementi, Dover, Kent Ridge, one-north or Queenstown listings are NUS-friendly.",
    "notes": [
      "Good provider reputation",
      "Location-dependent",
      "Ask for exact door-to-campus commute before paying deposit"
    ],
    "sources": [
      [
        "Casa Mia NUS student accommodation guide",
        "https://www.casamia.co/blog/rent-room-near-national-university-singapore-nus-student-accommodation"
      ],
      [
        "Casa Mia student housing page",
        "https://www.casamia.co/page/student-housing-singapore"
      ],
      [
        "EdgeProp Casa Mia profile with rates",
        "https://www.edgeprop.sg/property-news/casa-mia-coliving-bets-young-expatriate-professionals"
      ],
      [
        "Casa Mia: Four Years of Easy Living",
        "https://www.casamia.co/blog/four-years-of-easy-living"
      ],
      [
        "Casa Mia homepage",
        "https://www.casamia.co/"
      ]
    ],
    "commute": {
      "mode": "bus / taxi",
      "time": "15–30 min",
      "minutes": 22,
      "note": "Provider is location-dependent; West-side listings are the NUS-friendly ones."
    }
  },
  {
    "id": "cove",
    "name": "Cove student accommodation near West-side locations",
    "short": "Cove near West",
    "type": "Coliving room",
    "coords": [
      1.3033,
      103.7648
    ],
    "distance": 3,
    "quality": 4.5,
    "ratingLabel": "ColivingSG says 4.5 stars / 10k+ reviews",
    "price": {
      "min": 1350,
      "avg": 1767,
      "max": 2300,
      "label": "S$1,350–2,300/mo",
      "basis": "Cove room-search page lists Basics from 1,350 SGD/month, Classics from 1,650, and Luxe from 2,300.",
      "confidence": "listing"
    },
    "bestFor": "Broad inventory and flexible student-oriented room search.",
    "watchOut": "Quality is unit-specific; verify legal lease, bugs/maintenance, bathroom sharing and utility caps.",
    "notes": [
      "Large student accommodation inventory",
      "Good backup if exact address is near NUS",
      "Inspect unit-level reviews and photos"
    ],
    "sources": [
      [
        "Cove student accommodation page",
        "https://cove.sg/students"
      ],
      [
        "Cove rooms-for-rent search pricing",
        "https://cove.sg/search/rooms-for-rent-singapore"
      ],
      [
        "ColivingSG Cove brand page",
        "https://www.colivingsg.com/brands/cove"
      ],
      [
        "The Best Singapore Cove review",
        "https://www.thebestsingapore.com/biz-review/cove-review/"
      ],
      [
        "Reddit caution thread on Cove experience",
        "https://www.reddit.com/r/askSingapore/comments/17xc8dd/considering_cove_living_in_sg_whats_your/"
      ]
    ],
    "commute": {
      "mode": "bus / taxi",
      "time": "15–30 min",
      "minutes": 22,
      "note": "Provider is location-dependent; exact unit address controls commute."
    }
  },
  {
    "id": "mdis",
    "name": "MDIS Residences @ Stirling",
    "short": "MDIS @ Stirling",
    "type": "Student hostel",
    "coords": [
      1.3015,
      103.785
    ],
    "distance": 3,
    "quality": 2.8,
    "ratingLabel": "Mixed / negative public snippets",
    "price": {
      "min": 894,
      "avg": 1407,
      "max": 2671,
      "label": "S$894–2,671/mo",
      "basis": "Official MDIS/Collabil room rents range from S$894 quad bay-window to S$2,671 suite; GST-inclusive.",
      "confidence": "official"
    },
    "bestFor": "Students who need dedicated student-hostel-style accommodation near Queenstown.",
    "watchOut": "Several negative review snippets; inspect room, facilities and deposit/refund terms carefully.",
    "notes": [
      "Near-ish to NUS",
      "Student-residence positioning",
      "Only consider after in-person viewing"
    ],
    "sources": [
      [
        "MDIS Residences official hostel site",
        "https://hostel.mdis.edu.sg/"
      ],
      [
        "MDIS Residences @ Stirling official info",
        "https://www.mdis.edu.sg/mdis-residences-stirling"
      ],
      [
        "Collabil MDIS Residences monthly rooms",
        "https://www.collabil.app/sg/singapore/properties/mdis-residences--stirling"
      ],
      [
        "University Living MDIS listing",
        "https://www.universityliving.com/singapore/singapore/property/mdis-residences"
      ],
      [
        "EdgeProp reviews page",
        "https://www.edgeprop.sg/condo-apartment/mdis-residence@stirling"
      ]
    ],
    "commute": {
      "mode": "MRT + bus / bus 51",
      "time": "25–40 min",
      "minutes": 32,
      "note": "Queenstown/Stirling side; campus-side walking or shuttle can dominate."
    }
  },
  {
    "id": "yoha",
    "name": "yo:HA @ Henderson",
    "short": "yo:HA Henderson",
    "type": "Student hostel",
    "coords": [
      1.282,
      103.819
    ],
    "distance": 5,
    "quality": 3.2,
    "ratingLabel": "Basic / dated-facility snippets",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Official yo:HA Henderson page was inaccessible/suspended during this check and Student.com redirected; verify directly before using in budget.",
      "confidence": "enquiry"
    },
    "bestFor": "Budget-conscious students who can accept a longer commute and basic hostel facilities.",
    "watchOut": "Not very close to Kent Ridge; facilities may be dated compared with newer coliving options.",
    "notes": [
      "Student hostel format",
      "Henderson / Redhill side",
      "Reasonable budget option if commute is acceptable"
    ],
    "sources": [
      [
        "yo:HA Henderson official page",
        "https://yoha.com.sg/student-hostel-singapore/henderson/"
      ],
      [
        "The Best SG yo:HA listing",
        "https://thebestsg.com/business/yoha-hostel-singapore"
      ]
    ],
    "commute": {
      "mode": "bus / MRT + shuttle",
      "time": "25–45 min",
      "minutes": 35,
      "note": "Henderson/Redhill side; workable but not close."
    }
  },
  {
    "id": "habyt",
    "name": "Habyt / Hmlet Cantonment",
    "short": "Habyt/Hmlet Cantonment",
    "type": "Coliving apartment",
    "coords": [
      1.2795,
      103.845
    ],
    "distance": 7.5,
    "quality": 4.5,
    "ratingLabel": "Tripadvisor snippets around 4.5/5",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Habyt/Hmlet public pages did not expose a reliable monthly student-room rate during this check; central serviced-stay pricing can be materially higher than room-share coliving.",
      "confidence": "enquiry"
    },
    "bestFor": "Students who value central-city living over proximity to NUS.",
    "watchOut": "Cantonment/Tanjong Pagar is far for daily Kent Ridge classes.",
    "notes": [
      "Good central coliving option",
      "Polished but commute-heavy",
      "Consider only if lifestyle beats commute"
    ],
    "sources": [
      [
        "Tripadvisor Hmlet Cantonment page",
        "https://www.tripadvisor.com/Hotel_Review-g294265-d19218718-Reviews-Hmlet_Cantonment-Singapore.html"
      ],
      [
        "Habyt Singapore",
        "https://www.habyt.com/"
      ],
      [
        "Her World coliving booking review",
        "https://www.herworld.com/pov/this-is-my-review-of-co-living-space-hmlets-booking-process"
      ],
      [
        "Stacked Homes experience article",
        "https://stackedhomes.com/i-stayed-at-hmlet-cantonment-heres-what-my-actual-co-living-experience-was-like-not-great/"
      ]
    ],
    "commute": {
      "mode": "MRT + NUS shuttle / bus",
      "time": "35–55 min",
      "minutes": 45,
      "note": "Cantonment/Tanjong Pagar is lifestyle-first, commute-heavy."
    }
  },
  {
    "id": "dash",
    "name": "Dash Living central / student stays",
    "short": "Dash Living central",
    "type": "Long-stay hotel",
    "coords": [
      1.281,
      103.839
    ],
    "distance": 8,
    "quality": 3.4,
    "ratingLabel": "Mixed Trustpilot snippets",
    "price": {
      "min": 1600,
      "avg": 1776,
      "max": 1957,
      "label": "S$1,600–1,957/30 nights",
      "basis": "Dash Singapore page lists East Meadows from S$1,600–1,648/30 nights and Maylea West Coast from S$1,900–1,957/30 nights.",
      "confidence": "listing"
    },
    "bestFor": "Flexible furnished stays if a suitable West-side property appears.",
    "watchOut": "Central locations are commute-heavy; deposit and support reviews are mixed.",
    "notes": [
      "Flexible living provider",
      "Only NUS-friendly if exact address is west",
      "Scrutinize cancellation/deposit terms"
    ],
    "sources": [
      [
        "Dash Living Singapore",
        "https://www.dash.co/en/singapore"
      ],
      [
        "Dash Living student accommodation page",
        "https://www.dash.co/en/student-accommodation"
      ],
      [
        "Trustpilot Dash reviews",
        "https://www.trustpilot.com/review/dash.co"
      ]
    ],
    "commute": {
      "mode": "MRT + NUS shuttle / taxi",
      "time": "35–55 min",
      "minutes": 45,
      "note": "Central Dash locations are commute-heavy; West Coast listings can be faster."
    }
  },
  {
    "id": "balestier",
    "name": "Balestier Students' Hostel",
    "short": "Balestier Hostel",
    "type": "Student hostel",
    "coords": [
      1.32,
      103.855
    ],
    "distance": 10.5,
    "quality": 3.1,
    "ratingLabel": "Limited public rating data",
    "price": {
      "min": 600,
      "avg": 1053,
      "max": 1500,
      "label": "S$600–1,500/mo",
      "basis": "Official Balestier room pages list eight-pax S$600, six-pax S$780, quad S$980, mini single S$1,100–1,300, twin S$1,130, triple S$1,180 and single S$1,500.",
      "confidence": "official"
    },
    "bestFor": "Students studying nearer central/Novena/Balestier, or those prioritizing legacy student-hostel setup.",
    "watchOut": "Far from NUS Kent Ridge; review data is thinner than for major coliving operators.",
    "notes": [
      "Longstanding student hostel",
      "Far for NUS",
      "Budget/availability may be the main reason to consider"
    ],
    "sources": [
      [
        "Balestier Students’ Hostel official site",
        "https://bshostel.com/"
      ],
      [
        "Balestier single-room rate page",
        "https://bshostel.com/room/single-room/"
      ],
      [
        "Balestier quad-room rate page",
        "https://bshostel.com/room/quad-room/"
      ],
      [
        "uHomes Balestier listing",
        "https://en.uhomes.com/sg/singapore/detail-apartments-1551690"
      ],
      [
        "Student.com Balestier listing",
        "https://www.student.com/sg/singapore/p/balestier-students-hostel-2"
      ]
    ],
    "commute": {
      "mode": "MRT + NUS shuttle / bus 151",
      "time": "40–60 min",
      "minutes": 50,
      "note": "Balestier/Novena is far for daily Kent Ridge classes."
    }
  },
  {
    "id": "oasia-residence",
    "name": "Oasia Residence Singapore",
    "short": "Oasia Residence West Coast",
    "type": "Serviced apartment",
    "coords": [
      1.2993,
      103.7645
    ],
    "distance": 1.3,
    "quality": 4.35,
    "ratingLabel": "Booking.com ~8.9/10; Tripadvisor ~4/5 snippets",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Official serviced-residence and long-stay channels advertise direct enquiry / discounted long-stay rates, but no stable monthly public tariff was available.",
      "confidence": "enquiry"
    },
    "commute": {
      "mode": "bus / taxi",
      "time": "10–20 min",
      "minutes": 15,
      "note": "West Coast location near NUS/Science Park; taxi is very short, bus depends on exact campus stop."
    },
    "bestFor": "Visiting researchers, exchange students, couples or families wanting a quieter West Coast serviced-apartment setup.",
    "watchOut": "Premium serviced-residence pricing; monthly rates are direct-enquiry and likely above student room rentals.",
    "notes": [
      "Strong West Coast location",
      "Serviced apartment comfort",
      "Better for budget-flexible long stays than dorm-style student housing"
    ],
    "sources": [
      [
        "Official Oasia Residence page",
        "https://www.fareasthospitality.com/en/serviced-residences/oasia-residence-singapore"
      ],
      [
        "Booking.com Oasia Residence",
        "https://www.booking.com/hotel/sg/oasia-residence-singapore.html"
      ],
      [
        "Tripadvisor Oasia Residence",
        "https://www.tripadvisor.com/Hotel_Review-g294265-d10721485-Reviews-Oasia_Residence_Singapore_by_Far_East_Hospitality-Singapore.html"
      ],
      [
        "Serviced Apartments Association listing",
        "https://www.servicedapartments.org.sg/en/oasia_residence_singapore.html"
      ]
    ]
  },
  {
    "id": "village-residence-west-coast",
    "name": "Village Residence West Coast",
    "short": "Village Residence West Coast",
    "type": "Serviced apartment",
    "coords": [
      1.3038,
      103.7663
    ],
    "distance": 1.4,
    "quality": 4.15,
    "ratingLabel": "Tripadvisor ~4/5 snippets; established Far East serviced residence",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Official serviced-residence pages position this as furnished studios to 3-bedroom apartments with enquiry-based long-stay pricing.",
      "confidence": "enquiry"
    },
    "commute": {
      "mode": "bus / taxi",
      "time": "10–20 min",
      "minutes": 15,
      "note": "West Coast Plaza side; short ride to campus, with bus or taxi depending on faculty."
    },
    "bestFor": "Families, visiting academics or students sharing a serviced apartment near West Coast amenities.",
    "watchOut": "Minimum-stay and serviced-apartment pricing can make this much pricier than student hostels or shared rooms.",
    "notes": [
      "West Coast Plaza convenience",
      "Fully furnished long-stay apartment format",
      "Best for shared/premium budgets"
    ],
    "sources": [
      [
        "Official Village Residence West Coast page",
        "https://www.villagehotels.asia/en/serviced-residences/village-residence-west-coast"
      ],
      [
        "Far East Hospitality page",
        "https://www.fareasthospitality.com/en/serviced-residences/village-residence-west-coast"
      ],
      [
        "Tripadvisor Village Residence West Coast",
        "https://www.tripadvisor.com/Hotel_Review-g294265-d2216811-Reviews-Village_Residence_West_Coast_by_Far_East_Hospitality-Singapore.html"
      ],
      [
        "PropertyGuru listing signal",
        "https://www.propertyguru.com.sg/listing/for-rent-village-residence-west-coast-18763739"
      ]
    ]
  },
  {
    "id": "citadines-fusionopolis",
    "name": "Citadines Fusionopolis Singapore",
    "short": "Citadines Fusionopolis",
    "type": "Serviced apartment",
    "coords": [
      1.2989,
      103.7874
    ],
    "distance": 1.3,
    "quality": 3.95,
    "ratingLabel": "Booking.com ~8.0–8.4/10; Tripadvisor mixed snippets",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Official ASR/Dash pages expose booking/enquiry rather than a fixed monthly student rate; verify long-stay quote directly.",
      "confidence": "enquiry"
    },
    "commute": {
      "mode": "MRT + NUS shuttle / bus 95",
      "time": "15–25 min",
      "minutes": 20,
      "note": "Directly useful if you also need one-north/Fusionopolis access."
    },
    "bestFor": "NUS visitors also working around one-north, Fusionopolis, Biopolis, ESSEC or INSEAD.",
    "watchOut": "Public review signal is less consistently strong than some West Coast serviced residences; confirm room layout.",
    "notes": [
      "Direct one-north / Fusionopolis location",
      "Loft-style serviced apartments",
      "Good for research/internship access around one-north"
    ],
    "sources": [
      [
        "Official Citadines Fusionopolis page",
        "https://www.discoverasr.com/en/citadines/singapore/citadines-fusionopolis-singapore"
      ],
      [
        "Dash Living Citadines page",
        "https://www.dash.co/en/singapore/hotel-residences/citadines-fusionopolis-singapore"
      ],
      [
        "Booking.com Citadines Fusionopolis",
        "https://www.booking.com/hotel/sg/citadines-fusionopolis-singapore.html"
      ],
      [
        "Tripadvisor Citadines Fusionopolis",
        "https://www.tripadvisor.com/Hotel_Review-g294265-d1485045-Reviews-Citadines_Fusionopolis_Singapore-Singapore.html"
      ]
    ]
  },
  {
    "id": "park-avenue-rochester",
    "name": "Park Avenue Rochester",
    "short": "Park Avenue Rochester",
    "type": "Long-stay hotel",
    "coords": [
      1.3049,
      103.7886
    ],
    "distance": 1.7,
    "quality": 4.05,
    "ratingLabel": "Tripadvisor ~4/5 with large review base; Booking.com ~7.9/10 snippets",
    "price": {
      "min": null,
      "avg": null,
      "max": null,
      "label": "Quote required",
      "basis": "Hotel and serviced-suite pricing varies by dates/room; request monthly or long-stay quote directly.",
      "confidence": "enquiry"
    },
    "commute": {
      "mode": "bus/MRT + shuttle or taxi",
      "time": "20–30 min public; 10–15 min taxi",
      "minutes": 25,
      "note": "Rochester/Buona Vista area; strong transport access but campus-side transfer matters."
    },
    "bestFor": "Short-to-medium stays, visiting parents, researchers or interns wanting MRT access and hotel services.",
    "watchOut": "Usually pricier than room rentals; check whether the booked product is a standard room or apartment-style suite.",
    "notes": [
      "Buona Vista / Rochester convenience",
      "Hotel services",
      "Good for temporary stays while searching"
    ],
    "sources": [
      [
        "Official Park Avenue Rochester page",
        "https://parkavenuegroup.com/property/singapore-rochester-parkavenue/"
      ],
      [
        "Park Avenue Rochester rooms",
        "https://parkavenuegroup.com/property/singapore-rochester-parkavenue/rooms/"
      ],
      [
        "Booking.com Park Avenue Rochester",
        "https://www.booking.com/hotel/sg/park-avenue-rochester.html"
      ],
      [
        "Tripadvisor Park Avenue Rochester",
        "https://www.tripadvisor.com.sg/Hotel_Review-g294265-d2435463-Reviews-Park_Avenue_Rochester_Hotel-Singapore.html"
      ]
    ]
  },
  {
    "id": "varsity-park",
    "name": "Varsity Park Condominium",
    "short": "Varsity Park Condo",
    "type": "Private rental condo",
    "coords": [
      1.2948,
      103.7688
    ],
    "distance": 0.9,
    "quality": 4.0,
    "ratingLabel": "PropertyGuru/99.co/SRX project + active rental-market signal",
    "price": {
      "min": 1200,
      "avg": 4100,
      "max": 7000,
      "label": "S$1,200–7,000/mo",
      "basis": "PropertyGuru/market listings indicate room-share to full-unit rental range; exact price depends heavily on room/full-unit and lease length.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "walk / bus / taxi",
      "time": "10–25 min",
      "minutes": 18,
      "note": "One of the closest private-condo options around West Coast / NUS."
    },
    "bestFor": "Students wanting one of the closest private condo options to NUS, especially as a room share.",
    "watchOut": "Availability depends on individual landlords/agents; full units are expensive and leases may be long.",
    "notes": [
      "Very close private rental market",
      "Good if sharing with others",
      "Check unit condition and lease terms"
    ],
    "sources": [
      [
        "PropertyGuru Varsity Park",
        "https://www.propertyguru.com.sg/project/varsity-park-condominium-80"
      ],
      [
        "99.co Varsity Park",
        "https://www.99.co/singapore/condos-apartments/varsity-park-condominium"
      ],
      [
        "SRX Varsity Park",
        "https://www.srx.com.sg/condo/varsity-park-condominium-76"
      ],
      [
        "Stacked Homes Varsity Park directory",
        "https://stackedhomes.com/directory/condo/varsity-park-condominium/"
      ]
    ]
  },
  {
    "id": "clementiwoods-condo",
    "name": "ClementiWoods Condominium",
    "short": "ClementiWoods Condo",
    "type": "Private rental condo",
    "coords": [
      1.2969,
      103.7675
    ],
    "distance": 1.0,
    "quality": 4.05,
    "ratingLabel": "Student.com NUS listing + PropertyGuru/99.co project signal",
    "price": {
      "min": 2500,
      "avg": 4700,
      "max": 6900,
      "label": "S$2,500–6,900/mo full-unit; room quote varies",
      "basis": "PropertyGuru full-unit range plus Student.com room-listing signal; room rates are operator/landlord-dependent.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "bus / walk / taxi",
      "time": "10–25 min",
      "minutes": 18,
      "note": "West Coast/Clementi Woods side; close, but exact block and campus destination matter."
    },
    "bestFor": "Students seeking a quieter West Coast condo room near NUS, especially if sharing.",
    "watchOut": "Room prices vary by operator/landlord; public transport can be less direct than one-north/Buona Vista.",
    "notes": [
      "Student-targeted room listings exist",
      "Near West Coast Plaza / Clementi Woods",
      "Verify room-level costs before ranking"
    ],
    "sources": [
      [
        "PropertyGuru ClementiWoods",
        "https://www.propertyguru.com.sg/project/clementiwoods-condominium-109"
      ],
      [
        "Student.com ClementiWoods near NUS",
        "https://www.student.com/sg/singapore/p/clementiwoods-condo-near-nus-essec-science-park-west-coast-plaza"
      ],
      [
        "PropertyGuru reviews",
        "https://www.propertyguru.com.sg/singapore-condo-reviews/clementiwoods-condominium-109/3"
      ],
      [
        "99.co ClementiWoods",
        "https://www.99.co/singapore/condos-apartments/clementiwoods-condominium"
      ]
    ]
  },
  {
    "id": "heritage-view",
    "name": "Heritage View",
    "short": "Heritage View Dover",
    "type": "Private rental condo",
    "coords": [
      1.3044,
      103.7843
    ],
    "distance": 1.3,
    "quality": 3.95,
    "ratingLabel": "Active PropertyGuru room/full-unit market; SingaporeExpats review signal",
    "price": {
      "min": 1050,
      "avg": 1700,
      "max": 2400,
      "label": "Approx. S$1,050–2,400/mo listed rooms",
      "basis": "PropertyGuru room-rental snippets; full-unit pricing is materially higher.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "bus / MRT + shuttle / taxi",
      "time": "15–25 min",
      "minutes": 20,
      "note": "Dover/Buona Vista/one-north area; convenient if unit is near the right bus stop."
    },
    "bestFor": "Students who want condo facilities and easy access to one-north, Buona Vista and Dover.",
    "watchOut": "Room listings may have admin fees, utility caps, house rules and unit-specific quality differences.",
    "notes": [
      "Good Dover / one-north rental market",
      "Potentially strong room-share value",
      "Check house rules and utility caps"
    ],
    "sources": [
      [
        "PropertyGuru Heritage View",
        "https://www.propertyguru.com.sg/project/heritage-view-154"
      ],
      [
        "PropertyGuru Heritage View rentals",
        "https://www.propertyguru.com.sg/property-for-rent/at-heritage-view-154"
      ],
      [
        "SingaporeExpats Heritage View reviews",
        "https://www.singaporeexpats.com/condo/reviews/832/HERITAGE-VIEW"
      ],
      [
        "SRX Heritage View",
        "https://www.srx.com.sg/condo/heritage-view-7"
      ]
    ]
  },
  {
    "id": "dover-parkview",
    "name": "Dover Parkview",
    "short": "Dover Parkview",
    "type": "Private rental condo",
    "coords": [
      1.3058,
      103.7847
    ],
    "distance": 1.4,
    "quality": 3.85,
    "ratingLabel": "PropertyGuru/99.co/SingaporeExpats rental + review signal",
    "price": {
      "min": 1100,
      "avg": 3550,
      "max": 6000,
      "label": "S$1,100–6,000/mo",
      "basis": "PropertyGuru project rental range; lower end usually room-share, higher end full units.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "bus / MRT + shuttle / taxi",
      "time": "15–25 min",
      "minutes": 20,
      "note": "Dover Rise / Buona Vista area; close geographically but route depends on stop access."
    },
    "bestFor": "Students, interns and academics who want Dover/Buona Vista access with condo facilities.",
    "watchOut": "Older development; quality varies by unit renovation and landlord responsiveness.",
    "notes": [
      "Large Dover rental development",
      "Useful for one-north/Buona Vista links",
      "Inspect actual unit condition"
    ],
    "sources": [
      [
        "PropertyGuru Dover Parkview",
        "https://www.propertyguru.com.sg/project/dover-parkview-178"
      ],
      [
        "PropertyGuru Dover Parkview reviews",
        "https://www.propertyguru.com.sg/singapore-condo-reviews/dover-parkview-178"
      ],
      [
        "99.co Dover Parkview",
        "https://www.99.co/singapore/condos-apartments/dover-parkview"
      ],
      [
        "SingaporeExpats Dover Parkview reviews",
        "https://www.singaporeexpats.com/condo/reviews/499/DOVER-PARKVIEW"
      ]
    ]
  },
  {
    "id": "one-north-residences",
    "name": "One-North Residences",
    "short": "One-North Residences",
    "type": "Private rental condo",
    "coords": [
      1.3017,
      103.7897
    ],
    "distance": 1.6,
    "quality": 4.1,
    "ratingLabel": "PropertyGuru/99.co reviews highlight one-north location and rental demand",
    "price": {
      "min": 1500,
      "avg": 4350,
      "max": 7200,
      "label": "S$1,500–7,200/mo",
      "basis": "PropertyGuru project rental range; room availability and full-unit prices vary widely.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "bus / MRT + shuttle / taxi",
      "time": "15–25 min",
      "minutes": 20,
      "note": "Excellent if you split time between NUS and one-north/Biopolis/Fusionopolis."
    },
    "bestFor": "NUS students or researchers with internships/labs around one-north, Biopolis or Fusionopolis.",
    "watchOut": "Premium one-north pricing; room availability is competitive and full units can be costly.",
    "notes": [
      "High-convenience one-north rental",
      "Good for research cluster access",
      "Premium pricing risk"
    ],
    "sources": [
      [
        "PropertyGuru One-North Residences",
        "https://www.propertyguru.com.sg/project/one-north-residences-483"
      ],
      [
        "PropertyGuru reviews",
        "https://www.propertyguru.com.sg/singapore-condo-reviews/one-north-residences-483"
      ],
      [
        "99.co One-North Residences",
        "https://www.99.co/singapore/condos-apartments/one-north-residences"
      ],
      [
        "99.co reviews",
        "https://www.99.co/singapore/condos-apartments/one-north-residences/reviews"
      ]
    ]
  },
  {
    "id": "the-clement-canopy",
    "name": "The Clement Canopy",
    "short": "The Clement Canopy",
    "type": "Private rental condo",
    "coords": [
      1.3074,
      103.7683
    ],
    "distance": 1.5,
    "quality": 4.0,
    "ratingLabel": "99.co review snippets + uHomes near NUS listing signal",
    "price": {
      "min": 1200,
      "avg": 4600,
      "max": 8000,
      "label": "S$1,200–8,000/mo",
      "basis": "PropertyGuru project rental range; lower end typically room-share and upper end larger full units.",
      "confidence": "estimate"
    },
    "commute": {
      "mode": "bus / Clementi MRT + bus / taxi",
      "time": "10–25 min",
      "minutes": 18,
      "note": "Clementi Ave 1 side; good bus/taxi access to Kent Ridge."
    },
    "bestFor": "Students wanting a newer Clementi condo with town-centre amenities and NUS access.",
    "watchOut": "Can be expensive for full units; AYE/Clementi Ave 1 noise and traffic vary by stack.",
    "notes": [
      "Newer condo option",
      "Clementi amenities",
      "Room-share can make it more student-realistic"
    ],
    "sources": [
      [
        "PropertyGuru The Clement Canopy",
        "https://www.propertyguru.com.sg/project/the-clement-canopy-22866"
      ],
      [
        "99.co The Clement Canopy",
        "https://www.99.co/singapore/condos-apartments/the-clement-canopy"
      ],
      [
        "99.co reviews",
        "https://www.99.co/singapore/condos-apartments/the-clement-canopy/reviews"
      ],
      [
        "uHomes The Clement Canopy",
        "https://en.uhomes.com/sg/singapore/detail-apartments-1494931"
      ]
    ]
  }
];
