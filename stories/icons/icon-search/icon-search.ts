import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { IconSearchProps } from '../../../app/components/icons'

export const argTypes: Partial<ArgTypes<IconSearchProps>> = {
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

export const buildComponent = ({ color, size }: IconSearchProps) => html`
	<mc-icon-search
		size="${size}"
		color="${color}">
	</mc-icon-search>
`
