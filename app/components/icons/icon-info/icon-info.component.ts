import { IComponentOptions } from 'angular'
import './icon-info.html'
import './icon-info.scss'
import { IconInfoController } from './icon-info.controller'

export const iconInfoComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-info/icon-info.html',
	controller: IconInfoController
}
