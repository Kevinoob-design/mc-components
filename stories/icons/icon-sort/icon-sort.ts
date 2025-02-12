import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { IconSortProps } from '../../../app/components/icons'

export const argTypes: Partial<ArgTypes<IconSortProps>> = {
	size: {
		control: 'select',
		options: ['4', '8', '10'],
		table: { defaultValue: { summary: '4' } }
	},
	color: {
		control: 'select',
		options: ['fill-slate-900', 'fill-white', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-slate-900' } }
	}
}

export const buildComponent = ({ color, size }: IconSortProps) => html`
	<mc-icon-sort
		size="${size}"
		color="${color}">
	</mc-icon-sort>
`
