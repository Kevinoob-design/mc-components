import { expect, describe, test, vi } from 'vitest'
import { IconEnvelopeModule } from './icon-envelope.module'
import { iconEnvelopeComponent } from './icon-envelope.component'
import { IconEnvelopeController } from './icon-envelope.controller'

describe('IconEnvelope', () => {
	describe('IconEnvelopeModule', () => {
		vi.mock('./icon-envelope.component', () => ({
			iconEnvelopeComponent: {}
		}))

		test('should be defined', () => {
			expect(IconEnvelopeModule).toBeDefined()
		})
		test('should have correct name', () => {
			expect(IconEnvelopeModule).toBe('IconEnvelopeModule')
		})

		vi.unmock('./icon-envelope.component')
	})

	describe('IconEnvelopeComponent', () => {
		vi.mock('./icon-envelope.controller', () => ({
			IconEnvelopeController: {}
		}))
		vi.mock('./icon-envelope.scss', () => ({}))
		vi.mock('./icon-envelope.html', () => ({}))

		test('should be defined', () => {
			expect(iconEnvelopeComponent).toBeDefined()
		})
		test('should have template url', () => {
			expect(iconEnvelopeComponent.templateUrl).toBeTypeOf('string')
			expect(iconEnvelopeComponent.templateUrl).toBe('app/components/icons/icon-envelope/icon-envelope.html')
		})

		vi.unmock('./icon-envelope.controller')
	})

	describe('IconEnvelopeController', () => {
		const iconEnvelopeController: IconEnvelopeController = new IconEnvelopeController()

		test('should be defined', () => {
			expect(iconEnvelopeController).toBeDefined()
		})
	})
})
