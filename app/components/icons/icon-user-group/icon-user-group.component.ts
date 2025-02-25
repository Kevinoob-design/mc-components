import { IComponentOptions } from 'angular'
import './icon-user-group.html'
import './icon-user-group.scss'
import { IconUserGroupController } from './icon-user-group.controller'

export const iconUserGroupComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-user-group/icon-user-group.html',
	controller: IconUserGroupController
}
