import { IComponentController } from 'angular'
import { InputTextProps } from './input-text.types'

class InputTextController implements IComponentController, InputTextProps {
	placeholder: string
	disabled?: boolean | undefined
	debounce?: number | undefined
	onChange?: (() => void) | undefined
}

export { InputTextController }
