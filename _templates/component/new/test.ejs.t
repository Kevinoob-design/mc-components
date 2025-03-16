---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.test.ts
---
import { expect, describe, test, vi } from 'vitest'
import { <%=h.changeCase.pascal(name)%>Module } from './<%=h.changeCase.paramCase(name)%>.module'
import { <%=h.changeCase.camel(name)%>Component } from './<%=h.changeCase.paramCase(name)%>.component'
import { <%=h.changeCase.pascal(name)%>Controller } from './<%=h.changeCase.paramCase(name)%>.controller'

describe('<%=h.changeCase.pascal(name)%>', () => {
	describe('<%=h.changeCase.pascal(name)%>Module', () => {
		vi.mock('./<%=h.changeCase.paramCase(name)%>.component', () => ({
			<%=h.changeCase.camel(name)%>Component: {}
		}))

		test('should be defined', () => {
			expect(<%=h.changeCase.pascal(name)%>Module).toBeDefined()
		})
		test('should have correct name', () => {
			expect(<%=h.changeCase.pascal(name)%>Module).toBe('<%=h.changeCase.pascal(name)%>Module')
		})

		vi.unmock('./<%=h.changeCase.paramCase(name)%>.component')
	})

	describe('<%=h.changeCase.pascal(name)%>Component', () => {
		vi.mock('./<%=h.changeCase.paramCase(name)%>.controller', () => ({
			<%=h.changeCase.pascal(name)%>Controller: {}
		}))
		vi.mock('./<%=h.changeCase.paramCase(name)%>.scss', () => ({}))
		vi.mock('./<%=h.changeCase.paramCase(name)%>.html', () => ({}))

		test('should be defined', () => {
			expect(<%=h.changeCase.camel(name)%>Component).toBeDefined()
		})
		test('should have template url', () => {
			expect(<%=h.changeCase.camel(name)%>Component.templateUrl).toBeTypeOf('string')
			expect(<%=h.changeCase.camel(name)%>Component.templateUrl).toBe(
				'app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.html'
			)
		})

        vi.unmock('./<%=h.changeCase.paramCase(name)%>.controller')
	})

    describe('<%=h.changeCase.pascal(name)%>Controller', () => {

		const <%=h.changeCase.camel(name)%>Controller: <%=h.changeCase.pascal(name)%>Controller = new <%=h.changeCase.pascal(name)%>Controller()

		test('should be defined', () => {
			expect(<%=h.changeCase.camel(name)%>Controller).toBeDefined()
		})
	})
})
