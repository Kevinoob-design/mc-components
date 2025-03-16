import { expect, describe, test, vi } from 'vitest'
import { IconXModule } from './icon-x.module'
import { iconXComponent } from './icon-x.component'
import { IconXController } from './icon-x.controller'

describe('IconX', () => {
	describe('IconXModule', () => {
		vi.mock('./icon-x.component', () => ({
			iconXComponent: {}
		}))

		test('should be defined', () => {
			expect(IconXModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconXModule).toBe('IconXModule')
		})

		vi.unmock('./icon-x.component')
	})

	describe('IconXComponent', () => {
		vi.mock('./icon-x.controller', () => ({
			IconXController: {}
		}))
		vi.mock('./icon-x.scss', () => ({}))
		vi.mock('./icon-x.html', () => ({}))

		test('should be defined', () => {
			expect(iconXComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconXComponent.templateUrl).toBeTypeOf('string')
			expect(iconXComponent.templateUrl).toBe('app/components/icons/icon-x/icon-x.html')
		})

		vi.unmock('./icon-x.controller')
	})

	describe('IconXController', () => {
		const iconXController: IconXController = new IconXController()

		test('should be defined', () => {
			expect(iconXController).toBeDefined()
		})
	})
})
