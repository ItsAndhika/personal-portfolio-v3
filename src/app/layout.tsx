import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Primananda Andhika",
	description:
		"Primananda Andhika's personal portfolio, made with next.js, tailwindcss, and much more...",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
