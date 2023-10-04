export type ExperimentsType = {
  title: string;
  brief: string;
  stack: string[];
  img_url: string;
  link: string;
  alt: string;
  index?: number,
};

export const experiments_data: ExperimentsType[] = [
  {
    title: "Awesome modern gallery",
    alt: "Awesome modern gallery",
    brief: "Showcase inspired by alcre.co.kr and supah tutorial",
    img_url: "",
    link: "https://awesome-gallery-glsl.vercel.app/",
    stack: ["React", "WebGL", "Three.js", "Gsap", "r3f"],
  },
  {
    title: "Gucci nft gallery challenge",
    alt: "gucci gallery",
    brief: "Clone of the beautifull ntf gallery of Gucci",
    img_url: "",
    link: "https://nft-studio-challenge-pt-2.vercel.app/",
    stack: ["Next.js", "WebGL", "Three.js", "Framer-Motion", "Scss"],
  },
  {
    title: "Three graces upgrade",
    alt: "three graces",
    brief:
      "Upgrade an existing demo with smooth scroll and cursor, moving to r3f",
    img_url: "",
    link: "https://main--three-graces-contribution.netlify.app/",
    stack: ["Three.js", "smooth-scrollbar", "Webpack5"],
  },
  {
    title: "Homer with Finite State Machine",
    alt: "homer 3d",
    brief: "Add fsm to a 3d homer using ts",
    img_url: "",
    link: "https://homer3d.netlify.app/",
    stack: ["Three.js", "TypeScript", "Vite"],
  },
  {
    title: "Mercado Libre 3D feature",
    alt: "Mercado libre 3d",
    brief: "Add simple showcase to luxury products",
    img_url: "",
    link: "https://mercadolibre3d.netlify.app/",
    stack: ["React-Three-Fiber", "Scss", "Webpack5"],
  },
  {
    title: "Minimal paddle game",
    alt: "paddle game",
    brief: "Minimal game using physics and react",
    img_url: "",
    link: "https://clever-medovik-2c89fe.netlify.app/",
    stack: ["React-Three-Fiber", "Cannon.js"],
  },
  {
    title: "Frantic arquitecht of unity game",
    alt: "Frantic arquitecht",
    brief: "Minimal game using physics and react",
    img_url: "",
    link: "https://frantic-arquitect-js.netlify.app/",
    stack: ["React-Three-Fiber", "Cannon.js"],
  },
  {
    title: "Personal Portfolio",
    alt: "personal portfolio",
    brief:
      "Diving into Qwik framework with other minimalistic and performant tools",
    img_url: "",
    link: "https://martin-emanuel.vercel.app/",
    stack: [
      "Qwik",
      "Motion One",
      "Splitting.js",
      "Locomotive-scroll",
      "Tailwind",
    ],
  },
];
