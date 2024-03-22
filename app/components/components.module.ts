import angular from 'angular';
import { PrimaryButtonModule } from './buttons/index';

const ComponentsModule = angular.module('McComponents', [
	'ngAnimate',
	'ngAria',
	'ngMessages',
	'ngMaterial',
	PrimaryButtonModule,
]).name;

export default ComponentsModule
