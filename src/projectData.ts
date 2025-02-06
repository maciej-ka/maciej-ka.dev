type Project = {
  name: string
  company: string
  start: Date
  /**
   * Month which had the last day of work.
   * 2024-12 is like saying contract ended on December
   * 31th is most likely the last day of that contract.
   */
  end?: Date

  description: string
  link?: string
  /** Is a side project, a smaller project. */
  side?: boolean
  remote?: boolean
  form: "contractor" | "freelancer" | "employee"
  softwareHouse?: string
  /** Team size, including myself. */
  team: number

  title: string
  lead?: boolean
  area:
    | "backend"
    | "frontend"
    | "fullstack"
    | "analysis"
    | "mobile"
    | "management"
  skills: string[]
}

const projectData: Project[] = [
  /**
   * Yousty
   */
  {
    name: "Yousty",
    company: "Yousty",
    start: new Date("2024-11"),
    end: new Date("2024-12"),

    description:
      "Portal to find matching apprencieships for Switzerland students",
    link: "https://www.yousty.ch/de-CH",
    remote: true,
    form: "contractor",
    softwareHouse: "Useo",
    team: 7,

    title: "Senior Frontend Developer",
    area: "frontend",
    skills: [
      "Atomic design",
      "CSS",
      "JavaScript",
      "Next.js",
      "React",
      "Sass",
      "Server Components",
      "Storybook",
      "Typescript",
      "Vercel Dashboard",
      "Zustand",
    ],
  },

  /**
   * Zamics
   */
  {
    name: "Zamics",
    company: "Zeppelin Labs",
    start: new Date("2021-06"),
    end: new Date("2021-12"),

    description:
      "App to run construction site warehouse using RFID and QR codes",
    side: true,
    link: "https://zamics.de/en/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 3,

    title: "Mobile Web Developer",
    area: "frontend",
    skills: [
      "Android",
      "CSS",
      "Docker",
      "JavaScript",
      "QR Code",
      "RFID",
      "Vue",
      "Vuex",
    ],
  },

  /**
   * AEC View
   */
  {
    name: "AEC.View",
    company: "Zeppelin Power Systems",
    start: new Date("2020-02"),
    end: new Date("2024-07"),

    description:
      "Software to track position and status of corporate vessel fleets",
    link: "https://www.zeppelin-powersystems.com/de/en/solutions/digital-solutions/aec-view/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 4,

    title: "Lead Fullstack Developer",
    lead: true,
    area: "fullstack",
    skills: [
      "AWS",
      "CSS",
      "Cypress",
      "Docker",
      "Express",
      "JavaScript",
      "Jest",
      "Knex.js",
      "Node.js",
      "PostgreSQL",
      "React",
      "Redux",
      "SQL",
      "Styleguidist",
      "Typescript",
    ],
  },

  /**
   * Klickrent
   */
  {
    name: "Klickrent",
    company: "Klickrent",
    start: new Date("2019-05"),
    end: new Date("2020-01"),

    description: "Portal to order big construction machines",
    link: "https://www.klickrent.de/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 4,

    title: "Senior Frontend Developer",
    area: "frontend",
    skills: [
      "CSS",
      "JavaScript",
      "Next.js",
      "Sass",
      "Typescript",
      "Vue",
      "Vuex",
    ],
  },

  /**
   * Smart City
   */
  {
    name: "Smart City",
    company: "Deutche Telekom",
    start: new Date("2018-11"),
    end: new Date("2019-02"),

    description: "Dashboard with city statistics",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 2,

    title: "Lead Frontend Developer",
    lead: true,
    area: "frontend",
    skills: [
      "CSS",
      "Cypress",
      "JavaScript",
      "Jest",
      "React",
      "Redux",
      "Styleguidist",
    ],
  },

  /**
   * Nordex
   */
  {
    name: "Nordex",
    company: "Nordex",
    start: new Date("2018-10"),
    end: new Date("2018-11"),

    description: "Web app for monitoring large wind farms",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 2,

    title: "Analyst",
    area: "analysis",
    skills: ["UI design", "Sketch"],
  },

  /**
   * Globalmatix
   */
  {
    name: "Globalmatix",
    company: "Globalmatix",
    start: new Date("2018-08"),
    end: new Date("2024-10"),

    description: "Utility to manage reporting devices installed in cars",
    side: true,
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 1,

    title: "Frontend Developer",
    area: "frontend",
    skills: [
      "AWS",
      "Amplify",
      "Apollo",
      "Appsync",
      "CSS",
      "Can Bus",
      "Cypress",
      "GraphQL",
      "JavaScript",
      "Jest",
      "Kibana",
      "React",
      "Redux",
      "Sketch",
      "Styleguidist",
      "UI design",
      "WSO2",
    ],
  },

  /**
   * Immmr Frontend
   */
  {
    name: "Immmr",
    company: "Deutsche Telekom",
    start: new Date("2016-12"),
    end: new Date("2018-07"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 8,

    title: "Frontend Developer",
    area: "frontend",
    skills: [
      "Babel",
      "CSS",
      "CouchDB",
      "ES6",
      "Enzyme",
      "JSX",
      "JavaScript",
      "Mocha",
      "Next.js",
      "NoSQL",
      "React",
      "Redux",
      "Webpack",
    ],
  },

  /**
   * Immmr Backend
   */
  {
    name: "Immmr",
    company: "Deutsche Telekom",
    start: new Date("2016-08"),
    end: new Date("2016-11"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 6,

    title: "Backend Developer",
    area: "fullstack",
    skills: [
      "CSS",
      "JavaScript",
      "Kibana",
      "Microservices",
      "PayPal",
      "PostgreSQL",
      "Rabbit",
      "Rails",
      "Rspec",
      "Ruby",
      "SQL",
    ],
  },

  /**
   * IFAB
   */
  {
    name: "IFAB",
    company: "FIFA",
    start: new Date("2016-01"),
    end: new Date("2016-05"),

    description: "Portal about football rules",
    link: "theifab.com",
    remote: true,
    form: "contractor",
    softwareHouse: "Me & My Friends",
    team: 2,

    title: "Lead Developer",
    lead: true,
    area: "fullstack",
    skills: [
      "Angular",
      "Bootstrap",
      "CoffeeScript",
      "CSS animations",
      "CSS",
      "Elasticsearch",
      "Gradle",
      "gulp",
      "Hibernate",
      "Jade",
      "Java",
      "JavaScript",
      "PostgreSQL",
      "Responsive Design",
      "Sass",
      "Spring",
      "SQL",
      "UML",
    ],
  },

  /**
   * DSO, Apax
   */
  {
    name: "DSO",
    company: "Apax",
    start: new Date("2015-12"),
    end: new Date("2015-12"),

    description: "Prototype of online analytics services",
    remote: true,
    form: "freelancer",
    team: 1,

    title: "Web Developer",
    area: "fullstack",
    skills: [
      "Bootstrap",
      "Capistrano",
      "Capybara",
      "CoffeeScript",
      "CSS animations",
      "CSS",
      "Ember",
      "Haml",
      "JavaScript",
      "Minitest",
      "PostgreSQL",
      "Rails",
      "Ruby",
      "Sass",
      "Selenium",
      "SQL",
      "UI design",
      "UML",
    ],
  },

  /**
   * SAWP, Duplikaty
   */
  {
    name: "Duplikaty",
    company: "SAWP",
    start: new Date("2015-11"),
    end: new Date("2015-11"),

    description: "Utility application to merge database duplicates",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

    title: "Web Developer",
    area: "fullstack",
    skills: [
      "Capybara",
      "CoffeeScript",
      "CSS",
      "Ember",
      "Haml",
      "JavaScript",
      "Minitest",
      "PostgreSQL",
      "Rails",
      "Ruby",
      "Sass",
      "Selenium",
      "SQL",
      "UI design",
      "UML",
    ],
  },

  /**
   * the Incrediblest
   */
  {
    name: "the Incrediblest",
    company: "Motabi",
    start: new Date("2015-10"),
    end: new Date("2015-10"),

    description: "A TODO planner",
    remote: true,
    form: "freelancer",
    team: 1,

    title: "Web Developer",
    area: "backend",
    skills: ["Capybara", "Minitest", "PayPal", "Rails", "Ruby", "Selenium"],
  },

  /**
   * SAWP, SDEG
   */
  {
    name: "SDEG",
    company: "SAWP",
    start: new Date("2015-08"),
    end: new Date("2015-09"),

    description: "Document workflow for exchanging artist royalties",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

    title: "Web Developer",
    area: "fullstack",
    skills: [
      "Ruby",
      "Rails",
      "RSpec",
      "Capybara",
      "Selenium",
      "Angular",
      "JavaScript",
      "CoffeeScript",
      "Haml",
      "Sass",
      "CSS",
      "PostgreSQL",
      "UML",
      "SQL",
      "UI design",
    ],
  },

  /**
   * Motabi Intelligence
   */
  {
    name: "Motabi Intelligence",
    company: "Motabi",
    start: new Date("2015-05"),
    end: new Date("2015-07"),

    description: "Panel to configure reports with charts and datasources",
    remote: true,
    form: "freelancer",
    team: 1,

    title: "Web Developer",
    area: "fullstack",
    skills: [
      "Angular",
      "Capybara",
      "CoffeeScript",
      "CSS animations",
      "CSS",
      "Haml",
      "JavaScript",
      "PostgreSQL",
      "Rails",
      "RSpec",
      "Ruby",
      "Sass",
      "Selenium",
      "SQL",
      "UML",
    ],
  },

  /**
   * Cert
   */
  {
    name: "CERT",
    company: "Orange Polska",
    start: new Date("2015-01"),
    end: new Date("2015-04"),

    description: "Portal with member zone reports",
    link: "cert.orange.pl",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

    title: "Web developer",
    area: "backend",
    skills: [
      "Capistrano",
      "Capybara",
      "Haml",
      "PostgreSQL",
      "Rails",
      "RSpec",
      "Ruby",
      "SOAP",
      "SQL",
      "UML",
    ],
  },

  /**
   * Logneto
   */
  {
    name: "Logneto",
    company: "DMT",
    start: new Date("2014-06"),
    end: new Date("2014-12"),

    description: "Warehouse solution for eCommerce",
    remote: true,
    form: "employee",
    softwareHouse: "Hemnes",
    team: 3,

    title: "Software Developer",
    lead: true,
    area: "fullstack",
    skills: [
      "Bootstrap",
      "Capistrano",
      "Capybara",
      "CSS",
      "Haml",
      "PostgreSQL",
      "Rails",
      "RSpec",
      "Ruby",
      "SOAP",
      "SQL",
      "UI design",
      "UML",
    ],
  },

  /**
   * Personal Lawyers
   */
  {
    name: "Personal Lawyers",
    company: "Juszkiewicz Lawyers",
    start: new Date("2014-05"),
    end: new Date("2014-05"),

    description: "Messanger for office and its customers",
    form: "employee",
    softwareHouse: "Hemnes",
    team: 2,

    title: "Software Developer",
    lead: true,
    area: "backend",
    skills: [
      "Capistrano",
      "Capybara",
      "Haml",
      "Rails",
      "RSpec",
      "Ruby",
      "UI design",
    ],
  },

  /**
   * Top market commercials player
   */
  {
    name: "Commercials player",
    company: "Top Market",
    start: new Date("2014-03"),
    end: new Date("2014-04"),

    description: "Supermarket commercial player for Raspberry Pi",
    form: "employee",
    softwareHouse: "Hemnes",
    team: 1,

    title: "Software Developer",
    area: "backend",
    skills: [
      "Capistrano",
      "Capybara",
      "Haml",
      "Rails",
      "Raspberry Pi",
      "RSpec",
      "Ruby",
    ],
  },

  /**
   * Punktożercy
   */
  {
    name: "Punktożercy",
    company: "Top Market",
    start: new Date("2013-12"),
    end: new Date("2014-02"),

    description: "Loyalty points shop",
    form: "employee",
    softwareHouse: "Hemnes",
    team: 2,

    title: "Software Developer",
    lead: true,
    area: "backend",
    skills: [
      "Capistrano",
      "Capybara",
      "Haml",
      "PostgreSQL",
      "Rails",
      "RSpec",
      "Ruby",
      "SQL",
      "UML",
    ],
  },

  /**
   * Bluewhite
   */
  {
    name: "Bluewhite",
    company: "One99",
    start: new Date("2013-10"),
    end: new Date("2013-11"),

    description: "Doctor's appointment bookings",
    form: "employee",
    softwareHouse: "Beside the Park",
    team: 4,

    title: "Web developer",
    area: "backend",
    skills: ["Haml", "MySQL", "Rails", "Ruby", "SQL"],
  },

  /**
   * Guarantees Box
   */
  {
    name: "Guarantees box",
    company: "Guarantees Box",
    start: new Date("2013-07"),
    end: new Date("2013-09"),

    description: "Service to store digitalized receipts",
    form: "employee",
    softwareHouse: "Beside the Park",
    team: 4,

    title: "Web developer",
    area: "backend",
    skills: ["Haml", "MySQL", "Rails", "Ruby", "SQL"],
  },

  /**
   * Induction game
   */
  {
    name: "Induction game",
    company: "Mondelēz International",
    start: new Date("2013-01"),
    end: new Date("2013-05"),

    description: "Guide for new workers of company",
    remote: true,
    form: "employee",
    softwareHouse: "Pracownia Gier Szkoleniowych",
    team: 2,

    title: "Lead web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "JavaScript",
      "jQuery",
      "JS animations",
      "MySQL",
      "Rails",
      "RSpec",
      "Ruby",
      "SQL",
      "UI design",
    ],
  },

  /**
   * Scott Wilson
   */
  {
    name: "Document database",
    company: "Scott Wilson",
    start: new Date("2011-06"),
    end: new Date("2011-10"),

    description: "Documents storage with advanced search",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 1,

    title: "Web developer",
    area: "fullstack",
    skills: [
      "Doctrine",
      "JavaScript",
      "jQuery",
      "JS animations",
      "Lucene",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
      "UI design",
    ],
  },

  /**
   * Podręczniki na poczcie
   */
  {
    name: "Podręczniki na poczcie",
    company: "Polish Post Offices",
    start: new Date("2011-02"),
    end: new Date("2011-05"),

    description: "Purchase order system for post office.",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 1,

    title: "Web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "Doctrine",
      "JavaScript",
      "jQuery",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
      "UI design",
    ],
  },

  /**
   * Burda media
   */
  {
    name: "Prerelease surveys",
    company: "Burda International Polska",
    start: new Date("2010-11"),
    end: new Date("2011-01"),

    description: "System to vote on upcoming issue content",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 2,

    title: "Lead web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "Doctrine",
      "JavaScript",
      "jQuery",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
      "UI design",
    ],
  },

  /**
   * Open'er
   */
  {
    name: "Open'er app",
    company: "Heineken",
    start: new Date("2010-07"),
    end: new Date("2010-10"),

    description: "Music festival android app",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 3,

    title: "Mobile developer",
    area: "mobile",
    skills: ["Android", "Java"],
  },

  /**
   * Myslovitz
   */
  {
    name: "Myslovitz app",
    company: "Myslovitz",
    start: new Date("2010-03"),
    end: new Date("2010-06"),

    description: "Music band android app",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 3,

    title: "Mobile developer",
    area: "mobile",
    skills: ["Android", "Java"],
  },

  /**
   * Business Talents
   */
  {
    name: "Business Talents",
    company: "Business Talents",
    start: new Date("2009-12"),
    end: new Date("2010-02"),

    description: "Webpage and custom CMS",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 2,

    title: "Web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "Doctrine",
      "JavaScript",
      "jQuery",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
    ],
  },

  /**
   * EPL group contenst
   */
  {
    name: "Facebook contest app",
    company: "EPL Group",
    start: new Date("2009-09"),
    end: new Date("2009-11"),

    description: "Internship in the EU contest app on Facebook",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 1,

    title: "Web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "Doctrine",
      "Facebook API",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
    ],
  },

  /**
   * EUCE music
   */
  {
    name: "EUCE music",
    company: "Centrum Krzysztofa Pendereckiego",
    start: new Date("2009-05"),
    end: new Date("2009-08"),

    description: "Portal and custom CMS",
    form: "employee",
    softwareHouse: "High Quality Solutions",
    team: 2,

    title: "Web developer",
    area: "fullstack",
    skills: [
      "CSS",
      "Doctrine",
      "JavaScript",
      "jQuery",
      "MySQL",
      "PHP",
      "SQL",
      "Symfony",
    ],
  },

  /**
   * Job postings scrapper
   */
  {
    name: "Job offers crawler",
    company: "Gemius",
    start: new Date("2009-02"),
    end: new Date("2009-04"),

    description: "Tool to crawl, scrap and process online job postings",
    form: "employee",
    team: 1,

    title: "Software Developer",
    area: "backend",
    skills: ["Python"],
  },

  /**
   * ExtJs
   */
  {
    name: "Database Interface",
    company: "Gemius",
    start: new Date("2008-11"),
    end: new Date("2009-01"),

    description: "Modernisation of graphical interface for database warehouse",
    form: "employee",
    team: 1,

    title: "Software Developer",
    area: "frontend",
    skills: ["ExtJS", "JavaScript"],
  },

  /**
   * Mantis
   */
  {
    name: "Bug tracker",
    company: "Gemius",
    start: new Date("2008-09"),
    end: new Date("2008-10"),

    description: "Customization of Mantis bug tracker",
    form: "employee",
    team: 1,

    title: "Software Developer",
    area: "fullstack",
    skills: ["PHP", "CSS"],
  },

  /**
   * Orange
   */
  {
    name: "Software analysis",
    company: "Orange Polska",
    start: new Date("2008-04"),
    end: new Date("2008-08"),

    description: "ERP changes and migrating accounting schema",
    form: "employee",
    team: 5,

    title: "Analyst",
    area: "analysis",
    skills: ["Oracle", "PL/SQL", "SQL", "UML"],
  },

  /**
   * Armir
   */
  {
    name: "IACS",
    company: "ARiMR",
    start: new Date("2008-01"),
    end: new Date("2008-03"),

    description: "Changes in EU system to finance agriculture",
    form: "employee",
    softwareHouse: "ABG Spin",
    team: 1,

    title: "Analyst",
    area: "analysis",
    skills: ["Oracle", "PL/SQL", "SQL", "UML"],
  },

  /**
   * Project Management
   */
  {
    name: "Project management",
    company: "Software Business Group",
    start: new Date("2007-02"),
    end: new Date("2007-12"),

    description: "Projects for Polish Television, Feuvert and Wasa-Barilla",
    form: "employee",
    softwareHouse: "Software Business Group",
    team: 5,

    title: "Project Manager",
    area: "management",
    skills: [],
  },

  /**
   * P2P computations
   */
  {
    name: "P2P computations",
    company: "PJWSTK employee",
    start: new Date("2007-01"),
    end: new Date("2007-01"),

    description: "Framework to run scripts in Peer to Peer grid",
    form: "freelancer",
    remote: true,
    team: 1,

    title: "Software Developer",
    skills: ["Java"],
    area: "backend",
  },

  /**
   * Joko ERP
   */
  {
    name: "ERP",
    company: "JOKO Cosmetics",
    start: new Date("2006-02"),
    end: new Date("2006-12"),

    description:
      "Warehouse, orders and an evolutionary algorithm for production planning",
    form: "employee",
    softwareHouse: "Software Business Group",
    team: 6,

    title: "Software Architect",
    area: "backend",
    skills: ["UML", "Java"],
  },

  /**
   * CMS deployments
   */
  {
    name: "CMS deployments",
    company: "Milch und Zucker",
    start: new Date("2005-12"),
    end: new Date("2006-01"),

    description: "Rewrite of a deployment engine in Milch und Zucker CMS",
    form: "employee",
    softwareHouse: "Software Business Group",
    team: 2,

    title: "Software Architect",
    area: "backend",
    skills: ["PHP", "SQL", "MySQL"],
  },

  /**
   * Ministry of Environment
   */
  {
    name: "Projects database",
    company: "Ministry of Environment",
    start: new Date("2005-09"),
    end: new Date("2005-11"),

    description: "Interactive map to describe ministry projects",
    form: "employee",
    softwareHouse: "Software Business Group",
    team: 2,

    title: "Web Developer",
    area: "backend",
    skills: ["MySQL", "PHP", "SQL"],
  },

  /**
   * XY statistics
   */
  {
    name: "XY statistics",
    company: "Milch und Zucker",
    start: new Date("2005-07"),
    end: new Date("2005-08"),

    description: "Custom ROLAP solution",
    form: "employee",
    softwareHouse: "Software Business Group",
    team: 2,

    title: "Web Developer",
    area: "backend",
    skills: ["MySQL", "PHP", "SQL"],
  },

  /**
   * GOLF
   */
  {
    name: "GOLF",
    company: "Polish Golf Union",
    start: new Date("2005-02"),
    end: new Date("2005-06"),

    description: "System to run golf tournaments and country league",
    form: "freelancer",
    softwareHouse: "Microsoft S2B",
    remote: true,
    team: 5,

    title: "Lead Analyst",
    area: "analysis",
    skills: ["SQL Server", "SQL", "UML"],
  },

  /**
   * Triplan
   */
  {
    name: "Partition wall designer",
    company: "Triplan",
    start: new Date("2004-12"),
    end: new Date("2005-01"),

    description: "Partition wall drag and drop composer",
    form: "freelancer",
    remote: true,
    team: 1,

    title: "Software Developer",
    area: "frontend",
    skills: ["ActionScript", "UI design"],
  },

  /**
   * Warsaw Creator
   */
  {
    name: "Warsaw Creator",
    company: "Ula Białowąs",
    start: new Date("2004-07"),
    end: new Date("2004-09"),

    description: "Drag and drop editior of alternative Warsaw postcard",
    form: "freelancer",
    remote: true,
    team: 1,

    title: "Software Developer",
    area: "fullstack",
    skills: ["ActionScript", "CSS", "MySQL"],
  },

  /**
   * Okrasko
   */
  {
    name: "Okrasko Homepage",
    company: "Ania Okrasko",
    start: new Date("2004-02"),
    end: new Date("2004-03"),

    description: "Painter's portfolio.",
    form: "freelancer",
    remote: true,
    team: 1,

    title: "Web developer",
    area: "frontend",
    skills: ["PHP", "CSS", "UI design"],
  },
]

export default projectData
