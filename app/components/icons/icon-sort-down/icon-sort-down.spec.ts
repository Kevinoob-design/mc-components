import { expect, describe, test, vi } from 'vitest'
import { IconSortDownModule } from './icon-sort-down.module'
import { iconSortDownComponent } from './icon-sort-down.component'
import { IconSortDownController } from './icon-sort-down.controller'

describe('IconSortDown', () => {
	describe('IconSortDownModule', () => {
		vi.mock('./icon-sort-down.component', () => ({
			iconSortDownComponent: {}
		}))

		test('should be defined', () => {
			expect(IconSortDownModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconSortDownModule).toBe('IconSortDownModule')
		})

		vi.unmock('./icon-sort-down.component')
	})

	describe('IconSortDownComponent', () => {
		vi.mock('./icon-sort-down.controller', () => ({
			IconSortDownController: {}
		}))
		vi.mock('./icon-sort-down.scss', () => ({}))
		vi.mock('./icon-sort-down.html', () => ({}))

		test('should be defined', () => {
			expect(iconSortDownComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconSortDownComponent.templateUrl).toBeTypeOf('string')
			expect(iconSortDownComponent.templateUrl).toBe('app/components/icons/icon-sort-down/icon-sort-down.html')
		})

		vi.unmock('./icon-sort-down.controller')
	})

	describe('IconSortDownController', () => {
		const iconSortDownController: IconSortDownController = new IconSortDownController()

		test('should be defined', () => {
			expect(iconSortDownController).toBeDefined()
		})
	})
})
