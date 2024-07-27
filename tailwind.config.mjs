/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Noto Sans', 'sans-serif'],
				'title': ['Libre Baskerville', 'serif']
			},
			colors: {
				'blueProject': '#00629B',
				'greenProject': '#AFE767',
				'greenProjectAccent': '#88C64B',
				'greenProjectDark': '#506833',
				'blueCard' : '#65b0c1',
				'shark': '#1D1D1F',
				'greenShow': '#ECFFD4'
			},
			height: {
				'hero': 'calc(100vh - 96px)'
			},
			backgroundImage: {
				'radial-center': 'radial-gradient(circle, rgba(48,79,51,0.5) 31%, rgba(22,37,10,0.76) 100%)',
			}
		},
	},
	plugins: [],
}
