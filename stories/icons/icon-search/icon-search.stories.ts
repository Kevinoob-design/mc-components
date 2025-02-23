import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconSearchModule, IconSearchProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-search'

const meta = {
	title: 'Library/Icons/Icon-Search',
	parameters: {
		angularJs: {
			module: IconSearchModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconSearchProps>

export default meta

type Story = StoryObj<IconSearchProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
