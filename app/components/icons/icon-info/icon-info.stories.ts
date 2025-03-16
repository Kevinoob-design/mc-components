import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconInfoModule, IconInfoProps } from '..'

const argTypes: Partial<ArgTypes<IconInfoProps>> = {
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

const buildComponent = ({ color, size }: IconInfoProps) => html`
	<mc-icon-info
		size="${size}"
		color="${color}">
	</mc-icon-info>
`

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
