import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconSortUpModule, IconSortUpProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-sort-up'

const meta = {
	title: 'Library/Icons/Icon-Sort-Up',
	parameters: {
		angularJs: {
			module: IconSortUpModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconSortUpProps>

export default meta

type Story = StoryObj<IconSortUpProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
