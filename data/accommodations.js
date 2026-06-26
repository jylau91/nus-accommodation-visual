const options = [
  {
    id: 'nus', name: 'NUS on-campus housing', short: 'NUS on-campus', type: 'Campus',
    coords: [1.2966, 103.7764],
    distance: 0.4, quality: 4.7, ratingLabel: 'Qualitative 4.7/5',
    price: { min: 771, avg: 967, max: 1274, label: 'S$771–1,274/mo', basis: 'AY26/27 NUS weekly residence rates converted using weekly × 52 / 12; GST-inclusive per pax.', confidence: 'official' },
    bestFor: 'Eligible NUS students who want lowest commute, student community and predictable admin.',
    watchOut: 'Competitive allocation; some halls/RCs have meal plans, programmes or eligibility constraints.',
    notes: ['Best first application if eligible', 'UTown Residence / PGPR / RCs / Halls', 'Usually strongest value-to-commute ratio'],
    sources: [
      ['NUS OSA accommodation overview', 'https://osa.nus.edu.sg/accommodation/'],
      ['NUS hostel options', 'https://osa.nus.edu.sg/accommodation/hostel-options/'],
      ['NUS UG residence rates PDF, 2026', 'https://osa.nus.edu.sg/wp-content/uploads/2026/02/UG-Residences-Rates-as-at-25-Feb-2026.pdf']
    ]
  },
  {
    id: 'lyf', name: 'lyf one-north Singapore', short: 'lyf one-north', type: 'Coliving',
    coords: [1.3003, 103.7877],
    distance: 1.4, quality: 4.5, ratingLabel: '8.5–9.1/10; 4.0–4.5/5 snippets',
    price: { min: 2788, avg: 2794, max: 2800, label: 'S$2,788–2,800/mo', basis: 'uHomes lyf one-north listing showed SG$2,788/month; search result snippet showed SG$2,800/month. Verify final serviced-apartment rate directly.', confidence: 'listing' },
    bestFor: 'Private coliving/aparthotel feel near one-north MRT with shared kitchen, gym and pool.',
    watchOut: 'May price more like a serviced apartment or hotel than a student hostel.',
    notes: ['Strongest private overall pick', 'Modern facilities and excellent MRT access', 'Near NUS but check monthly pricing'],
    sources: [
      ['Official lyf one-north page', 'https://www.discoverasr.com/en/lyf/singapore/lyf-one-north-singapore'],
      ['uHomes lyf one-north monthly listing', 'https://en.uhomes.com/sg/singapore/detail-apartments-1516720'],
      ['Trip.com review page', 'https://us.trip.com/hotels/singapore-hotel-detail-80962806/lyf-one-north-singapore/review.html'],
      ['Booking.com reviews', 'https://www.booking.com/reviews/sg/hotel/lyf-one-north-singapore.html'],
      ['Tripadvisor page', 'https://www.tripadvisor.com/Hotel_Review-g294265-d23753780-Reviews-Lyf_One_North_Singapore-Singapore.html']
    ]
  },
  {
    id: 'coliwoo', name: 'Coliwoo Hotel Pasir Panjang', short: 'Coliwoo Pasir Panjang', type: 'Coliving',
    coords: [1.2766, 103.7920],
    distance: 0.9, quality: 4.35, ratingLabel: '8.7/10 or ~4.3/5 snippets',
    price: { min: null, avg: null, max: null, label: 'Quote required', basis: 'Official Coliwoo Pasir Panjang and uHomes pages confirmed flexible one-night to 12-month leases, but no reliable monthly room-rate table was extractable; request a property quote.', confidence: 'enquiry' },
    bestFor: 'Closest practical private coliving-style option for NUS Kent Ridge.',
    watchOut: 'Ratings vary by platform; inspect room size, lease terms, housekeeping and utility rules.',
    notes: ['Closest private option', 'Pasir Panjang / Haw Par Villa side', 'Kitchenette / washer-dryer style rooms may suit longer stays'],
    sources: [
      ['Official Coliwoo Pasir Panjang page', 'https://coliwoo.com/hotel-apartment-rental/pasir-panjang/'],
      ['uHomes Coliwoo Pasir Panjang listing', 'https://en.uhomes.com/sg/singapore/detail-apartments-1576435'],
      ['Trip.com reviews', 'https://sg.trip.com/hotels/singapore-hotel-detail-114683085/coliwoo-hotel-pasir-panjang-coliving/review.html'],
      ['Coliwoo blog: Pasir Panjang', 'https://coliwoo.com/blog_post/coliwoo-hotel-pasir-panjang-modern-co-living-excellence-with-flexible-stays/']
    ]
  },
  {
    id: 'casamia', name: 'Casa Mia Coliving near West-side locations', short: 'Casa Mia near West', type: 'Coliving',
    coords: [1.3047, 103.7648],
    distance: 2.5, quality: 4.6, ratingLabel: 'Provider claims Google Reviews 4.6',
    price: { min: 850, avg: 1725, max: 2600, label: 'S$850–2,600/mo', basis: 'Casa Mia student housing page says from S$850/mo; EdgeProp profile cites S$950 standard rooms up to S$2,600 ensuite/master rooms.', confidence: 'estimate' },
    bestFor: 'Private bedroom in a shared apartment with community and furnished setup.',
    watchOut: 'Not one fixed building; only Clementi, Dover, Kent Ridge, one-north or Queenstown listings are NUS-friendly.',
    notes: ['Good provider reputation', 'Location-dependent', 'Ask for exact door-to-campus commute before paying deposit'],
    sources: [
      ['Casa Mia NUS student accommodation guide', 'https://www.casamia.co/blog/rent-room-near-national-university-singapore-nus-student-accommodation'],
      ['Casa Mia student housing page', 'https://www.casamia.co/page/student-housing-singapore'],
      ['EdgeProp Casa Mia profile with rates', 'https://www.edgeprop.sg/property-news/casa-mia-coliving-bets-young-expatriate-professionals'],
      ['Casa Mia: Four Years of Easy Living', 'https://www.casamia.co/blog/four-years-of-easy-living'],
      ['Casa Mia homepage', 'https://www.casamia.co/']
    ]
  },
  {
    id: 'cove', name: 'Cove student accommodation near West-side locations', short: 'Cove near West', type: 'Coliving',
    coords: [1.3033, 103.7648],
    distance: 3.0, quality: 4.5, ratingLabel: 'ColivingSG says 4.5 stars / 10k+ reviews',
    price: { min: 1350, avg: 1767, max: 2300, label: 'S$1,350–2,300/mo', basis: 'Cove room-search page lists Basics from 1,350 SGD/month, Classics from 1,650, and Luxe from 2,300.', confidence: 'listing' },
    bestFor: 'Broad inventory and flexible student-oriented room search.',
    watchOut: 'Quality is unit-specific; verify legal lease, bugs/maintenance, bathroom sharing and utility caps.',
    notes: ['Large student accommodation inventory', 'Good backup if exact address is near NUS', 'Inspect unit-level reviews and photos'],
    sources: [
      ['Cove student accommodation page', 'https://cove.sg/students'],
      ['Cove rooms-for-rent search pricing', 'https://cove.sg/search/rooms-for-rent-singapore'],
      ['ColivingSG Cove brand page', 'https://www.colivingsg.com/brands/cove'],
      ['The Best Singapore Cove review', 'https://www.thebestsingapore.com/biz-review/cove-review/'],
      ['Reddit caution thread on Cove experience', 'https://www.reddit.com/r/askSingapore/comments/17xc8dd/considering_cove_living_in_sg_whats_your/']
    ]
  },
  {
    id: 'mdis', name: 'MDIS Residences @ Stirling', short: 'MDIS @ Stirling', type: 'Student hostel',
    coords: [1.3015, 103.7850],
    distance: 3.0, quality: 2.8, ratingLabel: 'Mixed / negative public snippets',
    price: { min: 894, avg: 1407, max: 2671, label: 'S$894–2,671/mo', basis: 'Official MDIS/Collabil room rents range from S$894 quad bay-window to S$2,671 suite; GST-inclusive.', confidence: 'official' },
    bestFor: 'Students who need dedicated student-hostel-style accommodation near Queenstown.',
    watchOut: 'Several negative review snippets; inspect room, facilities and deposit/refund terms carefully.',
    notes: ['Near-ish to NUS', 'Student-residence positioning', 'Only consider after in-person viewing'],
    sources: [
      ['MDIS Residences official hostel site', 'https://hostel.mdis.edu.sg/'],
      ['MDIS Residences @ Stirling official info', 'https://www.mdis.edu.sg/mdis-residences-stirling'],
      ['Collabil MDIS Residences monthly rooms', 'https://www.collabil.app/sg/singapore/properties/mdis-residences--stirling'],
      ['University Living MDIS listing', 'https://www.universityliving.com/singapore/singapore/property/mdis-residences'],
      ['EdgeProp reviews page', 'https://www.edgeprop.sg/condo-apartment/mdis-residence@stirling']
    ]
  },
  {
    id: 'yoha', name: 'yo:HA @ Henderson', short: 'yo:HA Henderson', type: 'Student hostel',
    coords: [1.2820, 103.8190],
    distance: 5.0, quality: 3.2, ratingLabel: 'Basic / dated-facility snippets',
    price: { min: null, avg: null, max: null, label: 'Quote required', basis: 'Official yo:HA Henderson page was inaccessible/suspended during this check and Student.com redirected; verify directly before using in budget.', confidence: 'enquiry' },
    bestFor: 'Budget-conscious students who can accept a longer commute and basic hostel facilities.',
    watchOut: 'Not very close to Kent Ridge; facilities may be dated compared with newer coliving options.',
    notes: ['Student hostel format', 'Henderson / Redhill side', 'Reasonable budget option if commute is acceptable'],
    sources: [
      ['yo:HA Henderson official page', 'https://yoha.com.sg/student-hostel-singapore/henderson/'],
      ['The Best SG yo:HA listing', 'https://thebestsg.com/business/yoha-hostel-singapore']
    ]
  },
  {
    id: 'habyt', name: 'Habyt / Hmlet Cantonment', short: 'Habyt/Hmlet Cantonment', type: 'Coliving',
    coords: [1.2795, 103.8450],
    distance: 7.5, quality: 4.5, ratingLabel: 'Tripadvisor snippets around 4.5/5',
    price: { min: null, avg: null, max: null, label: 'Quote required', basis: 'Habyt/Hmlet public pages did not expose a reliable monthly student-room rate during this check; central serviced-stay pricing can be materially higher than room-share coliving.', confidence: 'enquiry' },
    bestFor: 'Students who value central-city living over proximity to NUS.',
    watchOut: 'Cantonment/Tanjong Pagar is far for daily Kent Ridge classes.',
    notes: ['Good central coliving option', 'Polished but commute-heavy', 'Consider only if lifestyle beats commute'],
    sources: [
      ['Tripadvisor Hmlet Cantonment page', 'https://www.tripadvisor.com/Hotel_Review-g294265-d19218718-Reviews-Hmlet_Cantonment-Singapore.html'],
      ['Habyt Singapore', 'https://www.habyt.com/'],
      ['Her World coliving booking review', 'https://www.herworld.com/pov/this-is-my-review-of-co-living-space-hmlets-booking-process'],
      ['Stacked Homes experience article', 'https://stackedhomes.com/i-stayed-at-hmlet-cantonment-heres-what-my-actual-co-living-experience-was-like-not-great/']
    ]
  },
  {
    id: 'dash', name: 'Dash Living central / student stays', short: 'Dash Living central', type: 'Coliving',
    coords: [1.2810, 103.8390],
    distance: 8.0, quality: 3.4, ratingLabel: 'Mixed Trustpilot snippets',
    price: { min: 1600, avg: 1776, max: 1957, label: 'S$1,600–1,957/30 nights', basis: 'Dash Singapore page lists East Meadows from S$1,600–1,648/30 nights and Maylea West Coast from S$1,900–1,957/30 nights.', confidence: 'listing' },
    bestFor: 'Flexible furnished stays if a suitable West-side property appears.',
    watchOut: 'Central locations are commute-heavy; deposit and support reviews are mixed.',
    notes: ['Flexible living provider', 'Only NUS-friendly if exact address is west', 'Scrutinize cancellation/deposit terms'],
    sources: [
      ['Dash Living Singapore', 'https://www.dash.co/en/singapore'],
      ['Dash Living student accommodation page', 'https://www.dash.co/en/student-accommodation'],
      ['Trustpilot Dash reviews', 'https://www.trustpilot.com/review/dash.co']
    ]
  },
  {
    id: 'balestier', name: "Balestier Students' Hostel", short: 'Balestier Hostel', type: 'Student hostel',
    coords: [1.3200, 103.8550],
    distance: 10.5, quality: 3.1, ratingLabel: 'Limited public rating data',
    price: { min: 600, avg: 1053, max: 1500, label: 'S$600–1,500/mo', basis: 'Official Balestier room pages list eight-pax S$600, six-pax S$780, quad S$980, mini single S$1,100–1,300, twin S$1,130, triple S$1,180 and single S$1,500.', confidence: 'official' },
    bestFor: 'Students studying nearer central/Novena/Balestier, or those prioritizing legacy student-hostel setup.',
    watchOut: 'Far from NUS Kent Ridge; review data is thinner than for major coliving operators.',
    notes: ['Longstanding student hostel', 'Far for NUS', 'Budget/availability may be the main reason to consider'],
    sources: [
      ['Balestier Students’ Hostel official site', 'https://bshostel.com/'],
      ['Balestier single-room rate page', 'https://bshostel.com/room/single-room/'],
      ['Balestier quad-room rate page', 'https://bshostel.com/room/quad-room/'],
      ['uHomes Balestier listing', 'https://en.uhomes.com/sg/singapore/detail-apartments-1551690'],
      ['Student.com Balestier listing', 'https://www.student.com/sg/singapore/p/balestier-students-hostel-2']
    ]
  }
];
