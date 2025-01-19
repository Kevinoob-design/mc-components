import { PrimaryButtonProps } from './primary-button.types'

class PrimaryButtonController implements PrimaryButtonProps {
	onClick: () => void
	label: string
	disabled?: boolean | undefined
	loading?: boolean | undefined
}

export { PrimaryButtonController }
