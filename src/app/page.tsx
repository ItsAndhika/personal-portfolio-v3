import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
	return (
		<>
			<Header />
			<main className="py-24 lg:pt-40 lg:pb-20 grid">
				<Hero />
				<TechStack />
				<About />
				<Skills />
				<Projects />
			</main>
		</>
	);
}
