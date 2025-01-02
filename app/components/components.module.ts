import angular from 'angular'
import { PrimaryButtonModule } from './buttons/primary-button/primary-button.module'

const modules = [
	PrimaryButtonModule,
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial'
]

export const McComponentsModule = angular.module('McComponents', modules).name
