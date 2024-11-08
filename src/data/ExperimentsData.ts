export type ExperimentsType = {
  title: string;
  brief: string;
  stack: string[];
  img_url: string;
  link: string;
  gh_link? : string;
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
    gh_link: "https://github.com/MartinEmanuelMaldonado93/beautiful_gallery_glsl",
    stack: ["React", "WebGL", "Three.js", "Gsap", "r3f"],
  },
  {
    title: "Gucci nft gallery challenge",
    alt: "gucci gallery",
    brief: "Challenge to recreate the beautifull ntf 3D gallery of Gucci",
    img_url: "",
    link: "https://nft-studio-challenge-pt-2.vercel.app/",
    gh_link: "https://github.com/MartinEmanuelMaldonado93/nft-studio-challenge_pt_2",
    stack: ["Next.js", "WebGL", "Three.js", "Framer-Motion", "Scss"],
  },
  {
    title: "Three graces upgrade",
    alt: "three graces",
    brief:
      "Upgrade an existing demo with smooth scroll and cursor, migrate to r3f",
    img_url: "",
    gh_link: "https://github.com/MartinEmanuelMaldonado93/threejs-graces",
    link: "https://main--three-graces-contribution.netlify.app/",
    stack: ["Three.js", "smooth-scrollbar", "Webpack5"],
  },
  {
    title: "Luxury car exhibition",
    alt: "luxury car ",
    brief: "Real-Time Car Painting Using Shader Techniques",
    img_url: "",
    link: "https://luxury-car-exhibition.vercel.app/",
    stack: ["React-Three-Fiber", "Custom shaders", "WebGL"],
    gh_link: "https://github.com/MartinEmanuelMaldonado93/luxury_car_exhibition",
  },
  {
    title: "Homer with Finite State Machine",
    alt: "homer 3d",
    brief: "Character Control in Vanilla Three.js with a Finite State Machine",
    img_url: "",
    gh_link: "https://github.com/MartinEmanuelMaldonado93/finite-state-machine",
    link: "https://homer3d.netlify.app/",
    stack: ["Three.js", "TypeScript", "Vite"],
  },
  {
    title: "Minimal paddle game",
    alt: "paddle game",
    brief: "Minimal game using physics and react",
    img_url: "",
    gh_link: "https://github.com/MartinEmanuelMaldonado93/r3f_simple_game",
    link: "https://clever-medovik-2c89fe.netlify.app/",
    stack: ["React-Three-Fiber", "Cannon.js"],
  },
  {
    title: "Frantic arquitecht of unity game",
    alt: "Frantic arquitecht",
    brief: "Minimal game using physics and react",
    img_url: "",
    gh_link: "https://github.com/MartinEmanuelMaldonado93/frantic-architect",
    link: "https://frantic-arquitect-js.netlify.app/",
    stack: ["React-Three-Fiber", "Cannon.js"],
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
