import { IComponentOptions } from 'angular'
import './icon-button.html'
import './icon-button.scss'
import { IconButtonController } from './icon-button.controller'

export const iconButtonComponent: IComponentOptions = {
	transclude: true,
	bindings: {
		onClick: '&'
	},
	templateUrl: 'app/components/buttons/icon-button/icon-button.html',
	controller: IconButtonController
}
