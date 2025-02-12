import { expect, describe, test, vi } from 'vitest'
import { IconSortUpModule } from './icon-sort-up.module'
import { iconSortUpComponent } from './icon-sort-up.component'
import { IconSortUpController } from './icon-sort-up.controller'

describe('IconSortUp', () => {
	describe('IconSortUpModule', () => {
		vi.mock('./icon-sort-up.component', () => ({
			iconSortUpComponent: {}
		}))

		test('should be defined', () => {
			expect(IconSortUpModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconSortUpModule).toBe('IconSortUpModule')
		})

		vi.unmock('./icon-sort-up.component')
	})

	describe('IconSortUpComponent', () => {
		vi.mock('./icon-sort-up.controller', () => ({
			IconSortUpController: {}
		}))
		vi.mock('./icon-sort-up.scss', () => ({}))
		vi.mock('./icon-sort-up.html', () => ({}))

		test('should be defined', () => {
			expect(iconSortUpComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconSortUpComponent.templateUrl).toBeTypeOf('string')
			expect(iconSortUpComponent.templateUrl).toBe('app/components/icons/icon-sort-up/icon-sort-up.html')
		})

		vi.unmock('./icon-sort-up.controller')
	})

	describe('IconSortUpController', () => {
		const iconSortUpController: IconSortUpController = new IconSortUpController()

		test('should be defined', () => {
			expect(iconSortUpController).toBeDefined()
		})
	})
})
