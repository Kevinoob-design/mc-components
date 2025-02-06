import { expect, describe, test, vi, beforeEach } from 'vitest'
import { TableModule } from './table.module'
import { tableComponent } from './table.component'
import { TableController } from './table.controller'
import { ISCEService } from 'angular'

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
		let $sce: Partial<ISCEService>
		let tableController: TableController

		beforeEach(() => {
			$sce = {
				trustAsHtml: vi.fn()
			}
			tableController = new TableController($sce as ISCEService)
			tableController.columns = [
				{
					key: 'name',
					title: 'Name'
				},
				{
					key: 'age',
					title: 'Age',
					render: (title, value) => `<b>${value}</b>`
				}
			]
			tableController.rows = [
				{
					name: 'John',
					age: 30
				},
				{
					name: 'Jane',
					age: 25
				}
			]
		})

		test('should be defined', () => {
			expect(tableController).toBeDefined()
		})

		test('getRowValue should return correct value', () => {
			expect(tableController.getRowValue(tableController.rows[0], 'name')).toBe('John')
			expect(tableController.getRowValue(tableController.rows[1], 'age')).toBe(25)
			expect(tableController.getRowValue(tableController.rows[0], 'nonexistent')).toBe('')
		})

		test('getHeader should return correct header', () => {
			expect(tableController.getHeader(tableController.columns[0])).toBe('Name')
			expect(tableController.getHeader(tableController.columns[1])).toBe('Age')
		})

		test('renderColumn should return trusted HTML if render function is defined', () => {
			const [row] = tableController.rows
			const index = 1
			const column = tableController.columns[index]
			const renderedValue = `<b>${row[column.key]}</b>`

			$sce.trustAsHtml = vi.fn().mockReturnValue(renderedValue)

			expect(tableController.renderColumn(row, index)).toBe(renderedValue)
			expect($sce.trustAsHtml).toHaveBeenCalledWith(renderedValue)
		})

		test('renderColumn should return raw value if render function is not defined', () => {
			const [row] = tableController.rows
			const index = 0
			const column = tableController.columns[index]

			expect(tableController.renderColumn(row, index)).toBe(row[column.key])
		})
	})
})
