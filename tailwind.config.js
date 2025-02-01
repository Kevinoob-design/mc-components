const { scopedPreflightStyles, isolateInsideOfContainer } = require('tailwindcss-scoped-preflight')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/components/**/*.{html,js}'],
	theme: {
		extend: {}
	},
	plugins: [
		scopedPreflightStyles({
			isolationStrategy: isolateInsideOfContainer('.tw')
		})
	]
}
