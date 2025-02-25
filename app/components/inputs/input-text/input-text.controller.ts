import { IComponentController } from 'angular'
import { InputTextProps } from './input-text.types'

class InputTextController implements IComponentController, InputTextProps {
	topLabel: string
	info: string
	errors: string[]
	type: 'number' | 'text' | 'email' | 'password' | 'tel'
	required: boolean
	label: string
	placeholder: string
	disabled?: boolean | undefined
	debounce?: number | undefined
	onChange?: (() => void) | undefined

	getTopLabelRequiredAfterClass() {
		return this.required ? 'after:content-["*"] after:ml-0.5 after:text-red-500' : ''
	}
}

export { InputTextController }
