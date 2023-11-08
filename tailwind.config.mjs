/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens:{
				'pcb': { 'raw': '(max-height: 650px) and (min-width: 1200px)' },
			},
			keyframes: {
				wiggle: {
				  '0%, 100%': { transform: 'rotate(-4deg)' },
				  '50%': { transform: 'rotate(4deg)' },
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite',
			},
			fontFamily: {
				content: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
				header: ["Atma", ...defaultTheme.fontFamily.sans]
			},
		},
	},
	plugins: [],
}
