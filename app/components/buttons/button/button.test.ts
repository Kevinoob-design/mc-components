import { expect, describe, test, vi } from 'vitest'
import { ButtonModule } from './button.module'
import { buttonComponent } from './button.component'
import { ButtonController } from './button.controller'

describe('Primary Button', () => {
	describe('ButtonModule', () => {
		vi.mock('./button.component', () => ({
			buttonComponent: {}
		}))

		test('should be defined', () => {
			expect(ButtonModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(ButtonModule).toBe('ButtonModule')
		})

		vi.unmock('./button.component')
	})

	describe('ButtonComponent', () => {
		vi.mock('./button.controller', () => ({
			ButtonController: {}
		}))
		vi.mock('./button.scss', () => ({}))
		vi.mock('./button.html', () => ({}))

		test('should be defined', () => {
			expect(buttonComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(buttonComponent.templateUrl).toBeTypeOf('string')
			expect(buttonComponent.templateUrl).toBe('app/components/buttons/button/button.html')
		})

		vi.unmock('./button.controller')
	})

	describe('ButtonController', () => {
		const buttonController: ButtonController = new ButtonController()

		test('should be defined', () => {
			expect(buttonController).toBeDefined()
		})
	})
})
