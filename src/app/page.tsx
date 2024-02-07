import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<main id="home" className="py-24 lg:pt-40 lg:pb-20 2xl:pt-80 ">
				<Hero />
				<TechStack />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
			<Footer />
		</>
	);
}
