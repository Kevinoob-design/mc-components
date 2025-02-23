import angular from 'angular'
import { inputTextComponent } from './input-text.component'

export const InputTextModule = angular.module('InputTextModule', []).component('mcInputText', inputTextComponent).name
