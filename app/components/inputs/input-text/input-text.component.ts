import { IComponentOptions } from 'angular'
import './input-text.html'
import './input-text.scss'
import { InputTextController } from './input-text.controller'

export const inputTextComponent: IComponentOptions = {
	transclude: {
		leading: '?leadingIcon',
		trailing: '?trailingIcon'
	},
	bindings: {
		placeholder: '@',
		topLabel: '@',
		label: '@',
		info: '@',
		error: '@',
		onChange: '&',
		disabled: '<',
		debounce: '<',
		required: '<',
		type: '@'
	},
	templateUrl: 'app/components/inputs/input-text/input-text.html',
	controller: InputTextController
}
