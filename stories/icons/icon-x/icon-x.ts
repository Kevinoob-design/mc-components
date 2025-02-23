import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { IconXProps } from '../../../app/components/icons'

export const argTypes: Partial<ArgTypes<IconXProps>> = {
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

export const buildComponent = ({ color, size }: IconXProps) => html`
	<mc-icon-x
		size="${size}"
		color="${color}">
	</mc-icon-x>
`
