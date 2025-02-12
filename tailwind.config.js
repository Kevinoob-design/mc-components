const { scopedPreflightStyles, isolateInsideOfContainer } = require('tailwindcss-scoped-preflight')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/components/**/*.{html,js,ts}', './stories/**/*.{html,js,ts}', './__test__/**/*.{html,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		scopedPreflightStyles({
			isolationStrategy: isolateInsideOfContainer('.tw')
		})
	]
}
