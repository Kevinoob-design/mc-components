import { expect, describe, test, vi } from 'vitest'
import { IconLoadingModule } from './icon-loading.module'
import { iconLoadingComponent } from './icon-loading.component'
import { IconLoadingController } from './icon-loading.controller'

describe('IconLoading', () => {
	describe('IconLoadingModule', () => {
		vi.mock('./icon-loading.component', () => ({
			iconLoadingComponent: {}
		}))

		test('should be defined', () => {
			expect(IconLoadingModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconLoadingModule).toBe('IconLoadingModule')
		})

		vi.unmock('./icon-loading.component')
	})

	describe('IconLoadingComponent', () => {
		vi.mock('./icon-loading.controller', () => ({
			IconLoadingController: {}
		}))
		vi.mock('./icon-loading.scss', () => ({}))
		vi.mock('./icon-loading.html', () => ({}))

		test('should be defined', () => {
			expect(iconLoadingComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconLoadingComponent.templateUrl).toBeTypeOf('string')
			expect(iconLoadingComponent.templateUrl).toBe('app/components/icons/icon-loading/icon-loading.html')
		})

		vi.unmock('./icon-loading.controller')
	})

	describe('IconLoadingController', () => {
		const iconLoadingController: IconLoadingController = new IconLoadingController()

		test('should be defined', () => {
			expect(iconLoadingController).toBeDefined()
		})
	})
})
