import { expect, describe, test, vi } from 'vitest'
import { IconSortModule } from './icon-sort.module'
import { iconSortComponent } from './icon-sort.component'
import { IconSortController } from './icon-sort.controller'

describe('IconSort', () => {
	describe('IconSortModule', () => {
		vi.mock('./icon-sort.component', () => ({
			iconSortComponent: {}
		}))

		test('should be defined', () => {
			expect(IconSortModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconSortModule).toBe('IconSortModule')
		})

		vi.unmock('./icon-sort.component')
	})

	describe('IconSortComponent', () => {
		vi.mock('./icon-sort.controller', () => ({
			IconSortController: {}
		}))
		vi.mock('./icon-sort.scss', () => ({}))
		vi.mock('./icon-sort.html', () => ({}))

		test('should be defined', () => {
			expect(iconSortComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconSortComponent.templateUrl).toBeTypeOf('string')
			expect(iconSortComponent.templateUrl).toBe('app/components/icons/icon-sort/icon-sort.html')
		})

		vi.unmock('./icon-sort.controller')
	})

	describe('IconSortController', () => {
		const iconSortController: IconSortController = new IconSortController()

		test('should be defined', () => {
			expect(iconSortController).toBeDefined()
		})
	})
})
