import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconXModule, IconXProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-x'

const meta = {
	title: 'Library/Icons/Icon-X',
	parameters: {
		angularJs: {
			module: IconXModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconXProps>

export default meta

type Story = StoryObj<IconXProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
