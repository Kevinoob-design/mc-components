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

export const buildComponent = ({ disabled = false, placeholder, label, debounce }: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		on-change="onChange(value)">
	</mc-input-text>
`
export const buildComponentWithLeading = ({ disabled = false, placeholder, label, debounce }: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-search></mc-icon-search>
		</leading-icon>
	</mc-input-text>
`
export const buildComponentWithTrailing = ({ disabled = false, placeholder, label, debounce }: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		on-change="onChange()">
		<trailing-icon>
			<mc-icon-edit></mc-icon-edit>
		</trailing-icon>
	</mc-input-text>
`

export const buildComponentWithLeadingAndTrailing = ({
	disabled = false,
	placeholder,
	label,
	debounce
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-search></mc-icon-search>
		</leading-icon>
		<trailing-icon>
			<button ng-click="$parent.$ctrl.value = ''">
				<mc-icon-x></mc-icon-x>
			</button>
		</trailing-icon>
	</mc-input-text>
`
export const buildComponentWithAll = ({ disabled = false, placeholder, label, debounce }: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-search></mc-icon-search>
		</leading-icon>
		<trailing-icon>
			<mc-icon-edit></mc-icon-edit>
		</trailing-icon>
	</mc-input-text>
`
