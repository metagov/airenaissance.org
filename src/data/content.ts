import manifest from "./manifest.json";

const files = manifest as unknown as Record<string, string> & {
  memories: { src: string; caption: string }[];
};

export const applyUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdexJMhBCMGnajEno9F0FmNZSgRYGi6NfZEoY7E8KfMnsaxJg/viewform";

export const applicationsUrl = "https://forms.gle/56YXMGVxi28QTi4S6";

export const questionsUrl =
  "https://docs.google.com/document/d/1gClW8lc1Md4krKAbwZCt27TiSDFsqlZyG_x3fNhvNuE/edit?usp=sharing";

export const sponsorMail =
  "mailto:josh@metagov.org?cc=nvincent%40sfu.ca%2C%20akrasodomski%40chathamhouse.org&subject=AI%20Palace%20Sponsor%20Inquiry";

export const organizerMail =
  "mailto:josh@metagov.org?cc=akrasodomski%40chathamhouse.org&subject=AI%20Renaissance%20Sponsorship%20Inquiry";

export const openCollective = "https://opencollective.com/metagov/projects/airenaissance";

const attendees =
  "Previous years of AI Renaissance have been attended by many leading researchers, technologists, entrepreneurs, artists, and policymakers in AI, including ones from the HuggingFace, Anthropic, Google DeepMind, the European Parliament, ELLIS, LAION, Oxford, Stanford, Harvard, as well as the leadership of many civil society groups such as Creative Commons, the Collective Intelligence Project, Foresight Institute, Future of Life Institute, Public Knowledge, and so on.";

export const home = {
  hero: files.hero,
  welcome: "Welcome to the AI renaissance",
  introTitle: "Get lost in the past to incubate ideas for the future.",
  intro:
    "Join a small, curated group of researchers, builders, entrepreneurs, politicians, and artists for a 10-day unconference focused on the political economy of AI. We will build new infrastructure, business models, and institutions for AI.",
  facts: [
    ["Dates", "June 14-24, 2026"],
    ["Location", "Bückeburg Palace, Germany (1 hour outside of Hanover)"],
    ["Style", "unconference"],
    ["Number of attendees", "~35"],
    ["Costs", "None, accommodation and food included"],
  ],
  grid: [files["grid-1"], files["grid-2"], files["grid-3"], files["grid-4"], files["grid-5"], files["grid-6"]],
  questions: [
    "What are the new (and old) business models of AI?",
    "What would it look like to open-source or decentralize layers of the AI stack?",
    "What new institutions will shape the future of the AI industry?",
  ],
  questionsBody:
    "During the 10-day residency we will probe these and other questions, challenging each other’s assumptions and our own assumptions. We’ll debate guidelines, philosophies, business models, and standards. We might even build prototypes, write white papers, and launch new companies.",
  joinImage: files.join,
  joinDate: "June 14-24, 2026",
  joinNote: "Feel free to DM one of us (see below) and tell us why this event can’t happen without you!",
  team: [
    {
      name: "Joshua Tan",
      role: "Monk of many worlds",
      bio: "Math+CS, public AI, founder Metagov",
      image: files.joshua,
      url: "https://www.joshuatan.com/",
    },
    {
      name: "Donatus (Teddy) Schaumburg-Lippe",
      role: "Dauphin de AI",
      bio: "Activator of projects, House of Schaumburg-Lippe, founder AIR",
      image: files.teddy,
      url: "https://medium.com/@the-diplomat",
    },
    {
      name: "Primavera di Filippi",
      role: "Wizard of vibes",
      bio: "Extitutional being, legal hacker & artist, permanent researcher CNRS + Harvard",
      image: files.primavera,
      url: "https://pdefilippi.com/",
    },
    {
      name: "Nick Vincent",
      role: "Leversmith",
      bio: "Professor of data pipelines; building levers so we can all copilot AI",
      image: files.nick,
      url: "https://nickmvincent.com/",
    },
    {
      name: "Alex Krasodomski",
      role: "Dark chancellor",
      bio: "Government whisperer, tech policy director at Chatham House",
      image: files.alex,
      url: "https://www.chathamhouse.org/about-us/our-people/alex-krasodomski",
    },
    {
      name: "Tony Lai",
      role: "Co-founder, LawGives",
      bio: "Legal technologist, fellow at CodeX",
      image: files.tony,
      url: "https://tonygives.github.io/",
    },
  ],
  locationImage: files.location,
  location: [
    "Built over 700 years ago, the Bueckeburg Palace in Germany still serves as the home for the royal family of Schaumburg-Lippe, once reigning princes over the small sovereign state of the same name.",
    "Throughout the years, it has hosted artists, dictators, rebels, scientists, entrepreneurs, and several historical figures including Napoleon Bonaparte, Kaiser Wilhelm the Second, and Mikhael Gorbachev.",
    "Through war and peace, through revolutions political and technological, it has served as a reminder that history is ever-changing and that power is meant to be challenged.",
  ],
  memories: files.memories,
};

export const sponsor = {
  hero: files.hero,
  lede: [
    "AI Renaissance is a 10-day unconference focused on the political economy of AI. We foster deep relationships, build open-source infrastructure, and brainstorm new institutions and business models for the AI economy. It takes place every year at Bückeburg Palace, Germany, just an hour outside of Hanover.",
    "Who’s been here: Previous years have brought together researchers from HuggingFace, Anthropic, Mila, Oxford, and Stanford alongside policymakers from the Bundestag and the European Parliament, and leadership from civil society organizations like the Bertelsmann Foundation, Future of Life Institute, Chatham House, and the Collective Intelligence Project. For 10 days, you are working directly with the people actively shaping AI in the world.",
    "Sponsoring AIR: As an event conceived and organized for the public benefit, AI Renaissance is only possible with the support of sponsors. Sponsorship and participation can be an excellent value for companies, foundations, and investors that benefit from (or want to explore the benefits of) open source, decentralized, and public AI. Previous sponsors have ranged from government agencies to large tech companies to individual investors. Note that only a limited number of sponsorships are available each year, based on the number of available VIP rooms.",
  ],
  packages: [
    {
      name: "Patron",
      price: "1500 euros.",
      summary: "Join us in the palace for an incredible week of conversations, food, and play. Benefits include:",
      image: files.patron,
      cta: { label: "Give on Open Collective", href: openCollective },
      benefits: [
        {
          title: "Guaranteed ticket",
          body: `A guaranteed ticket for yourself or a person of your choosing. ${attendees}`,
        },
        {
          title: "Bed reservation",
          body: "A reserved standard bed in the palace for the entire duration of the event, valued at over 1500 euros.",
        },
        {
          title: "Michelin-starred meals",
          body: "Each ticket guarantees you 3 meals a day for the duration of the event prepared by our Michelin-trained private chefs.",
        },
        {
          title: "Acknowledgements",
          body: "We’ll express our gratitude on our website and promotional materials.",
        },
      ],
    },
    {
      name: "Villa",
      price: "5000 euros.",
      summary: "Bring your collaborators, and sleep like Napoleon Bonaparte. Benefits include:",
      image: files.villa,
      cta: { label: "Contact us to learn more", href: sponsorMail },
      benefits: [
        {
          title: "One VIP ticket, one guest ticket",
          body: `One VIP ticket, plus one Patron tickets for an additional guest or collaborator. ${attendees}`,
        },
        {
          title: "VIP room reservation",
          body: "Your own luxurious room in the palace for the duration of the event. Previous occupants include Napoleon Bonaparte, Kaiser Wilhelm II, and Mikhail Gorbachev.",
        },
        {
          title: "Michelin-starred meals",
          body: "Each ticket guarantees you 3 meals a day for the duration of the event prepared by our Michelin-trained private chefs.",
        },
        {
          title: "Dedicated workshop or talk",
          body: "We will organize a dedicated workshop or talk on a subject of your choosing at AI Renaissance.",
        },
        {
          title: "Acknowledgements",
          body: "We’ll express our gratitude on our website, all official communications, and on social media.",
        },
        {
          title: "Sponsored dinner",
          body: "One of the dinners will be officially acknowledged as sponsored by you.",
        },
        {
          title: "Charitable tax deduction",
          body: "Sponsorship qualifies as a charitable donation to Metagov, a 501c3 nonprofit in the USA.",
        },
      ],
    },
    {
      name: "Palace",
      price: "15000 euros.",
      summary:
        "Palace-level sponsors work with us to shape AI Renaissance as a whole. It often doubles as an all-inclusive small company retreat or engineering sprint. Benefits include:",
      image: files.palace,
      cta: { label: "Contact us to learn more", href: sponsorMail },
      benefits: [
        {
          title: "Two Villa packages",
          body: "Including tickets, nominations, VIP rooms, meals, and sponsored dinner.",
        },
        {
          title: 'Project "roast"',
          body: "A roast by the other workshop participants on a project or proposal of your choosing. Very popular.",
        },
        {
          title: "Dedicated workshop day",
          body: "In addition to two dedicated workshops, a set-aside day during the week to discuss topics relevant to you, along with organizer support to make it happen.",
        },
        {
          title: "Post-workshop deliverable",
          body: "The organizers will work with select attendees to generate a pre-agreed deliverable (e.g. a working paper, a policy memo, or shared dataset) from the workshop, so that your investment creates tangible outcomes.",
        },
        {
          title: "Curation support",
          body: "We’ll help you curate additional invitees and topics, including dedicated time by the AI Renaissance organizers.",
        },
        {
          title: "Charitable tax deduction",
          body: "Sponsorship qualifies as a charitable donation to Metagov, a 501c3 nonprofit in the USA.",
        },
      ],
    },
    {
      name: "Founder",
      price: "???",
      summary: "For organizations that give two or more years in a row at any level.",
      image: files.founder,
      cta: { label: "Contact us to learn more", href: sponsorMail },
      benefits: [
        { title: "Priority room selection", body: "Pick your room!" },
        {
          title: "Early invitee curation",
          body: "Work with the organizers to nominate and select early invitees.",
        },
        {
          title: "Acknowledgements",
          body: "We’ll express our gratitude on our website, all official communications, and on social media.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "When and where is AI Renaissance?",
      a: "It takes place every year at Bückeburg Palace, Germany, just an hour outside of Hanover. This year, AI Renaissance will run for 10 days from August 1-10.",
    },
    {
      q: "Is my sponsorship tax-deductible?",
      a: "All sponsorships are tax deductible as charitable donations to Metagov, a 501c3 nonprofit in the US.",
    },
    {
      q: "Who attends the event?",
      a: attendees.replace("AI Renaissance have", "the event have"),
    },
    {
      q: "Who has sponsored before?",
      a: "Sponsors from previous years have included the National Science Foundation, Current AI, HuggingFace, Metagov, Metaculus, the Center for Cultural Innovation, Viki Jan, BlockScience, Delphia, ID Theory, Ceramic/3Box, and Seed Club.",
    },
    {
      q: "Who organizes AI Renaissance?",
      a: "AI Renaissance is organized by Metagov, a 501c3 nonprofit in the USA, and supported by Chatham House and the royal family of Schaumburg-Lippe.",
    },
  ],
  sponsors: [
    ["National Science Foundation", "https://www.nsf.gov/"],
    ["Current AI", "https://currentai.org/"],
    ["HuggingFace", "https://huggingface.co/"],
    ["Metagov", "https://metagov.org/"],
    ["Center for Cultural Innovation", "https://cciarts.org/"],
    ["BlockScience", "https://blockscience.com/"],
    ["Delphia", "https://delphia.com/"],
    ["ID Theory", "https://idtheory.io/"],
    ["Ceramic", "https://ceramic.network/"],
    ["Seed Club", "https://www.seedclub.xyz/"],
  ] as const,
  gallery: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => files[`sponsor-${n}`]),
  quotes: [
    "One of the most generative events I’ve ever attended",
    "An eternal brainstorming event",
    "Brings together a mix of artists, creators, developers, and thinkers that I almost never see together",
    "Where we developed a new language for institutional change",
    "Planted the seeds for new projects and collaborations",
  ],
};
