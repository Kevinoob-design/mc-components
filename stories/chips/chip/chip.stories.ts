import type { Meta, StoryObj } from '@storybook/html'
import { ChipModule, ChipProps } from '../../../app/components/chips'
import { argTypes, buildComponent } from './chip'

const meta = {
	title: 'Library/Chips/Chip',
	parameters: {
		angularJs: {
			module: ChipModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<ChipProps>

export default meta

type Story = StoryObj<ChipProps>

export const Default: Story = {
	args: {
		label: 'Chip Default',
		bgColor: ''
	}
}
