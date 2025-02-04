import { ISCEService } from 'angular'
import { column, TableProps } from './table.types'

class TableController implements TableProps {
	rows: unknown[]
	columns: column[]

	constructor(private $sce: ISCEService) {}

	getRowValue(row: object, key: string): string {
		return row[key] ?? ''
	}

	getHeader(column: column): string {
		return column.title
	}

	renderColumn(row: object, index: number): string {
		const column = this.columns[index]

		if (column.render) {
			return this.$sce.trustAsHtml(column.render(column.title, this.getRowValue(row, column.key)))
		}

		return this.getRowValue(row, column.key)
	}
}

export { TableController }
