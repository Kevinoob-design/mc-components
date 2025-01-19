import type { Meta, StoryObj } from '@storybook/html'
import { withAngularJs } from '../../../plugins/storybook.angular.decorator'
import { componentLogAction } from '../../shared'
import { ButtonModule, ButtonProps } from '../../../app/components/buttons'
import { argTypes, buildComponent } from './button'

const meta = {
	title: 'Library/Buttons/Button',
	tags: ['autodocs'],
	decorators: [withAngularJs()],
	parameters: {
		angularJs: {
			module: ButtonModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
	args: {
		disabled: false,
		loading: false,
		label: 'Button Default',
		onClick: () => componentLogAction('Button', 'Clicked')
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
