import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconSortModule, IconSortProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-sort'

const meta = {
	title: 'Library/Icons/Icon-Sort',
	parameters: {
		angularJs: {
			module: IconSortModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconSortProps>

export default meta

type Story = StoryObj<IconSortProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
