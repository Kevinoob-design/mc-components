import 'angular-animate';
import 'angular-aria';
import 'angular-messages';
import 'angular-material';
import { ComponentsModule } from './components/components.module';
import { WebAppComponent } from './app.component';
import angular from 'angular';

const WebAppModule = angular
	.module('WebAppModule', [ComponentsModule])
	.component('app', WebAppComponent);

export default WebAppModule;
