import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { InputTextModule, InputTextProps } from '../../../app/components/inputs'
import { IconEditModule } from '../../../app/components/icons'
import { argTypes, buildComponent } from './input-text'

const meta = {
	title: 'Library/Inputs/Input-Text',
	parameters: {
		angularJs: {
			module: [InputTextModule, IconEditModule]
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
		debounce: 0,
		placeholder: 'This is a text story',
		label: 'Type something',
		onChange: () => componentLogAction('Input-Text', 'Changed')
	}
}
