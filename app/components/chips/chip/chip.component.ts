import { IComponentOptions } from 'angular'
import './chip.html'
import './chip.scss'
import { ChipController } from './chip.controller'

export const chipComponent: IComponentOptions = {
	bindings: {
		label: '@',
		bgColor: '@'
	},
	templateUrl: 'app/components/chips/chip/chip.html',
	controller: ChipController
}
