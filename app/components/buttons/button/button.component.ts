import './button.html'
import './button.scss'
import { ButtonController } from './button.controller'

export const buttonComponent = {
	bindings: {
		text: '@',
		onClick: '&',
		disabled: '<',
		loading: '<'
	},
	templateUrl: 'app/components/buttons/button/button.html',
	controller: ButtonController
}
