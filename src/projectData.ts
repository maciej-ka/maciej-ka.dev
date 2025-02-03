type Project = {
  name: string
  company: string
  position: string
  lead?: boolean
  start: Date
  /**
   * Month which had the last day of work.
   * 2024-12 is like saying contract ended on December
   * 31th is most likely the last day of that contract.
   */
  end?: Date

  description: string
  link?: string
  /** Is a smaller project, a side project. */
  side?: boolean
  remote: boolean
  form: "contractor" | "freelancer"
  softwareHouse?: string
  /** Team size, including myself. */
  team: number

  area: "backend" | "frontend" | "fullstack" | "analysis"
  skills: string[]
}

const projectData: Project[] = [
  /**
   * Yousty
   */
  {
    name: "Yousty",
    company: "Yousty",
    position: "Senior Frontend Developer",
    start: new Date("2024-11"),
    end: new Date("2024-12"),

    description:
      "Portal to find matching apprencieships for Switzerland students",
    link: "https://www.yousty.ch/de-CH",
    remote: true,
    form: "contractor",
    softwareHouse: "Useo",
    team: 7,

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
    position: "Mobile Web Developer",
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
    position: "Lead Fullstack Developer",
    lead: true,
    start: new Date("2020-02"),
    end: new Date("2024-07"),

    description:
      "Software to track position and status of corporate vessel fleets",
    link: "https://www.zeppelin-powersystems.com/de/en/solutions/digital-solutions/aec-view/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 4,

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
    position: "Senior Frontend Developer",
    start: new Date("2019-05"),
    end: new Date("2020-01"),

    description: "Portal to order big construction machines",
    link: "https://www.klickrent.de/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 4,

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
    position: "Lead Web Developer",
    lead: true,
    start: new Date("2018-11"),
    end: new Date("2019-02"),

    description: "Dashboard with city statistics",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 2,

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
    position: "Analyst",

    description: "Web app for monitoring large wind farms",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 2,

    area: "analysis",
    skills: ["UI design", "Sketch"],
  },

  /**
   * Globalmatix
   */
  {
    name: "Globalmatix",
    company: "Globalmatix",
    position: "Frontend Developer",
    start: new Date("2018-08"),
    end: new Date("2024-10"),

    description: "Utility to manage reporting devices installed in cars",
    side: true,
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 2,

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
    position: "Frontend Developer",
    start: new Date("2016-12"),
    end: new Date("2018-07"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 8,

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
    position: "Backend Developer",
    start: new Date("2016-08"),
    end: new Date("2016-11"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    team: 6,

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
    position: "Lead Web Developer",
    lead: true,
    start: new Date("2016-01"),
    end: new Date("2016-05"),

    description: "Portal about football rules",
    link: "theifab.com",
    remote: true,
    form: "contractor",
    softwareHouse: "Me & My Friends",
    team: 2,

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
    position: "Web Developer",
    start: new Date("2015-12"),
    end: new Date("2015-12"),

    description: "Prototype of online analytics services",
    remote: true,
    form: "freelancer",
    team: 1,

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
    position: "Web Developer",
    start: new Date("2015-11"),
    end: new Date("2015-11"),

    description: "Utility application to merge database duplicates",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

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
    position: "Web Developer",
    start: new Date("2015-10"),
    end: new Date("2015-10"),

    description: "A TODO planner",
    remote: true,
    form: "freelancer",
    team: 1,

    area: "backend",
    skills: ["Capybara", "Minitest", "PayPal", "Rails", "Ruby", "Selenium"],
  },

  /**
   * SAWP, SDEG
   */
  {
    name: "SDEG",
    company: "SAWP",
    position: "Web Developer",
    start: new Date("2015-08"),
    end: new Date("2015-09"),

    description: "Document workflow for exchanging artist royalties",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

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
    position: "Web Developer",
    start: new Date("2015-05"),
    end: new Date("2015-07"),

    description: "Panel to configure reports with charts and datasources",
    remote: true,
    form: "freelancer",
    team: 1,

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
    position: "Web developer",
    start: new Date("2015-01"),
    end: new Date("2015-04"),

    description: "Portal with member zone reports",
    link: "cert.orange.pl",
    remote: true,
    form: "freelancer",
    softwareHouse: "Motabi",
    team: 2,

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
]

export default projectData
