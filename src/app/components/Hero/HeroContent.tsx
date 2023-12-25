"use client";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";

export default function HeroContent() {
	return (
		<div className="flex flex-col text-center gap-5 max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold mx-auto sm:text-5xl">
				Hi, I&apos;m Primananda Andhika 👋🏻
			</h1>
			<TypewriterComponent
				options={{
					strings: ["Junior Web Developer", "Coding Enjoyer", "Student"],
					autoStart: true,
					loop: true,
					delay: 30,
					deleteSpeed: 2,
					wrapperClassName: "text-black text-lg font-semibold sm:text-xl",
				}}
			/>
			<p className="text-black/90 text-center sm:text-lg lg:text-left">
				I love working with code and make as good websites as possible by
				turning a cup of coffee into code ☕
			</p>
			<Link
				href="#about"
				className="w-max mx-auto px-5 py-3 border-2 border-transparent bg-black text-white rounded-full transition duration-300 hover:bg-transparent hover:text-black hover:border-black lg:mx-0"
			>
				Tell me more
			</Link>
		</div>
	);
}
