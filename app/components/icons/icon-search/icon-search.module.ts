import angular from 'angular'
import { iconSearchComponent } from './icon-search.component'

export const IconSearchModule = angular
	.module('IconSearchModule', [])
	.component('mcIconSearch', iconSearchComponent).name
