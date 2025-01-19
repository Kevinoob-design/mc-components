import { ArgTypes } from '@storybook/html'
import { html } from './template-tags'
import { PrimaryButtonProps } from '../app/components/buttons'

export const argTypes: Partial<ArgTypes<PrimaryButtonProps>> = {
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
}: PrimaryButtonProps) => html`
	<primary-button
		text="${label}"
		disabled="${disabled}"
		loading="${loading}"
		on-click="onClick()">
	</primary-button>
`
