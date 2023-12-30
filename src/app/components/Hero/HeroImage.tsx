import Image from "next/image";

export default function HeroImage() {
	return (
		<Image
			src={"/img/hero-image.webp"}
			alt="My Profile"
			width={1000}
			height={1000}
			id="hero-image"
			className="w-3/4 pointer-events-none border-2 border-black md:w-1/3 xl:w-1/4"
			priority
		/>
	);
}
