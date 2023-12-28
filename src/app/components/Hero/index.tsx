import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
	return (
		<section className="container mb-10 px-7 mx-auto p-5 flex flex-col justify-center items-center gap-16 lg:flex-row-reverse lg:max-w-7xl">
			<HeroImage />
			<HeroContent />
		</section>
	);
}
