import { IComponentController } from 'angular'
import { column, row, TableProps } from './table.types'

class TableController<T> implements IComponentController, TableProps<T> {
	rows: row<T[]>
	columns: column<T>[]

	sort(column: column<T>) {
		if (!column.sortable) return

		if (column.comparator) {
			this.rows.sort((val1, val2) =>
				column.comparator!(val1[column.key], val2[column.key], column.sortDirection!)
			)
		} else {
			this.rows.sort((val1, val2) => this.comparator(val1[column.key], val2[column.key], column.sortDirection!))
		}

		const sortedColumn = this.columns.find(col => col.sorted)

		if (sortedColumn && sortedColumn !== column) {
			sortedColumn.sortDirection = undefined
			sortedColumn.sorted = false
		}

		column.sortDirection = column.sortDirection === 'asc' ? 'desc' : 'asc'
		column.sorted = true
	}
	comparator(val1: T[keyof T], val2: T[keyof T], sortDirection: 'asc' | 'desc'): number {
		if (val1 > val2) {
			return sortDirection === 'asc' ? 1 : -1
		}
		if (val1 < val2) {
			return sortDirection === 'asc' ? -1 : 1
		}
		return 0
	}
}

export { TableController }
