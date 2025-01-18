/**
 * NO MODIFICAR ESTE ARCHIVO. ESTE ES EL ENTRY POINT PARA SAMPLE (yarn dev:sample).
 * EL HTML A MOSTRAR ES `app.html`
 * USAR STORYBOOK `yarn start` PARA PROBAR Y DESARROLLAR NUEVOS COMPONENTES
 */

import angular from 'angular'
import './app/app'

const component = () => {
	// eslint-disable-next-line angular/document-service
	const element = document.createElement('div')

	element.innerHTML = '<app></app>'

	return element
}

angular.element(() => {
	angular.bootstrap(document, ['WebAppModule'])
})

// eslint-disable-next-line angular/document-service
document.body.appendChild(component())
