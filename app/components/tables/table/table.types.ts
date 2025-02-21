import { Sortable } from '../../../shared/types'

export type TableProps<T> = {
	columns: column<T>[]
	rows: row<T[]>
}

export type column<T> = Sortable<row<T>> & {
	title: string
	key: string
	cellIndex?: number
}

export type row<T> = object & T
