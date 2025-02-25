import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconEnvelopeModule, IconEnvelopeProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-envelope'

const meta = {
	title: 'Library/Icons/Icon-Envelope',
	parameters: {
		angularJs: {
			module: IconEnvelopeModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconEnvelopeProps>

export default meta

type Story = StoryObj<IconEnvelopeProps>

export const Default: Story = {
	args: {
		size: '',
		color: ''
	}
}
