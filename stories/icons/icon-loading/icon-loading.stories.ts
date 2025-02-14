import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { IconLoadingModule, IconLoadingProps } from '../../../app/components/icons'
import { argTypes, buildComponent } from './icon-loading'

const meta = {
	title: 'Library/Icons/Icon-Loading',
	parameters: {
		angularJs: {
			module: IconLoadingModule
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<IconLoadingProps>

export default meta

type Story = StoryObj<IconLoadingProps>

export const Default: Story = {
	args: {
		size: '',
		barBgColor: '',
		barColor: '',
		circleColor: ''
	}
}
