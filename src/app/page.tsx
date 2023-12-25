import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";

export default function Home() {
	return (
		<>
			<Header />
			<main className="py-24 lg:pt-40 lg:pb-20 grid">
				<Hero />
				<TechStack />
				<About />
			</main>
		</>
	);
}
