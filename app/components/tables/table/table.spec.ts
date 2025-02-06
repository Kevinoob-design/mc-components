import { expect, describe, test, vi } from 'vitest'
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
		const tableController: TableController = new TableController()

		test('should be defined', () => {
			expect(tableController).toBeDefined()
		})
	})
})
