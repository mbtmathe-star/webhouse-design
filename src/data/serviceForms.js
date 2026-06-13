// Service-specific form data — questions, options, shared fields

export const TIMELINES = [
  'As soon as possible',
  'Within 1 month',
  '1–3 months',
  '3–6 months',
  'No fixed deadline',
]

export const CONTACT_METHODS = [
  'WhatsApp',
  'Email',
  'Phone call',
  'No preference',
]

export const FILE_ACCEPT =
  '.jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ai,.eps,.svg,.psd,.zip,.rar'

// Service-specific question sets — keyed by service slug
export const serviceQuestions = {

  'web-development': [
    {
      name: 'siteType',
      label: 'Do you need a new website or a website redesign?',
      type: 'select',
      options: ['New website', 'Website redesign', 'Both', 'Not sure'],
    },
    {
      name: 'hasDomain',
      label: 'Do you already have a domain?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'needsHosting',
      label: 'Do you need hosting support?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'pageCount',
      label: 'How many pages do you require?',
      type: 'text',
      placeholder: 'e.g. 5 pages — Homepage, About, Services, Portfolio, Contact',
    },
    {
      name: 'needsForms',
      label: 'Do you need online forms?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'needsEcommerce',
      label: 'Do you need e-commerce functionality?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'contentReady',
      label: 'Do you have website content ready?',
      type: 'select',
      options: ['Yes, fully ready', 'Partially ready', 'No — I need content help'],
    },
    {
      name: 'hasBrand',
      label: 'Do you have a logo and brand identity?',
      type: 'select',
      options: ['Yes', 'No', 'Logo only', 'Not sure'],
    },
    {
      name: 'referenceLinks',
      label: 'Do you have reference websites you like?',
      type: 'textarea',
      placeholder: 'Share links or describe what you like about them',
    },
    {
      name: 'needsMaintenance',
      label: 'Do you need ongoing website maintenance?',
      type: 'select',
      options: ['Yes', 'No', 'Maybe later'],
    },
  ],

  'graphic-design': [
    {
      name: 'designType',
      label: 'What design do you need?',
      type: 'text',
      placeholder: 'e.g. Logo, business card, flyer, social media post, banner',
    },
    {
      name: 'sizeFormat',
      label: 'What size or format is required?',
      type: 'text',
      placeholder: 'e.g. A4, 1080×1080px, business card 85×55mm',
    },
    {
      name: 'brandColours',
      label: 'Do you have brand colours?',
      type: 'select',
      options: [
        'Yes, I have a brand guide',
        'I have colours in mind',
        'No — I need colour suggestions',
      ],
    },
    {
      name: 'hasLogo',
      label: 'Do you already have a logo?',
      type: 'select',
      options: ['Yes', 'No', 'In progress'],
    },
    {
      name: 'useType',
      label: 'Is this for digital use, print use, or both?',
      type: 'select',
      options: ['Digital only', 'Print only', 'Both'],
    },
    {
      name: 'fileFormats',
      label: 'Do you need the design in specific file formats?',
      type: 'text',
      placeholder: 'e.g. PDF, PNG, EPS, AI — specify if required',
    },
    {
      name: 'designContent',
      label: 'What wording or content must appear on the design?',
      type: 'textarea',
      placeholder: 'Type the exact text, headings, contact details, taglines…',
    },
    {
      name: 'deadline',
      label: 'What is the deadline?',
      type: 'text',
      placeholder: 'e.g. End of the week, by 15 March',
    },
  ],

  'printing': [
    {
      name: 'printItem',
      label: 'What item must be printed?',
      type: 'text',
      placeholder: 'e.g. Business cards, banners, flyers, stickers, brochures',
    },
    {
      name: 'quantity',
      label: 'What quantity is required?',
      type: 'text',
      placeholder: 'e.g. 500 business cards, 2 roller banners',
    },
    {
      name: 'printSize',
      label: 'What size is needed?',
      type: 'text',
      placeholder: 'e.g. A5 flyer, 85×55mm business card, 1m×2m banner',
    },
    {
      name: 'materialPref',
      label: 'Do you have a paper or material preference?',
      type: 'text',
      placeholder: 'e.g. Gloss, matte, vinyl, canvas — or leave blank for recommendation',
    },
    {
      name: 'sides',
      label: 'Single-sided or double-sided?',
      type: 'select',
      options: ['Single-sided', 'Double-sided', 'Not sure'],
    },
    {
      name: 'finishing',
      label: 'Are there finishing requirements?',
      type: 'text',
      placeholder: 'e.g. Lamination, rounded corners, grommets, folding, perforations',
    },
    {
      name: 'hasArtwork',
      label: 'Do you already have print-ready artwork?',
      type: 'select',
      options: [
        'Yes, I have print-ready files',
        'No — I need design as well',
        'Partially ready',
      ],
    },
    {
      name: 'delivery',
      label: 'Do you need delivery or collection?',
      type: 'select',
      options: ['Delivery', 'Collection', 'Either works'],
    },
    {
      name: 'deadline',
      label: 'What is the deadline?',
      type: 'text',
      placeholder: 'e.g. By Friday, by end of month',
    },
  ],

  'marketing': [
    {
      name: 'marketingType',
      label: 'What marketing support do you need?',
      type: 'text',
      placeholder: 'e.g. Social media management, campaign artwork, strategy planning',
    },
    {
      name: 'promotion',
      label: 'What product, service or campaign are you promoting?',
      type: 'textarea',
      placeholder: 'Describe what you are promoting and the key message',
    },
    {
      name: 'targetAudience',
      label: 'Who is your target audience?',
      type: 'text',
      placeholder: 'e.g. Small business owners in Gauteng, age 25–45',
    },
    {
      name: 'platforms',
      label: 'Which platforms do you want to use?',
      type: 'text',
      placeholder: 'e.g. Facebook, Instagram, Google, LinkedIn, print',
    },
    {
      name: 'contentCreation',
      label: 'Do you need content creation?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'campaignArtwork',
      label: 'Do you need campaign artwork?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'hasBrandAssets',
      label: 'Do you already have brand assets?',
      type: 'select',
      options: ['Yes, full brand kit', 'Logo only', 'No assets yet'],
    },
    {
      name: 'campaignTimeline',
      label: 'What is the campaign timeline?',
      type: 'text',
      placeholder: 'e.g. Launch in 2 weeks, ongoing for 3 months',
    },
    {
      name: 'desiredResult',
      label: 'What result are you trying to achieve?',
      type: 'textarea',
      placeholder: 'e.g. More website traffic, social media growth, more sales leads',
    },
  ],

  'it-desktop-support': [
    {
      name: 'issueDescription',
      label: 'What IT issue or support do you need?',
      type: 'textarea',
      placeholder: 'Describe the problem or support requirement in as much detail as possible',
    },
    {
      name: 'deviceCount',
      label: 'How many computers or users need support?',
      type: 'text',
      placeholder: 'e.g. 1 laptop, 5 desktop users',
    },
    {
      name: 'supportType',
      label: 'What type of support is needed?',
      type: 'text',
      placeholder: 'e.g. Laptop — Windows 11, email setup on Outlook, printer on network',
    },
    {
      name: 'supportMode',
      label: 'Do you need remote, on-site or both?',
      type: 'select',
      options: ['Remote support', 'On-site support', 'Both', 'Not sure'],
    },
    {
      name: 'osOrSoftware',
      label: 'What operating system or software is involved?',
      type: 'text',
      placeholder: 'e.g. Windows 10, Microsoft 365, QuickBooks',
    },
    {
      name: 'isUrgent',
      label: 'Is this urgent?',
      type: 'select',
      options: ['Yes — urgent', 'No — can be scheduled', 'Not sure'],
    },
    {
      name: 'issueBefore',
      label: 'Have you experienced this issue before?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'needsOngoing',
      label: 'Do you need ongoing maintenance support?',
      type: 'select',
      options: ['Yes', 'No', 'Maybe later'],
    },
  ],

  'software-development': [
    {
      name: 'problemToSolve',
      label: 'What problem should the system solve?',
      type: 'textarea',
      placeholder: 'Describe the business challenge or process you want to improve',
    },
    {
      name: 'systemUsers',
      label: 'Who will use the system?',
      type: 'text',
      placeholder: 'e.g. Internal staff only, clients, both, management dashboard',
    },
    {
      name: 'requiredFeatures',
      label: 'What features are required?',
      type: 'textarea',
      placeholder: 'List the key features — e.g. job cards, invoicing, client portal, reporting',
    },
    {
      name: 'needsLogin',
      label: 'Do users need to log in?',
      type: 'select',
      options: ['Yes', 'No', 'Multiple user levels'],
    },
    {
      name: 'needsReports',
      label: 'Are reports or dashboards required?',
      type: 'select',
      options: ['Yes', 'No', 'Not sure'],
    },
    {
      name: 'integrations',
      label: 'Are integrations required?',
      type: 'text',
      placeholder: 'e.g. Xero, QuickBooks, Shopify, WhatsApp API, payment gateway',
    },
    {
      name: 'currentSystem',
      label: 'Do you have a current system in place?',
      type: 'select',
      options: [
        'Yes — needs to be replaced',
        'Yes — needs improvement',
        'No current system',
      ],
    },
    {
      name: 'systemType',
      label: 'What type of system do you need?',
      type: 'select',
      options: [
        'Client portal',
        'Admin dashboard',
        'Booking system',
        'Workflow / job management tool',
        'E-commerce platform',
        'Data management system',
        'Other',
      ],
    },
    {
      name: 'dataManaged',
      label: 'What information or data must the system manage?',
      type: 'textarea',
      placeholder: 'e.g. Customer records, job cards, stock, appointments, invoices',
    },
    {
      name: 'devTimeline',
      label: 'What is the expected project timeline?',
      type: 'text',
      placeholder: 'e.g. 3 months, by year-end, phased over 6 months',
    },
  ],

  'motion-graphics': [
    {
      name: 'motionType',
      label: 'What type of motion graphic do you need?',
      type: 'select',
      options: [
        'Animated advert',
        'Logo animation',
        'Explainer video',
        'Social media video',
        'Presentation animation',
        'Event visual',
        'Other',
      ],
    },
    {
      name: 'message',
      label: 'What message must the animation communicate?',
      type: 'textarea',
      placeholder: 'Describe the key message, story or call to action',
    },
    {
      name: 'hasScript',
      label: 'Do you have a script or concept?',
      type: 'select',
      options: [
        'Yes, fully scripted',
        'Rough concept only',
        'No — I need help with the concept',
      ],
    },
    {
      name: 'hasBrandAssets',
      label: 'Do you have brand assets, logo or design files?',
      type: 'select',
      options: ['Yes, full brand kit', 'Logo only', 'No — brand assets needed too'],
    },
    {
      name: 'animationLength',
      label: 'What length should the animation be?',
      type: 'text',
      placeholder: 'e.g. 15 seconds, 30 seconds, 1 minute',
    },
    {
      name: 'platform',
      label: 'Which platform will it be used on?',
      type: 'text',
      placeholder: 'e.g. Facebook, Instagram Reels, YouTube, website, TV screen',
    },
    {
      name: 'audio',
      label: 'Do you need voice-over, music or sound effects?',
      type: 'select',
      options: [
        'Voice-over only',
        'Music only',
        'Both voice-over and music',
        'Sound effects',
        'No audio needed',
        'Not sure',
      ],
    },
    {
      name: 'deadline',
      label: 'What is the deadline?',
      type: 'text',
      placeholder: 'e.g. By end of next week, for an event on 20 April',
    },
  ],

  'it-consulting': [
    {
      name: 'challenge',
      label: 'What technology challenge do you need advice on?',
      type: 'textarea',
      placeholder: 'Describe the challenge or decision you need help with',
    },
    {
      name: 'businessType',
      label: 'What type of business or organisation is this for?',
      type: 'text',
      placeholder: 'e.g. Retail, professional services, construction, non-profit',
    },
    {
      name: 'helpAreas',
      label: 'Which areas do you need help with?',
      type: 'textarea',
      placeholder:
        'e.g. systems, software, websites, email, cloud, IT support, digital transformation',
    },
    {
      name: 'currentPainPoints',
      label: 'What is currently not working well?',
      type: 'textarea',
      placeholder: 'Describe current pain points, gaps or frustrations',
    },
    {
      name: 'desiredOutcome',
      label: 'What outcome do you want to achieve?',
      type: 'textarea',
      placeholder:
        'Describe the ideal result — e.g. faster workflows, lower IT costs, better systems',
    },
    {
      name: 'hasExistingTools',
      label: 'Do you already have existing tools or systems in place?',
      type: 'select',
      options: ['Yes', 'No', 'Partially'],
    },
    {
      name: 'supportType',
      label: 'What type of support do you need?',
      type: 'select',
      options: [
        'Recommendations only',
        'Planning',
        'Implementation support',
        'Ongoing guidance',
        'All of the above',
      ],
    },
    {
      name: 'consultTimeline',
      label: 'What is your ideal timeline?',
      type: 'text',
      placeholder: 'e.g. Start immediately, within next quarter, by year-end',
    },
  ],
}
