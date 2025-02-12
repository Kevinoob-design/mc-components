export type TableProps<T> = {
	columns: column[]
	rows: row<T[]>
}

export type column = {
	title: string
	key: string
	cellIndex?: number
}

export type row<T> = object & T
