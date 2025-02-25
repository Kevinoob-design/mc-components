import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { InputTextModule, InputTextProps } from '../../../app/components/inputs'
import {
	IconSearchModule,
	IconEditModule,
	IconXModule,
	IconEnvelopeModule,
	IconUserGroupModule,
	IconInfoModule
} from '../../../app/components/icons'
import { IconButtonModule } from '../../../app/components/buttons'
import {
	argTypes,
	buildComponent,
	buildComponentWithEmailValidation,
	buildComponentWithLeading,
	buildComponentWithLeadingAndTrailing,
	buildComponentWithTrailing
} from './input-text'

const meta = {
	title: 'Library/Inputs/Input-Text',
	parameters: {
		angularJs: {
			module: [
				InputTextModule,
				IconSearchModule,
				IconEditModule,
				IconButtonModule,
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
	name: 'Input with a disclaimer',
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
	render: args => buildComponentWithEmailValidation(args),
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
	render: args => buildComponentWithEmailValidation(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: 'my@custom.com',
		label: 'Email',
		type: 'email',
		errors: ['Email should have a valid format'],
		info: '',
		required: false,
		topLabel: '',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}
