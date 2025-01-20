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
				// transform: prettifyStorybookPreview
			}
		}
	}
}

export default preview
