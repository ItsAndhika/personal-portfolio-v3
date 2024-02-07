import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosSend } from "react-icons/io";

export const techStack: Array<techStack> = [
	{
		src: "/img/nextjs.svg",
		alt: "Next.js",
		className:
			"w-20 grayscale transition cursor-pointer hover:grayscale-0 sm:w-24",
	},
	{
		src: "/img/reactjs.svg",
		alt: "React.js",
		className:
			"w-20 h-12 grayscale transition cursor-pointer hover:grayscale-0 sm:h-16",
	},
	{
		src: "/img/tailwindcss.svg",
		alt: "Tailwindcss",
		className:
			"w-28 grayscale transition cursor-pointer hover:grayscale-0 sm:w-32",
	},
	{
		src: "/img/typescript.svg",
		alt: "Typescript",
		className:
			"w-24 grayscale transition cursor-pointer hover:grayscale-0 sm:w-26",
	},
];

export const navLink: Array<navLink> = [
	{
		name: "Home",
		href: "#home",
		icon: FaHome,
		mobileClassName:
			"flex items-center gap-5 p-2 transition rounded-lg hover:bg-black hover:text-white",
	},
	{
		name: "About",
		href: "#about",
		icon: IoMdPerson,
		mobileClassName:
			"flex items-center gap-5 p-2 transition rounded-lg hover:bg-black hover:text-white",
	},
	{
		name: "Skills",
		href: "#skills",
		icon: FaCode,
		mobileClassName:
			"flex items-center gap-5 p-2 transition rounded-lg hover:bg-black hover:text-white",
	},
	{
		name: "Projects",
		href: "#projects",
		icon: GoProjectRoadmap,
		mobileClassName:
			"flex items-center gap-5 p-2 transition rounded-lg hover:bg-black hover:text-white",
	},
	{
		name: "Contact",
		href: "#contact",
		icon: IoIosSend,
		mobileClassName:
			"flex items-center gap-5 p-2 transition rounded-lg hover:bg-black hover:text-white",
	},
];

export const skills: Array<skills> = [
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
		alt: "HTML",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
		alt: "CSS",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		alt: "JavaScript",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		alt: "TypeScript",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
		alt: "Bootstrap",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		alt: "Tailwind CSS",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		alt: "React.js",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
		alt: "Next.js",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
		alt: "Node.js",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
		alt: "Express.js",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
		alt: "MySQL",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
		alt: "PostgreSQL",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		alt: "MongoDB",
	},
];

export const projects: Array<projects> = [
	{
		name: "Personal Portfolio",
		picture: "/img/personal-portfolio.png",
		techs: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		],
		github: "https://github.com/ItsAndhika/personal-portfolio-v3",
		demo: "https://primananda.vercel.app",
	},
	{
		name: "Old Personal Portfolio",
		picture: "/img/old-personal-portfolio.png",
		techs: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		],
		github: "https://github.com/ItsAndhika/personal-portfolio-v2",
		demo: "https://primananda-old.vercel.app",
	},
	{
		name: "Motiot Simple IoT Remote",
		picture: "/img/motiot-iot-remote.png",
		techs: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
		],
		github:
			"https://github.com/ItsAndhika/radja_parfum_site/tree/master/client",
		demo: "https://motiot.vercel.app",
	},
	{
		name: "Mosto Elegant Linktree",
		picture: "/img/mosto-elegant-linktree.png",
		techs: [
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
			"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
		],
		github:
			"https://github.com/ItsAndhika/radja_parfum_site/tree/master/client",
		demo: "https://mostoelegant.vercel.app",
	},
];
