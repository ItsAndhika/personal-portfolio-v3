import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
import { IconType } from "react-icons";

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
		href: "/",
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
