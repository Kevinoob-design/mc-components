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
