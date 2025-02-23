import { IComponentOptions } from 'angular'
import './icon-search.html'
import './icon-search.scss'
import { IconSearchController } from './icon-search.controller'

export const iconSearchComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-search/icon-search.html',
	controller: IconSearchController
}
