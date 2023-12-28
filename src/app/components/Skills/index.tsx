import { skills } from "@/app/data/dummy";
import Image from "next/image";

export default function Skills() {
	return (
		<>
			<div id="skills"></div>
			<section className="container w-full p-5 mx-auto mt-20 lg:max-w-4xl">
				<h1 className="text-2xl font-bold text-center mb-10">SKILLS</h1>
				<div className="w-full grid grid-cols-2 justify-center items-center gap-3 sm:grid-cols-3 lg:grid-cols-4 lg:gap-5">
					{skills.map((skill) => (
						<div
							key={skill.alt}
							className="flex flex-col justify-center items-center gap-5 p-5 border border-slate-700/10 bg-slate-300/30 mx-auto rounded-md shadow-lg"
						>
							<Image
								src={skill.src}
								alt={skill.alt}
								width={1000}
								height={1000}
								className="h-20 pointer-events-none"
							/>
							<p className="text-base font-semibold">{skill.alt}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
