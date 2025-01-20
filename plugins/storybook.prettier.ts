import * as prettier from 'prettier'
import * as htmlParser from 'prettier/parser-html'
import { StoryContext } from '@storybook/html'
import options from '../prettier.config'

export const prettifyStorybookPreview = async (src: string, _: StoryContext) => {
	const formattedHtmlSrc = await prettier.format(src, { ...options, parser: 'html', plugins: [htmlParser] })
	return formattedHtmlSrc
}
