import angular from 'angular'
import { iconLoadingComponent } from './icon-loading.component'

export const IconLoadingModule = angular
	.module('IconLoadingModule', [])
	.component('mcIconLoading', iconLoadingComponent).name
