const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '4rem',
				xl: '5rem',
				'2xl': '6rem',
			},
		},

		fontFamily: {
			sans: ['Libre Franklin', ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				primary: '#084D87',
				secondary: '#0E2737',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
};
