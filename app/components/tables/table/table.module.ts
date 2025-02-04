import angular from 'angular'
import { tableComponent } from './table.component'

export const TableModule = angular.module('TableModule', []).component('mcTable', tableComponent).name
