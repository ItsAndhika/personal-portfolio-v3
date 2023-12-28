import Image from "next/image";

export default function About() {
	return (
		<>
			<div className="bg-slate-100 w-full grid gap-10">
				<h1 className="text-2xl font-bold text-center">ABOUT ME</h1>
				<div className="grid justify-center items-center mx-auto max-w-5xl gap-10 lg:grid-cols-2 lg:gap-0">
					<div className="w-2/3 mx-auto relative z-10 before:absolute before:top-2 before:left-2 before:w-full before:h-full before:border-2 before:border-black before:rounded-lg before:-z-10 md:w-1/3 lg:w-3/4">
						<Image
							src="/img/about-image.jpeg"
							alt="About Image"
							width={1000}
							height={1000}
							className="w-full h-full rounded-lg z-10"
						/>
					</div>
					<p className="px-20 text-center lg:px-0 lg:text-left">
						Hi there! My name is Primananda Andhika, i am from Central Java,
						Indonesia. Currently i live in Purworejo regency. I&apos;ve been
						learning coding since I was at class 8 Junior High School. First
						programming language that I learned was JavaScript. I thought
						JavaScript is one of the easiest programming language, but before
						learning JavaScript, I was also learning HTML and CSS because HTML
						and CSS are the basic of web development.
						<br /> <br /> After that, I started to learn CSS frameworks such as
						Bootstrap and Tailwindcss, I felt comfort when i use Tailwindcss
						because it&apos;s easy to use. Then, I tried one of the most popular
						JavaScript framework that is React.js, I really like React.js
						because I could create fast user interfaces easily. After learning
						React, I jumped to learn Next.js, I think this JavaScript framework
						is quite complicated due to there is a bunch of data fetching
						methods in Next.js, but I will keep learning even though it&apos;s
						difficult to understand.
					</p>
				</div>
			</div>
			<Image
				src={"/img/wave-bottom.svg"}
				alt=""
				width={1000}
				height={1000}
				id="skills"
				className="w-full"
			/>
		</>
	);
}
