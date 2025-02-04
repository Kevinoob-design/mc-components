export type TableProps = {
	columns: column[]
	rows: unknown[]
}

export type column = {
	title: string
	key: string
	render?: (template: string, value: string) => string
}
