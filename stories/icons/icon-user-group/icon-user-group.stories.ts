import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconUserGroupModule, IconUserGroupProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-user-group'

const meta = {
	title: 'Library/Icons/Icon-User-Group',
	parameters: {
		angularJs: {
			module: IconUserGroupModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconUserGroupProps>

export default meta

type Story = StoryObj<IconUserGroupProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
