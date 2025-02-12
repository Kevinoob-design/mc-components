import { IComponentOptions } from 'angular'
import './icon-sort-down.html'
import './icon-sort-down.scss'
import { IconSortDownController } from './icon-sort-down.controller'

export const iconSortDownComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-sort-down/icon-sort-down.html',
	controller: IconSortDownController
}
