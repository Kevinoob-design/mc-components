import './table.html'
import './table.scss'
import { TableController } from './table.controller'
import { IComponentOptions } from 'angular'

export const tableComponent: IComponentOptions = {
	transclude: {
		cell0: '?mcTableCell0',
		cell1: '?mcTableCell1',
		cell2: '?mcTableCell2',
		cell3: '?mcTableCell3',
		cell4: '?mcTableCell4',
		cell5: '?mcTableCell5',
		cell6: '?mcTableCell6',
		cell7: '?mcTableCell7',
		cell8: '?mcTableCell8',
		cell9: '?mcTableCell9',
		cell10: '?mcTableCell10'
	},
	bindings: {
		columns: '<',
		rows: '<'
	},
	templateUrl: 'app/components/tables/table/table.html',
	controller: [TableController]
}
