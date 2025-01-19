import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { ButtonProps } from '../../../app/components/buttons'

export const argTypes: Partial<ArgTypes<ButtonProps>> = {
	label: { control: 'text' },
	onClick: { action: 'onClick' },
	disabled: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	},
	loading: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	}
}

export const buildComponent = ({ disabled = false, loading = false, label }: ButtonProps) => html`
	<mc-button
		text="${label}"
		disabled="${disabled}"
		loading="${loading}"
		on-click="onClick()">
	</mc-button>
`
