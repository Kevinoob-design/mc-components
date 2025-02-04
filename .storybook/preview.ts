import type { Preview } from '@storybook/html'
import '../app/components/index.css'
import { withAngularJs } from '../plugins/storybook.angular.decorator'

const preview: Preview = {
	tags: ['autodocs'],
	decorators: [withAngularJs()],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		},
		docs: {
			source: {
				excludeDecorators: true,
				format: true
				// transform: prettifyStorybookPreview
			}
		}
	}
}

export default preview
