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
	required: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	},
	debounce: {
		control: 'number',
		table: { defaultValue: { summary: '0' } }
	},
	type: {
		control: 'select',
		options: ['text', 'password', 'email', 'number', 'tel'],
		table: { defaultValue: { summary: 'text' } }
	},
	topLabel: { control: 'text' },
	info: { control: 'text' },
	errors: { control: 'object' }
}

export const buildComponent = ({
	disabled = false,
	placeholder,
	label,
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
		on-change="onChange(value)">
	</mc-input-text>
`
export const buildComponentWithLeading = ({
	disabled = false,
	placeholder,
	label,
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-search></mc-icon-search>
		</leading-icon>
	</mc-input-text>
`
export const buildComponentWithTrailing = ({
	disabled = false,
	placeholder,
	label,
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
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
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-user-group></mc-icon-user-group>
		</leading-icon>
		<trailing-icon>
			<button
				class="flex flex-col justify-center"
				ng-click="$parent.$ctrl.value = ''">
				<mc-icon-x size="w-3"></mc-icon-x>
			</button>
		</trailing-icon>
	</mc-input-text>
`
export const buildComponentWithEmailValidationIconButton = ({
	disabled = false,
	placeholder,
	label,
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-envelope></mc-icon-envelope>
		</leading-icon>
		<trailing-icon>
			<mc-icon-button ng-click="$parent.$ctrl.value = ''">
				<mc-icon-x size="w-3"></mc-icon-x>
			</mc-icon-button>
		</trailing-icon>
	</mc-input-text>
`

export const buildComponentWithEmailValidationButton = ({
	disabled = false,
	placeholder,
	label,
	debounce,
	type,
	required,
	info,
	topLabel
}: InputTextProps) => html`
	<mc-input-text
		label="${label}"
		placeholder="${placeholder}"
		disabled="${disabled}"
		debounce="${debounce}"
		type="${type}"
		required="${required}"
		top-label="${topLabel}"
		info="${info}"
		errors="errors"
		on-change="onChange()">
		<leading-icon>
			<mc-icon-envelope></mc-icon-envelope>
		</leading-icon>
		<trailing-icon>
			<mc-button> Subscribe </mc-button>
		</trailing-icon>
	</mc-input-text>
`
