// Portfolio projects. Screenshots live in /public/work. `image` is the main one, `gallery` holds extras.
// Edit the wording here: problem / process / solution / outcome show on each project page.
export const projects = [
  {
    slug: 'finest-fossil-sneaker-store',
    number: '01',
    title: 'Finest Fossil: Sneaker Store',
    category: 'Web Development',
    group: 'web',
    type: 'E-commerce website',
    role: 'Designer, developer & brand',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudflare Workers', 'Cloudflare D1'],
    tagline: 'An online store for my own sneaker business, with colour-by-colour product pages, checkout and an order admin.',
    description:
      'A live e-commerce site for Finest Fossil, the sneaker business I have run since my undergraduate days. Customers pick a colourway and size, check out with delivery to any Nigerian state or abroad, and follow their order on its own page. Orders land in a private admin where I confirm payment, quote international shipping and update the status.',
    problem:
      'Selling on WhatsApp meant answering “how much is this?” for every photo and copying sizes, addresses and totals by hand. Customers could not see what was in stock, and orders were easy to lose in long chats.',
    process:
      'I studied six sneaker-store layouts on Pinterest and measured the real type on Nike, On, Foot Locker, END. and Sneakersnstuff to set the font sizes and weights. I designed the logo, a sneaker sole print that ties the word “fossil” to footwear, and built the catalogue so each model has one page with a swatch per colourway that swaps the photo.',
    solution:
      'A Next.js store on Cloudflare Workers with a D1 database. Checkout prices every item on the server from the catalogue, adds the delivery fee for the customer’s state (Lagos, South-West or the rest of Nigeria) and saves the order. The customer gets an order number and a “Pay on WhatsApp” button with the total filled in. A password-protected admin lists orders with filters and search, and lets me set status, payment and shipping quotes. Pages are prerendered and served from Cloudflare’s edge, and photos are WebP in two sizes so phones download the small ones.',
    outcome:
      'The business now has one link that shows every pair, colour and price, and takes orders around the clock. A product opens in about a tenth of a second once the site is loaded, and the whole order journey was tested on phone, tablet and desktop.',
    workflow: ['Pick a colourway', 'Choose a size', 'Check out', 'Delivery fee by state', 'Order page', 'Pay on WhatsApp', 'Admin confirms and ships'],
    image: 'work/finest-fossil.jpg',
    liveUrl: 'https://finest-fossil.peaceomachunyiejiga.workers.dev',
    liveNote: 'Opens in a new tab · live store taking real orders',
    gallery: ['work/finest-fossil-product.jpg', 'work/finest-fossil-checkout.jpg'],
  },
  {
    slug: 'helping-hands-foundation',
    number: '02',
    title: 'Helping Hands Foundation: NGO Website',
    category: 'Web Development',
    group: 'web',
    type: 'Full-stack website',
    role: 'Web designer & developer',
    tools: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Paystack', 'Cloudflare Workers'],
    tagline: 'A charity website with a USD donation flow, impact pages, transparency reports and working volunteer forms.',
    description:
      'A complete website for a Lagos foundation supporting orphans, vulnerable children and families who need help with medical costs: donation journey, three cause pages with campaign progress, a gift-impact calculator, annual report, safeguarding and privacy policies, news, and volunteer and partnership forms.',
    problem:
      'Charities need to earn trust before anyone gives. Donors want to see where money goes, give in a few clicks, and know their payment is safe, while the charity must protect the privacy and dignity of the people it supports.',
    process:
      'Before designing, I reviewed 23 NGO websites (charity: water, GiveDirectly, UNICEF, WaterAid, Plan International, World Vision, Slum2School and more) and combined their most effective patterns: a donation box in the hero, an impact-number band, campaign progress bars, a "what your gift can do" slider and a transparency chart. Policies draw on real donor-privacy policies, the Nigeria Data Protection Act and NGO safeguarding guidance.',
    solution:
      'A Next.js site deployed on Cloudflare Workers. Donations in US dollars go through a server-side Paystack integration: the secret key never reaches the browser, payments are verified with Paystack before any "thank you", and webhooks are signature-checked and processed once. Contact, volunteer and newsletter forms are validated in the browser and on the server, protected against spam, and confirm success only when the message is actually delivered.',
    outcome:
      'All content lives in one config file, so the team can update figures, reports and staff without touching code, and adding Paystack keys switches on live card payments. Tested across 18 page types on phone, tablet and desktop.',
    workflow: ['Choose an amount', 'Pick a cause', 'Review the gift', 'Secure checkout', 'Server verifies payment', 'Thank-you page'],
    image: 'work/helping-hands.jpg',
    liveUrl: 'https://helping-hands-foundation.peaceomachunyiejiga.workers.dev',
    gallery: [],
  },
  {
    slug: 'haven-stays-rental-website',
    number: '03',
    title: 'Haven Stays: Rental Website',
    category: 'Web Development',
    group: 'web',
    type: 'Rental website',
    role: 'Web designer & developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
    tagline: 'A vacation-rental website with property pages, an availability calendar, nightly prices and booking requests.',
    description:
      'A complete staycation and vacation rental website: a search bar that checks availability, six sortable and filterable stays, a page for every property with a photo viewer, availability calendar, area map, house rules and reviews, a booking panel with a live price total, a "Meet your host" section and an FAQ.',
    problem:
      'Rental owners lose bookings when guests cannot quickly see the place, the price per night and what the stay will cost in total.',
    process:
      'The page is built around three guest questions: what does it look like, what does it cost per night, and what will my stay total? Listings lead with large photos and a bold nightly price. Each property page has a clickable availability calendar that blocks booked nights and enforces the minimum stay, and a booking panel whose total (nights x nightly rate + cleaning fee) updates as the dates change. All content lives in one data file, and it is plain HTML, CSS and JavaScript, so it loads fast and is easy to hand over.',
    solution:
      'A home page with date-aware search, filters and sorting, plus a page for every property: photo viewer, amenities, sleeping arrangements, availability calendar, area map, house rules, reviews and host details. Booking requests and enquiries are validated and delivered by email. Responsive from phone to desktop, with a sticky booking bar on mobile.',
    outcome:
      'A rental website with working enquiry and booking-request forms. Homes, photos, prices and booked dates all live in one data file, so they can be updated without touching the page code.',
    workflow: ['Search by dates', 'Filter and sort', 'Open a property', 'Pick dates on the calendar', 'See the total', 'Send a booking request'],
    image: 'work/rental-site.jpg',
    liveUrl: 'sites/rental/',
    gallery: [],
  },
  {
    slug: 'telegram-booking-assistant',
    number: '04',
    title: 'Telegram Booking Assistant',
    category: 'Workflow Automation',
    group: 'automation',
    type: 'n8n workflow',
    role: 'Automation developer',
    tools: ['n8n', 'Telegram', 'OpenAI', 'Google Sheets', 'Google Calendar'],
    tagline: 'Customers chat on Telegram. The assistant answers, saves their details and books the appointment.',
    description:
      'An AI assistant on Telegram that answers service questions, records customer details and books appointments, with no manual back-and-forth.',
    problem:
      'Enquiries that arrive by chat usually need a person to reply, copy the details into a spreadsheet and add the booking to a calendar by hand.',
    process:
      'A Telegram trigger passes each message to an AI agent that keeps conversation memory. The agent has three tools: read the services list from Google Sheets, save or update the customer record in a sheet, and create an event in Google Calendar.',
    solution:
      'The agent answers from the live services list, saves the customer, books the slot and replies in the same chat, all in one conversation.',
    outcome:
      'A booking handled end to end inside a single chat. The run shown completed successfully in about 7.7 seconds.',
    workflow: ['Telegram message', 'AI agent', 'Services sheet', 'Customer record', 'Calendar booking', 'Reply'],
    image: 'work/telegram-booking.png',
    gallery: [],
  },
  {
    slug: 'telegram-meal-tracker',
    number: '05',
    title: 'Telegram Meal Tracker',
    category: 'Workflow Automation',
    group: 'automation',
    type: 'n8n workflow',
    role: 'Automation developer',
    tools: ['n8n', 'Telegram', 'Google Gemini', 'Google Sheets'],
    tagline: 'Log a meal by text, voice note or photo, then get a progress report with charts.',
    description:
      'A Telegram assistant that logs meals from text, voice notes or photos, remembers each user, and sends back reports with charts.',
    problem:
      'Tracking meals usually means opening an app and typing everything in, which is why most people stop after a few days.',
    process:
      'New users are checked against a registration sheet, and unregistered users go through a registration agent that saves their profile. For registered users, messages are routed by type: text goes straight to the AI agent, voice notes and photos are downloaded and analysed with Gemini first. The agent reads and updates the profile and adds each meal to Google Sheets. A separate report flow merges meal and user data into a chart message.',
    solution:
      'One chat handles registration, logging in three formats and reporting, with the data kept in Google Sheets.',
    outcome:
      'Logging a meal becomes a message, a voice note or a photo, and the report comes back in the same chat.',
    workflow: ['Telegram', 'Registration check', 'Text · voice · image router', 'Gemini analysis', 'AI agent', 'Google Sheets', 'Report and chart'],
    image: 'work/meal-tracker.png',
    gallery: [],
  },
  {
    slug: 'order-reminder-automation',
    number: '06',
    title: 'Order Reminder Automation',
    category: 'Workflow Automation',
    group: 'automation',
    type: 'n8n workflow',
    role: 'Automation developer',
    tools: ['n8n', 'Google Sheets', 'Gmail'],
    tagline: 'Finds orders that need a follow-up, emails the customer and marks the row so nobody is contacted twice.',
    description:
      'An automation that reads orders from a Google Sheet, picks out the ones due a reminder, emails the customer and marks the row as processed.',
    problem:
      'Chasing orders by hand means checking the sheet every day and remembering who has already been contacted.',
    process:
      'The workflow reads the order rows from Google Sheets. An If node compares today with the order date plus three days, Gmail sends the message, and the row\u2019s Processed column is updated.',
    solution:
      'Reminders go out on the right day without anyone watching the sheet, and the Processed flag stops the same customer being emailed twice.',
    outcome:
      'A repeatable follow-up process that runs by itself and keeps its own record in the spreadsheet.',
    workflow: ['Google Sheets', 'Date check', 'Gmail', 'Mark as processed'],
    image: 'work/order-reminder-1.png',
    gallery: ['work/order-reminder-2.png'],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
