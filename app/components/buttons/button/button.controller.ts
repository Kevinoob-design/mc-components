import { ButtonProps } from './button.types'

class ButtonController implements ButtonProps {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

export { ButtonController }
