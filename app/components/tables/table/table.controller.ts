import { ISCEService } from 'angular'
import { column, row, TableProps } from './table.types'

class TableController<T> implements TableProps<T> {
	rows: row<T[]>
	columns: column<T>[]

	constructor(private $sce: ISCEService) {}

	getRowValue(row: row<T>, key: string): string {
		return row[key] ?? ''
	}

	getHeader(column: column<T>): string {
		return column.title
	}

	renderColumn(row: row<T>, column: column<T>): string {
		if (column.render) {
			return this.$sce.trustAsHtml(column.render(row, column.key))
		}

		return this.getRowValue(row, column.key)
	}
}

export { TableController }
