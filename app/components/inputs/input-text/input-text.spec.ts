import { expect, describe, test, vi } from 'vitest'
import { InputTextModule } from './input-text.module'
import { inputTextComponent } from './input-text.component'
import { InputTextController } from './input-text.controller'

describe('InputText', () => {
	describe('InputTextModule', () => {
		vi.mock('./input-text.component', () => ({
			inputTextComponent: {}
		}))

		test('should be defined', () => {
			expect(InputTextModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(InputTextModule).toBe('InputTextModule')
		})

		vi.unmock('./input-text.component')
	})

	describe('InputTextComponent', () => {
		vi.mock('./input-text.controller', () => ({
			InputTextController: {}
		}))
		vi.mock('./input-text.scss', () => ({}))
		vi.mock('./input-text.html', () => ({}))

		test('should be defined', () => {
			expect(inputTextComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(inputTextComponent.templateUrl).toBeTypeOf('string')
			expect(inputTextComponent.templateUrl).toBe('app/components/inputs/input-text/input-text.html')
		})

		vi.unmock('./input-text.controller')
	})

	describe('InputTextController', () => {
		const inputTextController: InputTextController = new InputTextController()

		test('should be defined', () => {
			expect(inputTextController).toBeDefined()
		})

		test('getTopLabelRequiredAfterClass returns correct class when required', () => {
			inputTextController.required = true
			expect(inputTextController.getTopLabelRequiredAfterClass()).toBe(
				'after:content-["*"] after:ml-0.5 after:text-red-500'
			)
		})

		test('getTopLabelRequiredAfterClass returns empty string when not required', () => {
			inputTextController.required = false
			expect(inputTextController.getTopLabelRequiredAfterClass()).toBe('')
		})
	})
})
