export interface Sortable<T> {
	sortable?: boolean
	comparator?: (a: T[keyof T], b: T[keyof T], sortDirection: 'asc' | 'desc') => number
	sortDirection?: 'asc' | 'desc'
	sorted?: boolean
}
