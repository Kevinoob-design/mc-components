import { expect, describe, test, vi } from 'vitest'
import { PrimaryButtonModule } from './primary-button.module'
import { primaryButtonComponent } from './primary-button.component'

describe('Primary Button', () => {
	describe('PrimaryButtonModule', () => {
		vi.mock('./primary-button.component', () => ({
			primaryButtonComponent: {}
		}))

		test('should be defined', () => {
			expect(PrimaryButtonModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(PrimaryButtonModule).toBe('PrimaryButtonModule')
		})

		vi.unmock('./primary-button.component')
	})

	describe('PrimaryButtonComponent', () => {
		vi.mock('./primary-button.controller', () => ({
			PrimaryButtonController: {}
		}))
		vi.mock('./primary-button.scss', () => ({}))
		vi.mock('./primary-button.html', () => ({}))

		test('should be defined', () => {
			expect(primaryButtonComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(primaryButtonComponent.templateUrl).toBeTypeOf('string')
			expect(primaryButtonComponent.templateUrl).toBe('app/components/buttons/primary-button/primary-button.html')
		})
	})
})
