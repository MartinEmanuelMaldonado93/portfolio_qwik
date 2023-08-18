export type WorkExperience = {
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points: string[];
};
export const WorkExperienceData: WorkExperience[] = [
	{
		company_name: "Frontend Engineer",
		title: "Meatbrains.com, San Francisco CA",
		icon: "/icons/meatbrain.jpg",
		iconBg: "#383E56",
		date: "jan 2023 - currently",
		points: [
			"Incorporate the styles with CSS3 based on a figma design.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Created new animations on the page to improve the ux.",
			"Fix bugs, apply clean code, and full responsive..",
			"[ Figma, SvelteKit, TypeScript, PostgreSQL, Azure ]",
		],
	},
	{
		company_name: "Frontend Engineer - Freelance",
		title: "Voxabular.com, San Francisco CA",
		icon: "/icons/penny.ico",
		iconBg: "#383E56",
		date: "Mar 2022 - Feb 2023",
		points: [
			"Improve ui/ux and CSS3 architecture including wide support to old browsers and applying BEM methodology.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
			"Created a complete web-component (a draggable card) which rapidly became a main part of the game.",
			"Accelerate and optimize the development process adding the swc compiler increasing by 300% ~ of time, saving the team several minutes while developing.",
			"[ React, Lit-Element, TypeScript, Css, Java, mySQL, Azure ]",
		],
	},
	{
		company_name: "Freelance ",
		title: "Frontend Developer",
		icon: "/icons/fiverr.png",
		iconBg: "#383E56",
		date: "jan 2021 - jun 2021",
		points: [
			" Front-end development with React JS and 3D models with R3F",
			"Incorporate successfully improvements of SEO.",
			" Development of fully responsive websites",
			"[ React, TypeScript, Css, Nodejs ]",
		],
	},
	{
		company_name: "Asap Consulting S.A.",
		title: "Frontend Developer",
		icon: "/icons/asap.png",
		iconBg: "#383E56",
		date: "jan 2020 - dic 2022",
		points: [
			"Analyze and estimate stories using Scrum methodology",
			"Incorporate successfully improvements of SEO.",
			"Developed web applications using Angular from V8-13",
			"Refactor Css and add new features and performant animations",
			"Participating in code reviews and providing constructive feedback to other developers.",
			"[ React, Angular, TypeScript, Css, Nodejs ]",
		],
	},
	{
		company_name: "C Language Teaching Assistant",
		title: "UTN Nacional Technological University ",
		icon: "/icons/utn.png",
		iconBg: "#383E56",
		date: "ago 2019 - en 2020",
		points: [
			"Taught to a University initial students C language and C++ by emphasizing conceptual understanding of topics related with data structures and algorithms more known in depth.",
		],
	},
];
