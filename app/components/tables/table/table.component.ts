import { IComponentOptions } from 'angular'
import './table.html'
import './table.scss'
import { TableController } from './table.controller'

export const tableComponent: IComponentOptions = {
	transclude: {
		cell1: '?mcTableCell1',
		cell2: '?mcTableCell2',
		cell3: '?mcTableCell3',
		cell4: '?mcTableCell4',
		cell5: '?mcTableCell5',
		cell6: '?mcTableCell6',
		cell7: '?mcTableCell7',
		cell8: '?mcTableCell8',
		cell9: '?mcTableCell9',
		cell10: '?mcTableCell10',
		cell11: '?mcTableCell11',
		cell12: '?mcTableCell12',
		cell13: '?mcTableCell13',
		cell14: '?mcTableCell14',
		cell15: '?mcTableCell15',
		cell16: '?mcTableCell16',
		cell17: '?mcTableCell17',
		cell18: '?mcTableCell18',
		cell19: '?mcTableCell19',
		cell20: '?mcTableCell20'
	},
	bindings: {
		columns: '<',
		rows: '<'
	},
	templateUrl: 'app/components/tables/table/table.html',
	controller: [TableController]
}
