import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { IconButtonProps } from '../../../app/components/buttons'

export const argTypes: Partial<ArgTypes<IconButtonProps>> = {
	onClick: { action: 'onClick' }
}

export const buildComponent = ({}: IconButtonProps) => html`
	<mc-icon-button on-click="onClick()">
		<mc-icon-edit></mc-icon-edit>
	</mc-icon-button>
`
