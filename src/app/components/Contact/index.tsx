"use client";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Link from "next/link";
import { FormEvent } from "react";

export default function Contact() {
	const handleClick = () => {
		const scriptURL =
			"https://script.google.com/macros/s/AKfycbxk5wFU7JdMUY-BoHAQeMZQ9gp3dl0U2-gMl0cdm1AYlC-Pf642oRXti-hwKmThRDs/exec";
		const form = document.forms["contact-form"];

		form.addEventListener("submit", (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			fetch(scriptURL, { method: "POST", body: new FormData(form) })
				.then((response) => {
					form.reset();
				})
				.catch((error) => console.error("Error!", error.message));
		});
	};

	return (
		<>
			<div id="contact"></div>
			<section className="container p-5 mx-auto mt-20 overflow-hidden lg:max-w-4xl">
				<h1 className="text-2xl font-bold text-center mb-10">CONTACT</h1>
				<div className="w-full shadow-lg border border-slate-700/10 rounded-md grid md:grid-cols-2">
					<div className="flex flex-col justify-around gap-10 p-5 bg-slate-50">
						<h2 className="text-xl font-semibold ">Let&apos;s get in touch</h2>
						<div className="flex flex-col gap-2">
							<div className="flex items-center gap-2">
								<FaLocationDot size={20} />
								<p>Purworejo, Central Java, Indonesia</p>
							</div>
							<div className="flex items-center gap-2">
								<MdEmail size={20} />
								<p>primanandandhika@gmail.com</p>
							</div>
							<div className="flex items-center gap-2">
								<FaPhoneVolume size={20} />
								<p>+6285325046749</p>
							</div>
						</div>
						<div className="flex flex-col gap-1">
							<h3>Social Media</h3>
							<div className="flex gap-1">
								<Link
									href="https://github.com/ItsAndhika"
									target="_blank"
									className="p-3 text-white bg-black border rounded-md transition cursor-pointer hover:bg-transparent hover:border-black hover:text-black"
								>
									<FiGithub size={20} />
								</Link>
								<Link
									href="https://instagram.com/einmanns_"
									target="_blank"
									className="p-3 text-white bg-black border rounded-md transition cursor-pointer hover:bg-transparent hover:border-black hover:text-black"
								>
									<FaInstagram size={20} />
								</Link>
							</div>
						</div>
					</div>
					<div className="flex flex-col p-5 bg-slate-200 gap-5">
						<h2 className="text-xl font-semibold">Contact Me</h2>
						<form
							action=""
							name="contact-form"
							method="POST"
							className="flex flex-col gap-5"
						>
							<input
								type="text"
								name="name"
								autoComplete="off"
								placeholder="Name"
								className="w-full p-2 border-2 border-black rounded-lg outline-none placeholder:text-black/70"
								required
							/>
							<input
								type="email"
								name="email"
								autoComplete="off"
								placeholder="Email"
								className="w-full p-2 border-2 border-black rounded-lg outline-none placeholder:text-black/70"
								required
							/>
							<textarea
								name="message"
								autoComplete="off"
								placeholder="Message"
								className="w-full p-2 border-2 border-black rounded-lg outline-none placeholder:text-black/70"
								required
							/>
							<button
								type="submit"
								id="send"
								className="w-max flex items-center gap-1 p-3 bg-black text-white border-2 rounded-lg transition hover:border-black hover:bg-transparent hover:text-black"
								onClick={handleClick}
							>
								<FiSend size={16} />
								Send
							</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
