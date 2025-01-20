/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	useTabs: true,
	tabWidth: 4,
	singleQuote: true,
	trailingComma: 'none',
	quoteProps: 'as-needed',
	semi: false,
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'avoid',
	singleAttributePerLine: true,
	printWidth: 120
}

export default config
