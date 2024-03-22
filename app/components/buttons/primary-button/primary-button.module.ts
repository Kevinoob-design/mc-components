import angular from 'angular';
import { primaryButtonComponent } from './primary-button.component';

export const PrimaryButtonModule = angular
	.module('PrimaryButtonModule', [])
	.component('primaryButton', primaryButtonComponent).name;
