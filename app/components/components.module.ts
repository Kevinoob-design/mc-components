/**
 * AQUÍ SE AGREGAN LOS MÓDULOS DE LOS COMPONENTES NUEVOS
 * ESTE ES EL ENTRY DE LA LIBRERÍA.
 * USAR STORYBOOK `yarn start` PARA PROBAR Y DESARROLLAR NUEVOS COMPONENTES
 */

import angular from 'angular'
import './index.css'
import { PrimaryButtonModule } from './buttons/primary-button/primary-button.module'

const modules = [
	PrimaryButtonModule,
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial'
]

export const McComponentsModule = angular.module('McComponents', modules).name
