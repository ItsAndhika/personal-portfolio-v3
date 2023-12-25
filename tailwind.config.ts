import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				lg: "900px",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"radial-gradient": "radial-gradient(#763CAC, #763CAC)",
			},
			colors: {
				// primary: "#2e8a99",
				// primary: "#33a1b3",
				primary: "#763CAC",
			},
			animation: {
				"pulse-slow": "pulse 3s infinite",
			},
		},
	},
	plugins: [],
};
export default config;
