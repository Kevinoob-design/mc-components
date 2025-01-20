import type { Preview } from '@storybook/html'
import '../app/components/index.css'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			source: {
				excludeDecorators: true
				// transform: (src: string, _: StoryContext) => prettifyStorybookPreview(src)
			}
		}
	}
}

export default preview
