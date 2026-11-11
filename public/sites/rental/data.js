/* Haven Stays: all site content lives here. Replace with the client's real details.
   Every phone number, email, property, price and review on every page is read from this file. */
window.HS = (function () {
  var SITE = {
    brand: "Haven Stays",
    phone: "+1 (555) 010-2040",
    whatsapp: "+1 (555) 010-2040",
    email: "hello@havenstays.example",
    hours: "Mon-Sun 8:00-20:00",
    area: "Remote team, local hosts at every stay",
    form: "https://formspree.io/f/xaeowwge"
  };

  var HOST = {
    name: "Maya Laurent",
    first: "Maya",
    role: "Founder & host",
    img: "host-maya",
    since: 2019,
    languages: "English, French, Portuguese",
    response: "Within an hour",
    rating: 4.8,
    story: [
      "I started Haven Stays after years of booking holiday homes that looked nothing like their photos. Now I visit every home myself before it goes on the site, and I only list places I would happily book for my own family.",
      "When you book with us you deal with real people: me, and a local host at every stay who meets you, knows the best bakery in town and answers the phone when the Wi-Fi drops."
    ]
  };

  var COL = { sea: "By the sea", pool: "Pool villas", nature: "Forest & lake" };
  var TL = { apartment: "Apartment", villa: "Villa", studio: "Studio", cabin: "Cabin" };

  // Photo descriptions (alt text), keyed by file name in img/
  var AL = {
    "house-water": "Waterfront house with palm trees and a private dock",
    "balcony-table": "Terrace with a balustrade and breakfast table overlooking the sea",
    "bed-blue": "Bedroom with dark wood panelling and a blue throw",
    "living-room": "Bright modern living room with open kitchen",
    "house-pool-a": "Long pool lined with loungers and palm trees beside a villa",
    "house-pool-green": "Pool with sun umbrellas and loungers among tropical plants",
    "house-pool-b": "Garden pool and covered pavilion surrounded by greenery",
    "bed-modern": "Minimal white bedroom with a low bed",
    "couch-plant": "Attic lounge with a white sofa and plants",
    "balcony-town": "Balcony with sliding doors looking over a hillside coastal town",
    "balcony-kuvaev": "Window opening to a calm sea view",
    "living-ocean": "Living room with floor-to-ceiling windows onto the sea",
    "bed-spacejoy": "Bedroom with a tufted bed and soft grey tones",
    "house-golden": "Pool deck beside a modern house at sunset",
    "villa-twilight": "Villa with a lit pool at dusk among palm trees",
    "infinity-pool": "Infinity pool with a sun bed looking over tropical fields",
    "bed-hotel": "Calm bedroom with crisp white linen and bedside lamps",
    "patio-forest": "Wooden deck with a dining table among the trees",
    "green-hills": "Shuttered doors opening to a deck with views of green hills",
    "aframe-living": "A-frame living room with a wall of windows onto the forest",
    "bed-wood": "Bright bedroom with timber details and forest light",
    "cabin-lake": "Wooden cabin and boathouse on a still forest lake",
    "house-trees": "Waterside cottages on a rocky shore",
    "cabin-log": "Log cabin among tall pines",
    "loft-living": "Loft living space with a long dining table and big windows"
  };

  /* Properties.
     n name · s url slug · a area · c destination · t type · col collection · p price per night (USD)
     r rating · b bedrooms · ba bathrooms · g max guests · cl cleaning fee · min minimum nights
     im photos · am amenities · d short description · long more detail · sleep sleeping arrangements
     pets pets allowed · geo [lat, lon] for the area map (area only, never the exact address)
     near nearby places · rv reviews [name, date, stars, text] */
  var P = [
    {
      id: 1, s: "azure-bay-villa", n: "Azure Bay Villa", a: "Lagos, Algarve", c: "Algarve, Portugal",
      t: "villa", col: "sea", p: 240, r: 4.9, b: 3, ba: 2, g: 6, cl: 95, min: 3, pets: false,
      im: ["house-water", "balcony-table", "bed-blue", "living-room"],
      am: ["Private dock", "Sea view", "Air conditioning", "Fast Wi-Fi", "BBQ terrace", "Free parking", "Full kitchen", "Washing machine"],
      d: "A waterside villa with its own dock, a terrace made for long breakfasts and bright, airy bedrooms.",
      long: "Downstairs, the living room and kitchen open straight onto the terrace and the water. Upstairs, three bedrooms catch the morning light. Lagos old town, its beaches and seafood restaurants are a short drive away.",
      sleep: ["Bedroom 1 · King bed, sea view", "Bedroom 2 · Queen bed", "Bedroom 3 · Two single beds"],
      geo: [37.1028, -8.6743],
      near: [["Praia Dona Ana beach", "10 min drive"], ["Lagos old town", "12 min drive"], ["Faro airport", "1 h drive"]],
      rv: [["Anna K.", "May 2026", 5, "Spotless villa and the water view at sunrise was unreal. Check-in took two minutes."],
           ["Tom & Lies", "April 2026", 5, "The terrace is where we lived for a week. Maya's restaurant list was spot on."]]
    },
    {
      id: 2, s: "palm-garden-retreat", n: "Palm Garden Retreat", a: "Canggu, Bali", c: "Bali, Indonesia",
      t: "villa", col: "pool", p: 310, r: 4.8, b: 4, ba: 3, g: 8, cl: 120, min: 3, pets: false,
      im: ["house-pool-a", "house-pool-green", "house-pool-b", "bed-modern", "couch-plant"],
      am: ["Private pool", "Tropical garden", "Air conditioning", "Fast Wi-Fi", "Pool loungers", "Free parking", "Daily housekeeping", "Outdoor shower"],
      d: "Sleep eight beside a private pool tucked into a lush tropical garden, with shaded loungers and a pavilion.",
      long: "Four air-conditioned bedrooms open onto a walled garden, so the pool feels completely private. Housekeeping comes by every morning, and Canggu's cafes and surf beaches are a few minutes away.",
      sleep: ["Bedroom 1 · King bed, garden view", "Bedroom 2 · King bed", "Bedroom 3 · Queen bed", "Bedroom 4 · Two single beds"],
      geo: [-8.6478, 115.1385],
      near: [["Batu Bolong beach", "8 min by scooter"], ["Canggu cafes", "5 min walk"], ["Bali airport", "50 min drive"]],
      rv: [["Priya S.", "June 2026", 5, "The garden and pool felt completely private. Housekeeping came by daily and was lovely."],
           ["Daniel M.", "March 2026", 4, "Perfect for our group of eight. Traffic to the beach can be slow at sunset."]]
    },
    {
      id: 3, s: "cliffside-balcony-suite", n: "Cliffside Balcony Suite", a: "Positano, Amalfi Coast", c: "Amalfi Coast, Italy",
      t: "apartment", col: "sea", p: 150, r: 4.7, b: 2, ba: 1, g: 4, cl: 60, min: 2, pets: false,
      im: ["balcony-town", "balcony-kuvaev", "living-ocean", "bed-spacejoy"],
      am: ["Sea-view balcony", "Fast Wi-Fi", "Air conditioning", "Espresso machine", "Washer", "Kitchenette"],
      d: "A light-filled suite with a sea-view balcony over the old harbour town, a short walk from cafes and the shore.",
      long: "Big windows frame the sea from the living room, and the balcony is made for an aperitivo at sunset. You are in the heart of the village, so everything is on foot, including plenty of Positano's famous steps.",
      sleep: ["Bedroom 1 · Queen bed, sea view", "Bedroom 2 · Double sofa bed"],
      geo: [40.6281, 14.4850],
      near: [["Spiaggia Grande beach", "6 min walk"], ["Path of the Gods trail", "20 min drive"], ["Naples airport", "1 h 30 min drive"]],
      rv: [["Marco R.", "October 2026", 5, "A perfect long weekend. The balcony view at breakfast was worth the trip alone. Great value at $150 a night."],
           ["Hannah W.", "August 2026", 4, "Lots of steps to reach it, as everywhere in Positano, but the view makes up for every one."]]
    },
    {
      id: 4, s: "sunset-pool-house", n: "Sunset Pool House", a: "Uluwatu, Bali", c: "Bali, Indonesia",
      t: "villa", col: "pool", p: 380, r: 4.9, b: 5, ba: 4, g: 10, cl: 150, min: 4, pets: false,
      im: ["house-golden", "villa-twilight", "infinity-pool", "bed-hotel"],
      am: ["Heated pool", "Sunset deck", "Sea view", "Air conditioning", "Fast Wi-Fi", "Chef's kitchen", "Free parking", "Daily housekeeping"],
      d: "Our showpiece: a modern pool house with a deck built for sunsets and space for the whole group.",
      long: "Five bedrooms, a heated infinity pool and a long deck that faces west, so every evening ends with a sunset. The chef's kitchen is ready for big dinners, or ask us to arrange a private chef.",
      sleep: ["Bedroom 1 · King bed, pool view", "Bedroom 2 · King bed", "Bedroom 3 · Queen bed", "Bedroom 4 · Queen bed", "Bedroom 5 · Two single beds"],
      geo: [-8.8291, 115.0849],
      near: [["Padang Padang beach", "7 min drive"], ["Uluwatu Temple", "12 min drive"], ["Bali airport", "40 min drive"]],
      rv: [["Sofia & friends", "July 2026", 5, "We celebrated a 40th here. The sunset deck is everything the photos promise."],
           ["James O.", "May 2026", 5, "Huge, spotless, and the chef's kitchen got real use. Would book again."]]
    },
    {
      id: 5, s: "forest-deck-studio", n: "Forest Deck Studio", a: "Black Forest, Baden-Württemberg", c: "Black Forest, Germany",
      t: "studio", col: "nature", p: 95, r: 4.6, b: 1, ba: 1, g: 2, cl: 45, min: 2, pets: true,
      im: ["patio-forest", "green-hills", "aframe-living", "bed-wood"],
      am: ["Private deck", "Fast Wi-Fi", "Kitchenette", "Heating", "Work desk", "Pets welcome"],
      d: "A calm studio with a wooden deck among the trees. Ideal for a quiet staycation or a digital detox.",
      long: "One open room with a comfortable bed, a proper desk and a kitchenette, plus a deck where you will hear nothing but the forest. Hiking trails start at the door.",
      sleep: ["Studio · Queen bed"],
      geo: [48.5036, 8.3727],
      near: [["Forest hiking trails", "From the door"], ["Baiersbronn village", "8 min drive"], ["Stuttgart airport", "1 h 30 min drive"]],
      rv: [["Lena F.", "October 2026", 5, "Exactly the digital detox I needed, with fast Wi-Fi when I did need it."],
           ["Pieter V.", "September 2026", 4, "Small but very well thought out. Bring slippers, the deck is cold in the morning."]]
    },
    {
      id: 6, s: "lakeside-cabin", n: "Lakeside Cabin", a: "Coniston, Lake District", c: "Lake District, UK",
      t: "cabin", col: "nature", p: 120, r: 4.8, b: 2, ba: 1, g: 5, cl: 70, min: 2, pets: true,
      im: ["cabin-lake", "house-trees", "cabin-log", "loft-living"],
      am: ["Lake access", "Boathouse", "Fireplace", "Fast Wi-Fi", "Kitchen", "Free parking", "Pets welcome"],
      d: "A timber cabin with its own boathouse on a still lake. Swim at dawn, read by the fire at night.",
      long: "A cosy cabin with a wood fire, a full kitchen and a boathouse with a jetty for early swims. Coniston village, its pubs and the fells are a few minutes away.",
      sleep: ["Bedroom 1 · Double bed", "Bedroom 2 · Bunk beds, sleeps three"],
      geo: [54.3687, -3.0743],
      near: [["Coniston village", "5 min drive"], ["Old Man of Coniston hike", "15 min drive"], ["Windermere", "25 min drive"]],
      rv: [["Jonas L.", "September 2026", 4, "Quiet, cosy cabin by the water. Great coffee tips from the host. We would happily return."],
           ["Chloe B.", "August 2026", 5, "Swimming from the boathouse at 7am is something I will never forget."]]
    }
  ];

  return { SITE: SITE, HOST: HOST, COL: COL, TL: TL, AL: AL, P: P };
})();
