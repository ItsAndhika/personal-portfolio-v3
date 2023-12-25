import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
	return (
		<main className="py-24 px-7 grid">
			<div className="container mx-auto p-5 flex flex-col justify-center items-center gap-16">
				<HeroImage />
				<HeroContent />
			</div>
		</main>
	);
}
