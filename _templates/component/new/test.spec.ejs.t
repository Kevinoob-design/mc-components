---
to: app/components/<%=path%>/<%=name%>/<%=name%>.spec.ts
---
import { expect, describe, test, vi } from 'vitest'
import { <%=h.changeCase.pascal(name)%>Module } from './<%=name%>.module'
import { <%=h.changeCase.camel(name)%>Component } from './<%=name%>.component'
import { <%=h.changeCase.pascal(name)%>Controller } from './<%=name%>.controller'

describe('Primary Button', () => {
	describe('<%=h.changeCase.pascal(name)%>Module', () => {
		vi.mock('./<%=name%>.component', () => ({
			<%=h.changeCase.camel(name)%>Component: {}
		}))

		test('should be defined', () => {
			expect(<%=h.changeCase.pascal(name)%>Module).toBeDefined()
		})
		test('should have correct name', () => {
			expect(<%=h.changeCase.pascal(name)%>Module).toBe('<%=h.changeCase.pascal(name)%>Module')
		})

		vi.unmock('./<%=name%>.component')
	})

	describe('<%=h.changeCase.pascal(name)%>Component', () => {
		vi.mock('./<%=name%>.controller', () => ({
			<%=h.changeCase.pascal(name)%>Controller: {}
		}))
		vi.mock('./<%=name%>.scss', () => ({}))
		vi.mock('./<%=name%>.html', () => ({}))

		test('should be defined', () => {
			expect(<%=h.changeCase.camel(name)%>Component).toBeDefined()
		})
		test('should have template url', () => {
			expect(<%=h.changeCase.camel(name)%>Component.templateUrl).toBeTypeOf('string')
			expect(<%=h.changeCase.camel(name)%>Component.templateUrl).toBe(
				'app/components/<%=path%>/<%=name%>/<%=name%>.html'
			)
		})

        vi.unmock('./<%=name%>.controller')
	})

    describe('<%=h.changeCase.pascal(name)%>Controller', () => {

		const <%=h.changeCase.camel(name)%>Controller: <%=h.changeCase.pascal(name)%>Controller = new <%=h.changeCase.pascal(name)%>Controller()

		test('should be defined', () => {
			expect(<%=h.changeCase.camel(name)%>Controller).toBeDefined()
		})
	})
})
