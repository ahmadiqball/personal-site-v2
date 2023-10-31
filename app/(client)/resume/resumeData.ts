const works = [
  {
    title: "Frontend Engineer (Project Based)",
    time: "October, 2022 - January, 2023",
    company: "Braga Technologies, Bandung",
    desc: [
      "Developed a job portal website for DISNAKER of West Java Government using Next.js and Tailwind CSS.",
      "Create component slicing and implementation of UI/UX design for admin and company (user).",
      "Consume backend API using Axios, Next API, and Node.js to provide CRUD functionality in user profile and various user data in admin app.",
      "Develop feature for authentication, create user, messaging, CRUD for user and job, and generate PDF document.",
    ],
  },
  {
    title: "Airport Operation Intern",
    time: "June, 2021 - August, 2021",
    company: "Angkasa Pura Airports, Yogyakarta",
    desc: [
      "Continuously monitored operations in airside and landside area to ensure it's following the standard procedures and regulations.",
      "Create a daily planning for aircraft movement within the airside and the usage of apron area.",
      "Gather and analyze daily airport's traffic data.",
      "Responsible to create a daily data analytics dashboard about airport's traffic",
      "Regularly inspect facilities to ensure it's meet the requirment to support operation.",
    ],
  },
];

const volunteer = [
  {
    title: "Associate Project Manager",
    time: "November, 2022 - December, 2022",
    company: "Cianjur's 2022 Earthquake Recovery Projects by Keluarga Mahasiswa Pecinta Alam Ganesha ITB, Bandung",
    desc: [
      "Manage the development of housing area (temporary housing, water supply, and sanitation) in 5 villages with total of 228 temporary houses.",
      "Conduct survey in 2 districts for potential area to our program and potential program to the area.",
    ],
  },
  {
    title: "Chairman",
    time: "July, 2021 - April, 2022",
    company: "Keluarga Mahasiswa Pecinta Alam Ganesha ITB, Bandung",
    desc: [
      "Manage and lead an organization with 80+ members that focusing on environmental movement.",
      "Manage and lead the board of executive that responsible to create programs and achieve 87% Objective and Key Results\’s metrics score.",
    ],
  },
  {
    title: "Head of Environmental Division",
    time: "April, 2020 - July, 2021",
    company: "Keluarga Mahasiswa Pecinta Alam Ganesha ITB, Bandung",
    desc: [
      "Organize a team to create and manage the environmental movement of the organization. ",
      "Create an environment education platform through monthly discussion and articles. ",
      "Create a national scale webinar event to discuss about forest conservation with 300+ participants."
    ],
  },
  {
    title: "Expeditor; Curicullum and Research",
    time: "March, 2020 - January, 2021",
    company: "Ekspedisi Maritim dan Pesisir Indonesia ITB 2020, Bandung",
    desc: [
      "Create documentation of people's live in 8 location within coastal area of southern Yogyakarta.",
      "Create curicullum and bootcamp for the expeditor.",
      "Conduct research on 5 potential destination for the expedition and its potential program/issues.",
      "Lead one of five expedition team and responsible in ensuring the team to achieve its objectives.",
    ],
  },
];

const frontend = [
  { stack: "NextJs", icon: "nextjs" },
  { stack: "VueJs", icon: "vuejs" },
  { stack: "ReactJs", icon: "reactjs" },
  { stack: "JQuery", icon: "jquery" },
  { stack: "Redux", icon: "reduxjs" },
  { stack: "Recoil", icon: "recoiljs" },
  { stack: "Material UI", icon: "materialui" },
  { stack: "Bootstrap", icon: "bootstrap" },
  { stack: "Tailwind CSS", icon: "tailwind" },
];

const progLang = [
  { stack: "Python", icon: "python" },
  { stack: "Javascript", icon: "javascript" },
  { stack: "Typesciprt", icon: "typescript" },
  { stack: "NodeJs", icon: "nodejs" },
  { stack: "MATLAB", icon: "matlab" },
  { stack: "C++", icon: "cpp" },
  { stack: "SQL", icon: "sql" },
];

const database = [
  { stack: "MongoDB", icon: "mongodb" },
  { stack: "Directus", icon: "directus" },
  { stack: "Firebase", icon: "firebase" },
];

const dataScience = [
  { stack: "Tensorflow", icon: "tensorflow" },
  { stack: "Keras", icon: "keras" },
  { stack: "Scikit Learn", icon: "sklearn" },
  { stack: "Pandas", icon: "pandas" },
  { stack: "Matplotlib", icon: "matplotlib" },
  { stack: "Power BI", icon: "powerbi" },
];

const otherStack = [
  { stack: "HTML", icon: "html" },
  { stack: "CSS", icon: "css" },
  { stack: "REST API", icon: "restapi" },
  { stack: "GraphQL API", icon: "graphqlapi" },
  { stack: "JWT", icon: "jwt" },
  { stack: "Next Auth", icon: "nextauth" },
  { stack: "Git", icon: "git" },
];

const techStack = [
  { role: "Programming Language", stacks: progLang },
  { role: "Front End", stacks: frontend },
  { role: "Data Science", stacks: dataScience },
  { role: "Database", stacks: database },
  { role: "Other Stacks", stacks: otherStack },
];

export { works, techStack, volunteer };
