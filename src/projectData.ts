type Project = {
  name: string
  company: string
  position: string
  start: Date
  end?: Date

  description: string
  link?: string
  remote: boolean
  form: "contractor"
  softwareHouse: string
  teamSize: number

  area: "frontend" | "fullstack" | "analysis"
  skills: string[]
}

const projectData: Project[] = [
  /**
   * Yousty
   */
  {
    name: "Yousty",
    company: "Yousty",
    position: "Senior frontend developer",
    start: new Date("2024-11"),
    end: new Date("2024-12"),

    description:
      "Portal to find matching apprencieships for Switzerland students",
    link: "https://www.yousty.ch/de-CH",
    remote: true,
    form: "contractor",
    softwareHouse: "Useo",
    teamSize: 7,

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
    position: "Mobile web developer",
    start: new Date("2021-06"),
    end: new Date("2021-12"),

    description:
      "App to run construction site warehouse using RFID and QR codes",
    link: "https://zamics.de/en/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 3,

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
    position: "Lead developer",
    start: new Date("2020-02"),
    end: new Date("2024-07"),

    description:
      "Software to track position and status of corporate vessel fleets",
    link: "https://www.zeppelin-powersystems.com/de/en/solutions/digital-solutions/aec-view/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 4,

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
    position: "Web developer",
    start: new Date("2019-05"),
    end: new Date("2020-01"),

    description: "Portal to order big construction machines",
    link: "https://www.klickrent.de/",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 4,

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
    position: "Lead web developer",
    start: new Date("2018-11"),
    end: new Date("2019-02"),

    description: "Dashboard with city statistics",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 2,

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
    teamSize: 2,

    area: "analysis",
    skills: ["UI design", "Sketch"],
  },

  /**
   * Globalmatix
   */
  {
    name: "Globalmatix",
    company: "Globalmatix",
    position: "Frontend developer",
    start: new Date("2018-08"),
    end: new Date("2024-10"),

    description: "Utility to manage reporting devices installed in cars",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 2,

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
   * Immmr
   */
  {
    name: "Immmr",
    company: "Deutsche Telekom",
    position: "Web developer",
    start: new Date("2016-12"),
    end: new Date("2018-07"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 8,

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
   * Immmr
   */
  {
    name: "Immmr",
    company: "Deutsche Telekom",
    position: "Web developer",
    start: new Date("2016-08"),
    end: new Date("2016-11"),

    description: "VoIP client with video calls",
    remote: true,
    form: "contractor",
    softwareHouse: "Inetum",
    teamSize: 6,

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
]

export default projectData
