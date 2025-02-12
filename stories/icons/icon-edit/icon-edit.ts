import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { IconEditProps } from '../../../app/components/icons'

export const argTypes: Partial<ArgTypes<IconEditProps>> = {
	size: {
		control: 'select',
		options: ['4', '8', '10'],
		table: { defaultValue: { summary: '4' } }
	},
	color: {
		control: 'select',
		options: ['fill-slate-900', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-slate-900' } }
	}
}

export const buildComponent = ({ color, size }: IconEditProps) => html`
	<mc-icon-edit
		size="${size}"
		color="${color}">
	</mc-icon-edit>
`
