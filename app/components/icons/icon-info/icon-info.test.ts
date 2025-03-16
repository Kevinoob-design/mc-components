import { expect, describe, test, vi } from 'vitest'
import { IconInfoModule } from './icon-info.module'
import { iconInfoComponent } from './icon-info.component'
import { IconInfoController } from './icon-info.controller'

describe('IconInfo', () => {
	describe('IconInfoModule', () => {
		vi.mock('./icon-info.component', () => ({
			iconInfoComponent: {}
		}))

		test('should be defined', () => {
			expect(IconInfoModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconInfoModule).toBe('IconInfoModule')
		})

		vi.unmock('./icon-info.component')
	})

	describe('IconInfoComponent', () => {
		vi.mock('./icon-info.controller', () => ({
			IconInfoController: {}
		}))
		vi.mock('./icon-info.scss', () => ({}))
		vi.mock('./icon-info.html', () => ({}))

		test('should be defined', () => {
			expect(iconInfoComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconInfoComponent.templateUrl).toBeTypeOf('string')
			expect(iconInfoComponent.templateUrl).toBe('app/components/icons/icon-info/icon-info.html')
		})

		vi.unmock('./icon-info.controller')
	})

	describe('IconInfoController', () => {
		const iconInfoController: IconInfoController = new IconInfoController()

		test('should be defined', () => {
			expect(iconInfoController).toBeDefined()
		})
	})
})
