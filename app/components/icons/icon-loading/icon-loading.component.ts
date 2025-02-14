import { IComponentOptions } from 'angular'
import './icon-loading.html'
import './icon-loading.scss'
import { IconLoadingController } from './icon-loading.controller'

export const iconLoadingComponent: IComponentOptions = {
	bindings: {
		circleColor: '@',
		barBgColor: '@',
		barColor: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-loading/icon-loading.html',
	controller: IconLoadingController
}
