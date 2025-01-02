import { expect, describe, test, vi } from 'vitest'
import { McComponentsModule } from './components.module'

vi.mock('./buttons/primary-button/primary-button.module', () => ({
	PrimaryButtonModule: {}
}))

describe('ComponentsModule', () => {
	test('should be defined', () => {
		expect(McComponentsModule).toBeDefined()
	})
	test('should have correct name', () => {
		expect(McComponentsModule).toBe('McComponents')
	})
})
