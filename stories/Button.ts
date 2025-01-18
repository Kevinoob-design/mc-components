import { ArgTypes } from '@storybook/html'
import { html } from './shared'

export interface ButtonProps {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

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

export const createButton = ({
	disabled = false,
	loading = false,
	label
}: ButtonProps) => html`
			<primary-button
		text="${label}"
		disabled="${disabled}"
		loading="${loading}"
		on-click="onClick()">
	</primary-button>
`
