import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconLoadingModule, IconLoadingProps } from '..'

const argTypes: Partial<ArgTypes<IconLoadingProps>> = {
	size: {
		control: 'select',
		options: ['w-4', 'w-8', 'w-10'],
		table: { defaultValue: { summary: 'w-4' } }
	},
	barBgColor: {
		control: 'select',
		options: ['text-slate-900', 'text-white', 'text-green-900', 'text-red-900'],
		table: { defaultValue: { summary: 'text-black' } }
	},
	barColor: {
		control: 'select',
		options: ['fill-black', 'fill-white', 'fill-slate-900', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-black' } }
	},
	circleColor: {
		control: 'select',
		options: ['fill-slate-900', 'fill-white', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-white' } }
	}
}

const buildComponent = ({ barBgColor, barColor, circleColor, size }: IconLoadingProps) => html`
	<mc-icon-loading
		size="${size}"
		bar-bg-color="${barBgColor}"
		bar-color="${barColor}"
		circle-color="${circleColor}">
	</mc-icon-loading>
`

const meta = {
	title: 'Library/Icons/Icon-Loading',
	parameters: {
		angularJs: {
			module: IconLoadingModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconLoadingProps>

export default meta

type Story = StoryObj<IconLoadingProps>

export const Default: Story = {
	args: {
		size: '',
		barBgColor: '',
		barColor: '',
		circleColor: ''
	}
}
