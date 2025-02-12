/**
 * AQUÍ SE AGREGAN LOS MÓDULOS DE LOS COMPONENTES NUEVOS
 * ESTE ES EL ENTRY DE LA LIBRERÍA.
 * USAR STORYBOOK `yarn start` PARA PROBAR Y DESARROLLAR NUEVOS COMPONENTES
 */

import angular from 'angular'
import './index.css'
import { IconEditModule } from './icons'
import { ChipModule } from './chips'
import { TableModule } from './tables'
import { ButtonModule } from './buttons'

const modules = [
	TableModule,
	ButtonModule,
	ChipModule,
	IconEditModule,
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial'
]

export const McComponentsModule = angular.module('McComponents', modules).name
