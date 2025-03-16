import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconSortUpModule, IconSortUpProps } from '..'

const argTypes: Partial<ArgTypes<IconSortUpProps>> = {
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

const buildComponent = ({ color, size }: IconSortUpProps) => html`
	<mc-icon-sort-up
		size="${size}"
		color="${color}">
	</mc-icon-sort-up>
`

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
