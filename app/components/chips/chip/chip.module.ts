import angular from 'angular'
import { chipComponent } from './chip.component'

export const ChipModule = angular.module('ChipModule', []).component('mcChip', chipComponent).name
