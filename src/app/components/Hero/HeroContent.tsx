"use client";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import { techStack } from "@/app/data/dummy";

export default function HeroContent() {
	return (
		<div className="flex flex-col text-center gap-5">
			<h1 className="text-4xl font-bold mx-auto">
				Hi, I&apos;m Primananda Andhika 👋🏻
			</h1>
			<TypeAnimation
				sequence={[
					"Junior Web Developer",
					1000,
					"Coding Enjoyer",
					1000,
					"Student",
					1000,
				]}
				speed={20}
				style={{ fontSize: "1.125rem", fontWeight: "bolder" }}
				repeat={Infinity}
				deletionSpeed={5}
			/>
			<p className="text-black/90 text-center">
				I love working with code and make the best website as much as possible
				by turning a cup of coffee into code ☕
			</p>
			<button className="w-max mx-auto px-5 py-3 border-2 border-transparent bg-black text-white rounded-full transition duration-300 hover:bg-transparent hover:text-black hover:border-black">
				Tell me more
			</button>
			<div className="w-full my-12 grid grid-cols-2 place-items-center">
				{techStack.map((item) => (
					<Image
						key={item.alt}
						src={item.src}
						alt={item.alt}
						width={1000}
						height={1000}
						className={item.className}
					/>
				))}
			</div>
		</div>
	);
}
