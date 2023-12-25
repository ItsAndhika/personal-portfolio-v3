"use client";
import { useState } from "react";
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";
import { navLink } from "@/app/data/dummy";

export default function Header() {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

	const handleOpenClick = () => {
		setIsNavOpen(true);
		document.body.classList.add("overflow-y-hidden");
	};

	const handleCloseClick = () => {
		setIsNavOpen(false);
		document.body.classList.remove("overflow-y-hidden");
	};

	return (
		<>
			<div
				className={`${
					isNavOpen ? "block" : "hidden"
				} w-screen h-screen fixed z-50 bg-transparent/20 backdrop-blur-sm`}
				onClick={handleCloseClick}
			></div>
			<div
				className={`${
					isNavOpen ? "translate-x-0" : "translate-x-[500px]"
				} fixed top-0 bottom-0 right-0 w-3/5 h-screen bg-white text-black z-50 transition flex flex-col p-5 gap-10`}
			>
				<button className="cursor-pointer self-end" onClick={handleCloseClick}>
					<LiaTimesSolid size={30} color="black" />
				</button>
				<div className="flex flex-col gap-2">
					{navLink.map((item) => (
						<Link key={item.name} href={item.href} className={item.className}>
							<item.icon size={30} />
							<p>{item.name}</p>
						</Link>
					))}
				</div>
			</div>
			<header className="w-full px-7 py-5 fixed top-0 z-10 bg-transparent backdrop-blur-md shadow-lg">
				<div className="max-w-4xl flex justify-between items-center mx-auto">
					<Link href={"/"}>
						<h1 className="text-lg cursor-pointer">prima()</h1>
					</Link>
					<button
						className="cursor-pointer transition hover:opacity-80"
						onClick={handleOpenClick}
					>
						<CgMenuRight size={24} />
					</button>
				</div>
			</header>
		</>
	);
}
