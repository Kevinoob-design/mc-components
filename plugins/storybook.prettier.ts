import * as prettier from 'prettier'
import * as htmlParser from 'prettier/parser-html'
import options from '../prettier.config'

export const prettifyStorybookPreview = async (content: string) => {
	const formattedContent = await prettier.format(content, { ...options, parser: 'html', plugins: [htmlParser] })
	return formattedContent
}
