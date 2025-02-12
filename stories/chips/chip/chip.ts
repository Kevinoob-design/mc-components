import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { ChipProps } from '../../../app/components/chips'

export const argTypes: Partial<ArgTypes<ChipProps>> = {
	label: { control: 'text' },
	bgColor: {
		control: 'select',
		options: ['bg-slate-500/20', 'bg-green-500/20', 'bg-red-500/20'],
		table: { defaultValue: { summary: 'bg-slate-500/20' } }
	}
}

export const buildComponent = ({ label, bgColor }: ChipProps) => html`
	<mc-chip
		label="${label}"
		bg-color="${bgColor}">
	</mc-chip>
`
