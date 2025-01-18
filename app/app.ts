/**
 * NO MODIFICAR ESTE ARCHIVO A MENOS DE SER NECESARIO.
 * ESTE ES EL ENTRY PARA SAMPLE (yarn dev:sample).
 * EL HTML A MOSTRAR ES `app.html`
 * USAR STORYBOOK `yarn start` PARA PROBAR Y DESARROLLAR NUEVOS COMPONENTES
 */

import angular from 'angular'
import 'angular-animate'
import 'angular-aria'
import 'angular-messages'
import 'angular-material'
import { McComponentsModule } from './components/components.module'
import { WebAppComponent } from './app.component'

const WebAppModule = angular
	.module('WebAppModule', [McComponentsModule])
	.component('app', WebAppComponent)

export default WebAppModule
