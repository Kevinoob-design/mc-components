import * as prettier from 'prettier'
import htmlParser from 'prettier/parser-html'

export const prettifyStorybookPreview = async (content: string) => {
	console.log(content)

	return await prettier.format(content, { parser: 'html', plugins: [htmlParser] })
}
