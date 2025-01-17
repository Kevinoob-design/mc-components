import type { Preview } from '@storybook/html'

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
				transform: (src, context) =>
					context.originalStoryFn(context.args, context)
			}
		}
	}
}

export default preview
