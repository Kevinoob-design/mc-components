import './table.html'
import './table.scss'
import { TableController } from './table.controller'

export const tableComponent = {
	bindings: {
		columns: '<',
		rows: '<'
	},
	templateUrl: 'app/components/tables/table/table.html',
	controller: ['$sce', TableController]
}
