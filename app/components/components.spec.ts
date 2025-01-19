import { expect, describe, test, vi } from 'vitest'
import { McComponentsModule } from './components.module'

vi.mock('./buttons', () => ({
	ButtonModule: {},
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
