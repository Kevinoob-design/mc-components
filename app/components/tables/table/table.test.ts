import { expect, describe, test, vi, beforeEach } from 'vitest'
import { TableModule } from './table.module'
import { tableComponent } from './table.component'
import { TableController } from './table.controller'

describe('Table', () => {
	describe('TableModule', () => {
		vi.mock('./table.component', () => ({
			tableComponent: {}
		}))

		test('should be defined', () => {
			expect(TableModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(TableModule).toBe('TableModule')
		})

		vi.unmock('./table.component')
	})

	describe('TableComponent', () => {
		vi.mock('./table.controller', () => ({
			TableController: {}
		}))
		vi.mock('./table.scss', () => ({}))
		vi.mock('./table.html', () => ({}))

		test('should be defined', () => {
			expect(tableComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(tableComponent.templateUrl).toBeTypeOf('string')
			expect(tableComponent.templateUrl).toBe('app/components/tables/table/table.html')
		})

		vi.unmock('./table.controller')
	})

	describe('TableController', () => {
		let tableController: TableController<{ id: number; name: string }>

		beforeEach(() => {
			tableController = new TableController()
			tableController.rows = [
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jane' },
				{ id: 3, name: 'Bob' }
			]
			tableController.columns = [
				{ key: 'id', title: 'ID', sortable: true },
				{ key: 'name', title: 'Name', sortable: true }
			]
		})

		test('should be defined', () => {
			expect(tableController).toBeDefined()
		})

		test('should do nothing if column is not sortable', () => {
			const nonSortableColumn = { key: 'nonSortable', title: 'Non Sortable', sortable: false }
			tableController.sort(nonSortableColumn)
			expect(tableController.rows).toEqual([
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jane' },
				{ id: 3, name: 'Bob' }
			])
		})

		test('should use custom comparator if provided', () => {
			const columnWithComparator = {
				key: 'id',
				title: 'ID',
				sortable: true,
				comparator: (val1: number | string, val2: number | string) => (val1 as number) - (val2 as number)
			}
			tableController.sort(columnWithComparator)
			expect(tableController.rows).toEqual([
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jane' },
				{ id: 3, name: 'Bob' }
			])
		})

		test('should use default comparator if not provided', () => {
			const columnWithoutComparator = { key: 'name', title: 'Name', sortable: true }
			tableController.sort(columnWithoutComparator)
			expect(tableController.rows).toEqual([
				{ id: 1, name: 'John' },
				{ id: 2, name: 'Jane' },
				{ id: 3, name: 'Bob' }
			])
		})

		test('should leave rows unsorted with same values', () => {
			const columnWithoutComparator = { key: 'name', title: 'Name', sortable: true }
			tableController.rows = [
				{ id: 1, name: 'John' },
				{ id: 2, name: 'John' },
				{ id: 3, name: 'John' }
			]
			tableController.sort(columnWithoutComparator)
			expect(tableController.rows).toEqual([
				{ id: 1, name: 'John' },
				{ id: 2, name: 'John' },
				{ id: 3, name: 'John' }
			])
		})

		test('should toggle sorting direction', () => {
			const column = { key: 'id', title: 'ID', sortable: true, sortDirection: 'asc' as 'asc' | 'desc' }
			tableController.sort(column)
			expect(column.sortDirection).toBe('desc')
			tableController.sort(column)
			expect(column.sortDirection).toBe('asc')
			tableController.sort(column)
			expect(column.sortDirection).toBe('desc')
		})

		test('should reset other columns sorting state', () => {
			const column1 = { key: 'id', title: 'ID', sortable: true, sorted: true, sortDirection: 'asc' }
			const column2 = { key: 'name', title: 'Name', sortable: true }
			tableController.columns = [column1, column2]
			tableController.sort(column2)
			expect(column1.sorted).toBe(false)
			expect(column1.sortDirection).toBeUndefined()
		})
	})
})
