import { IComponentController } from 'angular'
import { column, row, TableProps } from './table.types'

class TableController<T> implements IComponentController, TableProps<T> {
	rows: row<T[]>
	columns: column[]
}

export { TableController }
