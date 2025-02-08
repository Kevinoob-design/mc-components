export type TableProps<T> = {
	columns: column<T>[]
	rows: row<T[]>
}

export type column<T> = {
	title: string
	key: string
	render?: (row: row<T>, columnKey: string) => string
}

export type row<T> = object & T
