import type { Meta, StoryObj } from '@storybook/html'
import { PrimaryButtonModule } from '../app/components/buttons/primary-button/primary-button.module'

import { ButtonProps, createButton } from './Button'
import { withAngularJs } from '../plugins/storybook.angular.decorator'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
	title: 'Example/Button',
	tags: ['autodocs'],
	decorators: [withAngularJs()],
	parameters: {
		angularJs: {
			module: PrimaryButtonModule
		}
	},
	argTypes: {
		backgroundColor: { control: 'color' },
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	},
	args: { onClick: () => alert('hi?') },
	render: args => createButton(args)
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button Primary'
	}
}

export const Secondary: Story = {
	args: {
		label: 'Button Secondary'
	}
}

export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button Large'
	}
}

export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button Small'
	}
}
