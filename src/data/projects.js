// Portfolio projects. Screenshots live in /public/work. `image` is the main one, `gallery` holds extras.
// Edit the wording here: problem / process / solution / outcome show on each project page.
export const projects = [
  {
    slug: 'telegram-booking-assistant',
    number: '01',
    title: 'Telegram Booking Assistant',
    category: 'AI & Automation',
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
    number: '02',
    title: 'Telegram Meal Tracker',
    category: 'AI & Automation',
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
    number: '03',
    title: 'Order Reminder Automation',
    category: 'Automation',
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
  {
    slug: 'haven-stays-rental-website',
    number: '04',
    title: 'Haven Stays: Rental Website',
    category: 'Web Development',
    type: 'Website template',
    role: 'Web designer & developer',
    tools: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
    tagline: 'A vacation-rental website with real photos, nightly prices, live search and a booking estimate.',
    description:
      'A complete staycation and vacation rental website: a search bar, six sortable and filterable stays with nightly prices, a photo-gallery pop-up with a live price estimate and enquiry form, and an FAQ.',
    problem:
      'Rental owners lose bookings when guests cannot quickly see the place, the price per night and what the stay will cost in total.',
    process:
      'The page is built around three guest questions: what does it look like, what does it cost per night, and what will my stay total? Listings lead with large photos and a bold nightly price. The pop-up adds a gallery and an estimate (nights x nightly rate + cleaning fee) that updates as the dates change. It is plain HTML, CSS and JavaScript, so it loads fast and is easy to hand over.',
    solution:
      'A single-page site with live search, type filters, sorting by price or rating, a gallery pop-up with a price estimate, and a validated enquiry form, all responsive from phone to desktop.',
    outcome:
      'A ready-to-customise rental website. It uses sample content and its forms are demo-only, so it can be connected to a real client’s booking enquiries.',
    workflow: ['Search', 'Filter and sort', 'Browse photos', 'See price per night', 'Estimate the total', 'Send an enquiry'],
    image: 'work/rental-site.jpg',
    liveUrl: 'sites/rental/',
    gallery: [],
  },
];

export const getProject = (slug) => projects.find((p) => p.slug === slug);
