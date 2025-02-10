export type TableProps<T> = {
	columns: column[]
	rows: row<T[]>
}

export type column = {
	title: string
	key: string
}

export type row<T> = object & T
