import { expect, describe, test, vi } from 'vitest'
import { ComponentsModule } from './components.module'

vi.mock('./buttons/index', () => ({ PrimaryButtonModule: {} }))

describe('ComponentsModule', () => {
	test('should be defined', () => {
		expect(ComponentsModule).toBeDefined()
	})
	test('should have correct name', () => {
		expect(ComponentsModule).toBe('McComponents')
	})
})
