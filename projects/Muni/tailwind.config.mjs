/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ["Roboto", "system-ui", "sans-serif"]
			},
			colors: {
				verdeFuerte: "#009241",
				fondoBlanco: "#EEEFF0"
			},
		},
	},
	plugins: [],
}
