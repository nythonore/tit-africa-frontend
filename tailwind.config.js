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
			sans: ['Poppins', ...defaultTheme.fontFamily.sans],
		},

		extend: {
			colors: {
				primary: '#0E2737',
				secondary: '',
				success: '#1DC3B2',
				warning: '',
				danger: '',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
	],
};
