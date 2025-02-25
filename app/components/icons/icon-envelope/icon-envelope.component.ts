import { IComponentOptions } from 'angular'
import './icon-envelope.html'
import './icon-envelope.scss'
import { IconEnvelopeController } from './icon-envelope.controller'

export const iconEnvelopeComponent: IComponentOptions = {
	bindings: {
		color: '@',
		size: '@'
	},
	templateUrl: 'app/components/icons/icon-envelope/icon-envelope.html',
	controller: IconEnvelopeController
}
