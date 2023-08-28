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
    brief: "Showcase inspirede by alcre.co.kr and supah tutorial",
    img_url: "",
    link: "https://awesome-gallery-glsl.vercel.app/",
    stack: ["React", "WebGL", "Three.js", "Gsap", "r3f"],
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
    title: "Gucci nft gallery challenge",
    alt: "gucci gallery",
    brief: "Clone of the beautifull ntf gallery of Gucci",
    img_url: "",
    link: "https://nft-studio-challenge-pt-2.vercel.app/",
    stack: ["Next.js", "WebGL", "Three.js", "Framer-Motion", "Scss"],
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
