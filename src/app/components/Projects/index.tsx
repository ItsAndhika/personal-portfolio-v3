import { projects } from "@/app/data/dummy";
import Image from "next/image";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Projects() {
	return (
		<>
			<div id="projects"></div>
			<section className="container p-5 mx-auto mt-20 lg:max-w-4xl">
				<h1 className="text-2xl font-bold text-center mb-10">PROJECTS</h1>
				<div className="w-full grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
					{projects.map((project) => (
						<div
							key={project.name}
							className="flex flex-col p-5 bg-slate-500/10 gap-5 rounded-lg border border-slate-700/10 shadow-lg"
						>
							<Image
								src={project.picture}
								alt={project.name}
								width={1000}
								height={1000}
								className="w-full rounded-xl"
							/>
							<h2 className="text-lg font-semibold">{project.name}</h2>
							<div className="flex w-max justify-center items-center gap-3">
								{project.techs.map((tech) => (
									<Image
										key={tech}
										src={tech}
										alt=""
										width={1000}
										height={1000}
										className="w-6 h-6"
									/>
								))}
							</div>
							<div className="flex justify-center items-center gap-2">
								<Link
									href={project.github}
									target="_blank"
									className="w-full flex items-center gap-1 p-2 bg-black text-white text-base rounded-lg border-2 transition hover:bg-transparent hover:border-black hover:text-black"
								>
									<FiGithub size={16} />
									GitHub
								</Link>
								<Link
									href={project.demo}
									target="_blank"
									className="w-full flex items-center gap-1 p-2 bg-black text-white text-base rounded-lg border-2 transition hover:bg-transparent hover:border-black hover:text-black"
								>
									<FaArrowUpRightFromSquare size={15} />
									Demo
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
