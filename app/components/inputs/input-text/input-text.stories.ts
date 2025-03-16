import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html, componentLogAction } from '../../../../stories/shared'
import { InputTextModule, InputTextProps } from '..'
import {
	IconSearchModule,
	IconEditModule,
	IconXModule,
	IconEnvelopeModule,
	IconUserGroupModule,
	IconInfoModule
} from '../../icons'
import { IconButtonModule, ButtonModule } from '../../buttons'

const argTypes: Partial<ArgTypes<InputTextProps>> = {
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

const buildComponent = ({
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
const buildComponentWithLeading = ({
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
const buildComponentWithTrailing = ({
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

const buildComponentWithLeadingAndTrailing = ({
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
const buildComponentWithEmailValidationIconButton = ({
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

const buildComponentWithEmailValidationButton = ({
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

const meta = {
	title: 'Library/Inputs/Input-Text',
	parameters: {
		angularJs: {
			module: [
				InputTextModule,
				IconSearchModule,
				IconEditModule,
				IconButtonModule,
				ButtonModule,
				IconXModule,
				IconEnvelopeModule,
				IconUserGroupModule,
				IconInfoModule
			]
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<InputTextProps>

export default meta

type Story = StoryObj<InputTextProps>

export const Default: Story = {
	args: {
		disabled: false,
		required: false,
		type: 'text',
		debounce: 0,
		placeholder: '',
		label: '',
		topLabel: '',
		info: '',
		errors: [],
		onChange: value => componentLogAction('Input-Text', `Changed: ${value}`)
	}
}

export const Info: Story = {
	name: 'Input password with a disclaimer',
	args: {
		disabled: false,
		required: false,
		type: 'password',
		debounce: 0,
		placeholder: '',
		label: '',
		topLabel: '',
		info: 'Your password should be at least 8 characters long',
		errors: [],
		onChange: value => componentLogAction('Input-Text', `Changed: ${value}`)
	}
}

export const InputWithLeading: Story = {
	name: 'Input with Leading Icon',
	render: args => buildComponentWithLeading(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: '',
		label: '',
		errors: [],
		info: '',
		required: false,
		topLabel: '',
		type: 'text',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}

export const InputWithTrailing: Story = {
	name: 'Input with Trailing Icon',
	render: args => buildComponentWithTrailing(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: '',
		label: '',
		errors: [],
		info: '',
		required: false,
		topLabel: '',
		type: 'text',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}

export const InputWithLeadingAndTrailing: Story = {
	name: 'Input with Leading and Trailing custom clear button',
	render: args => buildComponentWithLeadingAndTrailing(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: '',
		label: '',
		errors: [],
		info: '',
		required: false,
		topLabel: '',
		type: 'text',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}

export const InputWithEmailValidation: Story = {
	name: 'Input that validates email',
	render: args => buildComponentWithEmailValidationIconButton(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: 'my@custom.com',
		label: 'Email',
		type: 'email',
		info: '',
		required: false,
		topLabel: '',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}

export const InputWithEmailValidationAndErrorMessage: Story = {
	name: 'Input that validates email and shows corresponding error message',
	render: args => buildComponentWithEmailValidationButton(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: 'my@custom.com',
		label: 'Email',
		type: 'email',
		errors: ['Email should have a valid format'],
		info: 'You will be added to a newsletter',
		required: false,
		topLabel: '',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}
