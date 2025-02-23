/**
 * AQUÍ SE AGREGAN LOS MÓDULOS DE LOS COMPONENTES NUEVOS
 * ESTE ES EL ENTRY DE LA LIBRERÍA.
 * USAR STORYBOOK `yarn start` PARA PROBAR Y DESARROLLAR NUEVOS COMPONENTES
 */

import angular from 'angular'
import './index.css'
import { InputTextModule } from './inputs'
import { IconButtonModule, ButtonModule } from './buttons'
import { IconEditModule, IconSortDownModule, IconSortUpModule, IconSortModule, IconLoadingModule } from './icons'
import { ChipModule } from './chips'
import { TableModule } from './tables'

const modules = [
	InputTextModule,
	IconLoadingModule,
	IconSortDownModule,
	IconSortUpModule,
	IconSortModule,
	IconButtonModule,
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
