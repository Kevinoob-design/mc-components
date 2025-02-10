import { columns, rows } from '../__test__/mocks/table.mock'
import './app.html'
class WebAppController {
	click() {
		alert('Hello, World!')
	}

	columns = columns
	rows = rows
}

export const WebAppComponent = {
	bindings: {},
	templateUrl: 'app/app.html',
	controller: WebAppController
}
