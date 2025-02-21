import { column, row } from '../../app/components/tables'

export type mockRow = {
	name: string
	function: string
	status: 'ONLINE' | 'OFFLINE'
	employedDate: string
}

export const rows: row<mockRow[]> = [
	{
		name: 'John Michael',
		function: 'Manager',
		status: 'ONLINE',
		employedDate: '2018-01-03'
	},
	{
		name: 'Jane Doe',
		function: 'Developer',
		status: 'OFFLINE',
		employedDate: '2018-01-01'
	},
	{
		name: 'John Doe',
		function: 'Developer',
		status: 'ONLINE',
		employedDate: '2018-01-04'
	},
	{
		name: 'Jane Michael',
		function: 'Manager',
		status: 'OFFLINE',
		employedDate: '2018-01-05'
	}
]

export const columns: column<mockRow>[] = [
	{
		title: 'Member',
		key: 'name',
		sortable: true
	},
	{
		title: 'Function',
		key: 'function',
		sortable: true
	},
	{
		title: 'Status',
		key: 'status',
		cellIndex: 3,
		sortable: true
	},
	{
		title: 'Employed',
		key: 'employedDate',
		sortable: true
	},
	{
		title: '',
		key: 'edit',
		cellIndex: 5
	},
	{
		title: '',
		key: 'save',
		cellIndex: 6
	}
]
