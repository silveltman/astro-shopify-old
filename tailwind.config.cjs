/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ["'Inter var'", 'sans serif'],
			// secondary: ["'FromTheStars'", 'display', 'sans serif'],
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: '#4f46e5',
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81'
				},
				warning: '#FF9500',
				error: '#FF3B30',
				success: '#34C759',
			},
			spacing: {
				DEFAULT: '1rem',
				'xs': '0.25rem',
				'sm': '0.5rem',
				'md': '1rem',
				'lg': '2rem',
				'xl': '4rem',
				'2xl': '6rem',
			},
			screens: {
				'3xl': '1792px',
			},
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require('tailwind-scrollbar'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/forms'),
	],
}
