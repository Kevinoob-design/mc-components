import { PrimaryButtonController } from './primary-button.controller';
import './primary-button.scss';
import './primary-button.html';

export const primaryButtonComponent = {
	bindings: {
		text: '@',
		onClick: '&',
		disabled: '<',
		loading: '<',
	},
	templateUrl: 'app/components/buttons/primary-button/primary-button.html',
	controller: PrimaryButtonController,
};
