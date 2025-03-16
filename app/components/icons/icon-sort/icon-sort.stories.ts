import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconSortModule, IconSortProps } from '..'

const argTypes: Partial<ArgTypes<IconSortProps>> = {
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

const buildComponent = ({ color, size }: IconSortProps) => html`
	<mc-icon-sort
		size="${size}"
		color="${color}">
	</mc-icon-sort>
`

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
