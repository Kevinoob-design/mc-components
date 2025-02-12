import { IComponentOptions } from 'angular'
import './icon-sort-up.html'
import './icon-sort-up.scss'
import { IconSortUpController } from './icon-sort-up.controller'

export const iconSortUpComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-sort-up/icon-sort-up.html',
	controller: IconSortUpController
}
