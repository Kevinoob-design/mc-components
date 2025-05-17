import type { Meta, StoryObj, ArgTypes } from '@storybook/html'
import { html, logAction } from '../../../../stories/shared'
import { IconButtonModule, IconButtonProps } from '..'
import { IconEditModule } from '../../icons'

const argTypes: Partial<ArgTypes<IconButtonProps>> = {
	onClick: { action: 'onClick' }
}

const buildComponent = ({}: IconButtonProps) => html`
	<mc-icon-button on-click="onClick()">
		<mc-icon-edit></mc-icon-edit>
	</mc-icon-button>
`

const meta = {
	title: 'Library/Buttons/Icon-Button',
	parameters: {
		angularJs: {
			module: [IconButtonModule, IconEditModule]
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconButtonProps>

export default meta

type Story = StoryObj<IconButtonProps>

export const Default: Story = {
	args: {
		onClick: () => logAction('Icon-Button', 'Clicked')
	}
}
