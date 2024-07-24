/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'blueProject': '#00629B',
				'greenProject': '#AFE767',
				'greenProjectAccent': '#88C64B',
				'blueCard' : '#65b0c1',
				'shark': '#1D1D1F',
				'greenShow': '#ECFFD4'
			},
		},
	},
	plugins: [],
}
