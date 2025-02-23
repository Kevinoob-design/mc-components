import { expect, describe, test, vi } from 'vitest'
import { IconSearchModule } from './icon-search.module'
import { iconSearchComponent } from './icon-search.component'
import { IconSearchController } from './icon-search.controller'

describe('IconSearch', () => {
	describe('IconSearchModule', () => {
		vi.mock('./icon-search.component', () => ({
			iconSearchComponent: {}
		}))

		test('should be defined', () => {
			expect(IconSearchModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconSearchModule).toBe('IconSearchModule')
		})

		vi.unmock('./icon-search.component')
	})

	describe('IconSearchComponent', () => {
		vi.mock('./icon-search.controller', () => ({
			IconSearchController: {}
		}))
		vi.mock('./icon-search.scss', () => ({}))
		vi.mock('./icon-search.html', () => ({}))

		test('should be defined', () => {
			expect(iconSearchComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconSearchComponent.templateUrl).toBeTypeOf('string')
			expect(iconSearchComponent.templateUrl).toBe('app/components/icons/icon-search/icon-search.html')
		})

		vi.unmock('./icon-search.controller')
	})

	describe('IconSearchController', () => {
		const iconSearchController: IconSearchController = new IconSearchController()

		test('should be defined', () => {
			expect(iconSearchController).toBeDefined()
		})
	})
})
