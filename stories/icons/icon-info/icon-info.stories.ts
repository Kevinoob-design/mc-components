import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconInfoModule, IconInfoProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-info'

const meta = {
	title: 'Library/Icons/Icon-Info',
	parameters: {
		angularJs: {
			module: IconInfoModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconInfoProps>

export default meta

type Story = StoryObj<IconInfoProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
