import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconSortDownModule, IconSortDownProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-sort-down'

const meta = {
	title: 'Library/Icons/Icon-Sort-Down',
	parameters: {
		angularJs: {
			module: IconSortDownModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconSortDownProps>

export default meta

type Story = StoryObj<IconSortDownProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
