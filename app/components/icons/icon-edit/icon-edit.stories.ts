import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconEditModule, IconEditProps } from '..'

const argTypes: Partial<ArgTypes<IconEditProps>> = {
	size: {
		control: 'select',
		options: ['w-4', 'w-8', 'w-10'],
		table: { defaultValue: { summary: 'w-4' } }
	},
	color: {
		control: 'select',
		options: ['fill-slate-900', 'fill-white', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-slate-900' } }
	}
}

const buildComponent = ({ color, size }: IconEditProps) => html`
	<mc-icon-edit
		size="${size}"
		color="${color}">
	</mc-icon-edit>
`

const meta = {
	title: 'Library/Icons/Icon-Edit',
	parameters: {
		angularJs: {
			module: [IconEditModule]
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
