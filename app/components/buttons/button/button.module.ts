import angular from 'angular'
import { buttonComponent } from './button.component'

export const ButtonModule = angular.module('ButtonModule', []).component('mcButton', buttonComponent).name
