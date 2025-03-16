import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { ChipModule, ChipProps } from '..'

const argTypes: Partial<ArgTypes<ChipProps>> = {
	label: { control: 'text' },
	bgColor: {
		control: 'select',
		options: ['bg-slate-500/20', 'bg-green-500/20', 'bg-red-500/20'],
		table: { defaultValue: { summary: 'bg-slate-500/20' } }
	}
}

const buildComponent = ({ label, bgColor }: ChipProps) => html`
	<mc-chip
		label="${label}"
		bg-color="${bgColor}">
	</mc-chip>
`

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
