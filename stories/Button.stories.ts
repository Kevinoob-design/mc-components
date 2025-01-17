import type { Meta, StoryObj } from '@storybook/html'
import { PrimaryButtonModule } from '../app/components/buttons/primary-button/primary-button.module'

import { argTypes, ButtonProps, createButton } from './Button'
import { withAngularJs } from '../plugins/storybook.angular.decorator'

const meta = {
	title: 'Example/Button',
	tags: ['autodocs'],
	decorators: [withAngularJs()],
	parameters: {
		angularJs: {
			module: PrimaryButtonModule
		}
	},
	argTypes,
	render: args => createButton(args)
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
	args: {
		disabled: false,
		loading: false,
		label: 'Button Default',
		onClick: () => alert('Button clicked')
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Button Disabled'
	}
}

export const Loading: Story = {
	args: {
		loading: true,
		disabled: true,
		label: 'Button Loading'
	}
}
