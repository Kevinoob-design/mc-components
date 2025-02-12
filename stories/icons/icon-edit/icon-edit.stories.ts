import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconEditModule, IconEditProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-edit'

const meta = {
	title: 'Library/Icons/Icon-Edit',
	parameters: {
		angularJs: {
			module: IconEditModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconEditProps>

export default meta

type Story = StoryObj<IconEditProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
