interface techStack {
	src: string;
	alt: string;
	className: string;
}

interface navLink {
	name: string;
	href: string;
	icon: IconType;
	mobileClassName: string;
}

interface skills {
	src: string;
	alt: string;
}

interface projects {
	name: string;
	picture: string;
	techs: Array<string>;
	github: string;
	demo: string;
}
