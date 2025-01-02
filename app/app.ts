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
