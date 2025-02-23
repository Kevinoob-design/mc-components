import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { InputTextProps } from '../../../app/components/inputs'

export const argTypes: Partial<ArgTypes<InputTextProps>> = {
	placeholder: { control: 'text' },
	label: { control: 'text' },
	disabled: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	},
	debounce: {
		control: 'number',
		table: { defaultValue: { summary: '0' } }
	}
}

export const buildComponent = ({ disabled = false, placeholder, label }: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-edit></mc-icon-edit>
		</leading-icon>
		<trailing-icon>
			<mc-icon-edit></mc-icon-edit>
		</trailing-icon>
	</mc-input-text>
`
