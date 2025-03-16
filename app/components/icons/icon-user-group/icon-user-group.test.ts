import { expect, describe, test, vi } from 'vitest'
import { IconUserGroupModule } from './icon-user-group.module'
import { iconUserGroupComponent } from './icon-user-group.component'
import { IconUserGroupController } from './icon-user-group.controller'

describe('IconUserGroup', () => {
	describe('IconUserGroupModule', () => {
		vi.mock('./icon-user-group.component', () => ({
			iconUserGroupComponent: {}
		}))

		test('should be defined', () => {
			expect(IconUserGroupModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconUserGroupModule).toBe('IconUserGroupModule')
		})

		vi.unmock('./icon-user-group.component')
	})

	describe('IconUserGroupComponent', () => {
		vi.mock('./icon-user-group.controller', () => ({
			IconUserGroupController: {}
		}))
		vi.mock('./icon-user-group.scss', () => ({}))
		vi.mock('./icon-user-group.html', () => ({}))

		test('should be defined', () => {
			expect(iconUserGroupComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconUserGroupComponent.templateUrl).toBeTypeOf('string')
			expect(iconUserGroupComponent.templateUrl).toBe('app/components/icons/icon-user-group/icon-user-group.html')
		})

		vi.unmock('./icon-user-group.controller')
	})

	describe('IconUserGroupController', () => {
		const iconUserGroupController: IconUserGroupController = new IconUserGroupController()

		test('should be defined', () => {
			expect(iconUserGroupController).toBeDefined()
		})
	})
})
