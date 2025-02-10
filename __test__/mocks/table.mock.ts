import { column, row } from '../../app/components/tables'
import { html } from '../../stories/shared'

export type mockRow = {
	name: string
	function: string
	status: string
	employedDate: string
}

export const rows: row<mockRow[]> = [
	{
		name: 'John Michael',
		function: 'Manager',
		status: 'ONLINE',
		employedDate: '2018-01-01'
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
		employedDate: '2018-01-01'
	},
	{
		name: 'Jane Michael',
		function: 'Manager',
		status: 'OFFLINE',
		employedDate: '2018-01-01'
	}
]

export const columns: column[] = [
	{
		title: 'Member',
		key: 'name'
	},
	{
		title: 'Function',
		key: 'function'
	},
	{
		title: 'Status',
		key: 'status'
	},
	{
		title: 'Employed',
		key: 'employedDate'
	},
	{
		title: '',
		key: ''
	},
	{
		title: '',
		key: ''
	}
]
