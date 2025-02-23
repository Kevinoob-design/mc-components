import { IComponentOptions } from 'angular'
import './icon-x.html'
import './icon-x.scss'
import { IconXController } from './icon-x.controller'

export const iconXComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-x/icon-x.html',
	controller: IconXController
}
