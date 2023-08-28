export type CardProps = {
  title: string;
  location: string;
  date?: string;
  role: string | string[];
  description: string;
  stack?: string;
  points: string[];
  img_url: string;
  bg_tw?: string;
  alt: string;
  link?: string;
};

export const workExpData: CardProps[] = [
  {
    title: "Meatbrains.com",
    date: "jan 2023 - currently",
    alt: "ai web",
    link: "https://meatbrains.com/",
    bg_tw: "bg-slate-600",
    description:
      "AI web platform to learn about books questions. (Figma, SvelteKit, TypeScript, PostgreSQL, Azure)",
    location: "San Francisco C.A. USA",
    role: "Fullstack developer",
    stack: "",
    img_url: "/projects_img/meatbrains.jpg",
    points: [
      "Incorporate the styles with CSS3 based on a figma design.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Created new animations on the page to improve the ux.",
      "Fix bugs, apply clean code, and full responsive..",
    ],
  },
  {
    title: "Voxabular.com",
    location: "San Francisco C.A. USA",
    link: "https://play.google.com/store/apps/details?id=com.tiltstudios.voxabular&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pli=1",
    role: "Fullstack developer",
    date: "mar 2022 - feb 2023",
    description:
      "Learning Platform Web Game. ( TypeScript, React, Lit, Three.js, WebGL, Css3, Capacitor for mobile )",
    points: [
      "Refactoring tasks like improve UI/UX and CSS3 architecture including support to old browsers while applying BEM methodology.",
      "I created customized interactive multimedia cards for mini RPG games, and for the landing page.",
      "Enhance and streamline the development process by configuring the SWC compiler to improve compilation times by over 300%. Additionally, update and replace outdated modules in Webpack 5.",
      "Incorporate Email Notification Functionality.",
    ],
    alt: "coderuner",
    img_url: "/projects_img/pennybattle.png",
    // bg_tw:'bg-yellow-600'
  },
  {
    title: "Freelance Work",
    date: "jan 2021 - jun 2021",
    alt: "Freelance",
    description:
      "Working w/ temporary clients ( React, TypeScript, Css, Nodejs )",
    img_url: "/projects_img/frantic.jpg",
    location: "Argentina",
    role: "Frontend Developer",
    bg_tw: "bg-blue-800",
    points: [
      " Front-end development with React JS and 3D models with R3F",
      "Incorporate successfully improvements of SEO.",
      " Development of fully responsive websites",
    ],
  },
  {
    title: "Asap Consulting S.A.",
    role: "Frontend Developer",
    date: "jan 2020 - dic 2022",
    link: "https://asap-consulting.net/lockers-logro-optimizar-sus-pedidos-con-una-plataforma-digital-de-asap-consulting/",
    description: " ( React, Angular, TypeScript, Css, Nodejs )",
    alt: "asap",
    img_url: "/projects_img/lockers.jpg",
    location: "Argentina",
    bg_tw: "bg-green-700",
    points: [
      "Analyze and estimate stories using Scrum methodology",
      "Incorporate successfully improvements of SEO.",
      "Developed web applications using Angular from V8-13",
      "Refactor Css and add new features and performant animations",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UTN Nacional Technological University ",
    role: "C/C++ Language Teaching Assistant",
    date: "ago 2019 - en 2020",
    alt: "utn",
    link: "https://www.frba.utn.edu.ar/",
    description: "(Eclipse, MingW, Linux, DSA)",
    img_url: "/projects_img/utn.jpg",
    location: "Buenos Aires, Argentina",
    bg_tw: "bg-slate-400",
    points: [
      "Emphasizing conceptual understanding of topics related with data structures and algorithms more known in depth.",
      "Excalidraw representation of data sctructures",
      "Mingw and others binaries setup/assistance",
    ],
  },
];
