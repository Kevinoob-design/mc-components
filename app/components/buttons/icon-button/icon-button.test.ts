import { expect, describe, test, vi } from 'vitest'
import { IconButtonModule } from './icon-button.module'
import { iconButtonComponent } from './icon-button.component'
import { IconButtonController } from './icon-button.controller'

describe('IconButton', () => {
	describe('IconButtonModule', () => {
		vi.mock('./icon-button.component', () => ({
			iconButtonComponent: {}
		}))

		test('should be defined', () => {
			expect(IconButtonModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconButtonModule).toBe('IconButtonModule')
		})

		vi.unmock('./icon-button.component')
	})

	describe('IconButtonComponent', () => {
		vi.mock('./icon-button.controller', () => ({
			IconButtonController: {}
		}))
		vi.mock('./icon-button.scss', () => ({}))
		vi.mock('./icon-button.html', () => ({}))

		test('should be defined', () => {
			expect(iconButtonComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconButtonComponent.templateUrl).toBeTypeOf('string')
			expect(iconButtonComponent.templateUrl).toBe('app/components/buttons/icon-button/icon-button.html')
		})

		vi.unmock('./icon-button.controller')
	})

	describe('IconButtonController', () => {
		const iconButtonController: IconButtonController = new IconButtonController()

		test('should be defined', () => {
			expect(iconButtonController).toBeDefined()
		})
	})
})
