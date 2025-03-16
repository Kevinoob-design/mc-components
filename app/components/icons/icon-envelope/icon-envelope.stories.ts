import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html } from '../../../../stories/shared'
import { IconEnvelopeModule, IconEnvelopeProps } from '..'

const argTypes: Partial<ArgTypes<IconEnvelopeProps>> = {
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

const buildComponent = ({ color, size }: IconEnvelopeProps) => html`
	<mc-icon-envelope
		size="${size}"
		color="${color}">
	</mc-icon-envelope>
`

const meta = {
	title: 'Library/Icons/Icon-Envelope',
	parameters: {
		angularJs: {
			module: IconEnvelopeModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconEnvelopeProps>

export default meta

type Story = StoryObj<IconEnvelopeProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
