import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconSortDownModule, IconSortDownProps } from '..'

const argTypes: Partial<ArgTypes<IconSortDownProps>> = {
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

const buildComponent = ({ color, size }: IconSortDownProps) => html`
	<mc-icon-sort-down
		size="${size}"
		color="${color}">
	</mc-icon-sort-down>
`

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
