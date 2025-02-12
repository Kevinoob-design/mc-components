import { expect, describe, test, vi } from 'vitest'
import { IconEditModule } from './icon-edit.module'
import { iconEditComponent } from './icon-edit.component'
import { IconEditController } from './icon-edit.controller'

describe('IconEdit', () => {
	describe('IconEditModule', () => {
		vi.mock('./icon-edit.component', () => ({
			iconEditComponent: {}
		}))

		test('should be defined', () => {
			expect(IconEditModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconEditModule).toBe('IconEditModule')
		})

		vi.unmock('./icon-edit.component')
	})

	describe('IconEditComponent', () => {
		vi.mock('./icon-edit.controller', () => ({
			IconEditController: {}
		}))
		vi.mock('./icon-edit.scss', () => ({}))
		vi.mock('./icon-edit.html', () => ({}))

		test('should be defined', () => {
			expect(iconEditComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconEditComponent.templateUrl).toBeTypeOf('string')
			expect(iconEditComponent.templateUrl).toBe('app/components/icons/icon-edit/icon-edit.html')
		})

		vi.unmock('./icon-edit.controller')
	})

	describe('IconEditController', () => {
		const iconEditController: IconEditController = new IconEditController()

		test('should be defined', () => {
			expect(iconEditController).toBeDefined()
		})
	})
})
