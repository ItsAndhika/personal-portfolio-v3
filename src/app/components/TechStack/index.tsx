import Image from "next/image";
import { techStack } from "@/app/data/dummy";

export default function TechStack() {
	return (
		<>
			<div className="container px-7 mx-auto grid grid-cols-2 place-items-center lg:grid-cols-4 lg:max-w-5xl">
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
			<Image
				src="/img/wave-top.svg"
				alt=""
				width={1000}
				height={1000}
				id="about"
				className="w-full"
			/>
		</>
	);
}
