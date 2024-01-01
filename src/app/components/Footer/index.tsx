import Link from "next/link";
import Image from "next/image";
import { navLink } from "@/app/data/dummy";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-slate-100">
			<div className="p-5 grid gap-10 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:max-w-3xl xl:max-w-5xl">
				<div>
					<h1 className="text-2xl font-bold">Primananda Andhika</h1>
					<p>Junior Web Developer</p>
				</div>
				<nav className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold mb-1">Navigations</h2>
					{navLink.map((item) => (
						<div
							key={item.name}
							className="w-max flex items-center gap-2 transition cursor-pointer hover:text-black/80"
						>
							<item.icon size={16} />
							<Link href={item.href}>{item.name}</Link>
						</div>
					))}
				</nav>
				<nav className="flex flex-col gap-2">
					<h2 className="text-xl font-semibold mb-1">Social Media</h2>
					<div className="w-max flex items-center gap-2 transition cursor-pointer hover:text-black/80">
						<FiGithub size={16} />
						<Link href="https://github.com/ItsAndhika" target="_blank">
							GitHub
						</Link>
					</div>
					<div className="w-max flex items-center gap-2 transition cursor-pointer hover:text-black/80">
						<FaInstagram size={16} />
						<Link href="https://instagram.com/einmanns_" target="_blank">
							Instagram
						</Link>
					</div>
				</nav>
				<div className="flex flex-col gap-2 ">
					<h2 className="text-xl font-semibold mb-1">Address</h2>
					<p>Purworejo, Central Java, Indonesia</p>
					<p>primanandandhika@gmail.com</p>
					<p>+6285325046749</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center p-5 gap-3">
				<div className="flex items-center gap-3 mx-auto">
					<p>Made with</p>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
						alt="Next.js"
						width={1000}
						height={1000}
						className="w-7"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
						alt="React.js"
						width={1000}
						height={1000}
						className="w-7"
					/>
					<Image
						src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
						alt="Tailwind CSS"
						width={1000}
						height={1000}
						className="w-7"
					/>
				</div>
				<p className="text-center text-sm mx-auto">
					Copyright 2024 Primananda Andhika. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
}
