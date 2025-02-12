import angular from 'angular'
import { iconButtonComponent } from './icon-button.component'

export const IconButtonModule = angular
	.module('IconButtonModule', [])
	.component('mcIconButton', iconButtonComponent).name
