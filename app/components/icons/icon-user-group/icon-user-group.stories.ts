import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconUserGroupModule, IconUserGroupProps } from '..'

const argTypes: Partial<ArgTypes<IconUserGroupProps>> = {
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

const buildComponent = ({ color, size }: IconUserGroupProps) => html`
	<mc-icon-user-group
		size="${size}"
		color="${color}">
	</mc-icon-user-group>
`

const meta = {
	title: 'Library/Icons/Icon-User-Group',
	parameters: {
		angularJs: {
			module: IconUserGroupModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconUserGroupProps>

export default meta

type Story = StoryObj<IconUserGroupProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
