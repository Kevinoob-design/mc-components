import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { InputTextModule, InputTextProps } from '../../../app/components/inputs'
import {
	IconSearchModule,
	IconEditModule,
	IconXModule,
	IconEnvelopeModule,
	IconUserGroupModule
} from '../../../app/components/icons'
import { IconButtonModule } from '../../../app/components/buttons'
import {
	argTypes,
	buildComponent,
	buildComponentWithAll,
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
				IconUserGroupModule
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
		error: '',
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
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}

export const InputWithAll: Story = {
	name: 'Input with all posibilites',
	render: args => buildComponentWithAll(args),
	args: {
		disabled: false,
		debounce: 0,
		placeholder: 'my@custom.com',
		label: 'Email',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}
