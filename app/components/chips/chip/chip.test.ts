import { expect, describe, test, vi } from 'vitest'
import { ChipModule } from './chip.module'
import { chipComponent } from './chip.component'
import { ChipController } from './chip.controller'

describe('Chip', () => {
	describe('ChipModule', () => {
		vi.mock('./chip.component', () => ({
			chipComponent: {}
		}))

		test('should be defined', () => {
			expect(ChipModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(ChipModule).toBe('ChipModule')
		})

		vi.unmock('./chip.component')
	})

	describe('ChipComponent', () => {
		vi.mock('./chip.controller', () => ({
			ChipController: {}
		}))
		vi.mock('./chip.scss', () => ({}))
		vi.mock('./chip.html', () => ({}))

		test('should be defined', () => {
			expect(chipComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(chipComponent.templateUrl).toBeTypeOf('string')
			expect(chipComponent.templateUrl).toBe('app/components/chips/chip/chip.html')
		})

		vi.unmock('./chip.controller')
	})

	describe('ChipController', () => {
		const chipController: ChipController = new ChipController()

		test('should be defined', () => {
			expect(chipController).toBeDefined()
		})
	})
})
