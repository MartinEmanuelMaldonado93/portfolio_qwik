import type { CSSProperties } from "@builder.io/qwik";

type CardProps = {
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
};

export const workExpData: CardProps[] = [
	{
		title: "Voxabular.com",
		location: "San Francisco C.A. USA",
		role: "Frontend developer",
		date: "",
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
	},
	{
		title: "Meatbrains.com",
		alt: "ai web",
		bg_tw: "bg-slate-500",
		description:
			"AI web platform to learn about books questions. ( Figma, SvelteKit, TypeScript, PostgreSQL, Azure )",
		location: "San Francisco C.A. USA",
		role: "Fullstack developer",
		stack: "",
		img_url: "/projects_img/booking/booking.png",
		points: [
			"Incorporate the styles with CSS3 based on a figma design.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Created new animations on the page to improve the ux.",
			"Fix bugs, apply clean code, and full responsive..",
		],
	},
];
