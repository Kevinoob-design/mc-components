import './app.html'
class WebAppController {
	click() {
		alert('Hello, World!')
	}
}

export const WebAppComponent = {
	bindings: {},
	templateUrl: 'app/app.html',
	controller: WebAppController
}
