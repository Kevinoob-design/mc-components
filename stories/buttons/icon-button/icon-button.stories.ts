import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconButtonModule, IconButtonProps } from '../../../app/components/buttons'
import { IconEditModule } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-button'

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
		onClick: () => componentLogAction('Icon-Button', 'Clicked')
	}
}
