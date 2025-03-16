import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconSearchModule, IconSearchProps } from '..'

const argTypes: Partial<ArgTypes<IconSearchProps>> = {
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

const buildComponent = ({ color, size }: IconSearchProps) => html`
	<mc-icon-search
		size="${size}"
		color="${color}">
	</mc-icon-search>
`

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
