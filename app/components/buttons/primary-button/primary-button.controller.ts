import { PrimaryButtonProps } from './primary-button.types'

class PrimaryButtonController implements PrimaryButtonProps {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

export { PrimaryButtonController }
