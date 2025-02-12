import { IComponentOptions } from 'angular'
import './icon-edit.html'
import './icon-edit.scss'
import { IconEditController } from './icon-edit.controller'

export const iconEditComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-edit/icon-edit.html',
	controller: IconEditController
}
