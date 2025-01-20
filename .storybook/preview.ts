import type { Preview } from '@storybook/html'
import { prettifyStorybookPreview } from '../plugins/storybook.prettier'
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
				transform: (src, context) => prettifyStorybookPreview(context.originalStoryFn(context.args, context))
			}
		}
	}
}

export default preview
