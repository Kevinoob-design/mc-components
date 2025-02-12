import { expect, describe, test, vi } from 'vitest'
import { McComponentsModule } from './components.module'

vi.mock('./containers', () => ({
	SvgContainerModule: {}
}))

vi.mock('./icons', () => ({
	IconSortDownModule: {},
	IconSortUpModule: {},
	IconSortModule: {},
	IconEditModule: {}
}))

vi.mock('./chips', () => ({
	ChipModule: {}
}))

vi.mock('./tables', () => ({
	TableModule: {}
}))

vi.mock('./buttons', () => ({
	IconButtonModule: {},
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
