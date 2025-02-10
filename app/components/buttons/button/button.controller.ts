import { IComponentController } from 'angular'
import { ButtonProps } from './button.types'

class ButtonController implements IComponentController, ButtonProps {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

export { ButtonController }
