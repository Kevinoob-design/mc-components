import angular from 'angular'
import { PrimaryButtonModule } from './buttons/index'

export const ComponentsModule = angular.module('McComponents', [
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial',
	PrimaryButtonModule
]).name
