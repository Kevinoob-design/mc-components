import type { Meta, StoryObj, ArgTypes } from '@storybook/html'
import { html, componentLogAction } from '../../../../stories/shared'
import { ButtonModule, ButtonProps } from '..'
import { IconLoadingModule } from '../../icons'

const argTypes: Partial<ArgTypes<ButtonProps>> = {
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

const buildComponent = ({ disabled = false, loading = false, label }: ButtonProps) => html`
	<mc-button
		text="${label}"
		disabled="${disabled}"
		loading="${loading}"
		on-click="onClick()">
	</mc-button>
`

const meta = {
	title: 'Library/Buttons/Button',
	parameters: {
		angularJs: {
			module: [ButtonModule, IconLoadingModule]
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<ButtonProps>

export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
	args: {
		disabled: false,
		loading: false,
		label: 'Button Default',
		onClick: () => componentLogAction('Button', 'Clicked')
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		label: 'Button Disabled'
	}
}

// export const Loading: Story = {
// 	args: {
// 		loading: true,
// 		disabled: true,
// 		label: 'Button Loading'
// 	}
// }
