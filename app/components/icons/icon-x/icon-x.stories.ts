import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconXModule, IconXProps } from '..'

const argTypes: Partial<ArgTypes<IconXProps>> = {
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

const buildComponent = ({ color, size }: IconXProps) => html`
	<mc-icon-x
		size="${size}"
		color="${color}">
	</mc-icon-x>
`

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
