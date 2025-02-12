import { IComponentOptions } from 'angular'
import './icon-sort.html'
import './icon-sort.scss'
import { IconSortController } from './icon-sort.controller'

export const iconSortComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-sort/icon-sort.html',
	controller: IconSortController
}
