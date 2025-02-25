/**
 * Código tomado y modificado para soportar Storybook 8.
 *
 * Decoradores: https://storybook.js.org/docs/writing-stories/decorators
 * Repositorio original https://github.com/titonobre/storybook-addon-angularjs/tree/master
 */

import angular from 'angular'
import { buildAngularJsElement, updateAngularJsElement } from './storybook.angularjs'
import { Args, StrictArgTypes, PartialStoryFn, StoryContext } from '@storybook/core/types'

export function withAngularJs() {
	const cache = {}

	return (story: PartialStoryFn, context: StoryContext) => {
		const { module, hooks, mock, rebuild } = context.parameters.angularJs

		const template = story() as string

		const key = context.id

		const { currentPhase } = context.hooks as any

		const element = document.createElement('div')

		if (
			rebuild === 'always' ||
			(rebuild === 'mount' && currentPhase === 'MOUNT') ||
			(rebuild === 'update' && currentPhase === 'UPDATE') ||
			!cache[key] ||
			cache[key].template !== template
		) {
			const modules = Array.isArray(module) ? module.filter(m => typeof m === 'string' && m !== 'ng') : [module]

			// Initialize mocked modules
			if (mock && mock.modules) {
				mock.modules.forEach(moduleToMock => {
					modules.unshift(angular.module(moduleToMock, []).name)
				})
			}

			// Initialize mocked providers for constants, services and factories
			// Since the providers of the last module overrides the ones of the previous modules
			// we append it to the end of the modules
			// https://stackoverflow.com/q/37094761/831465
			if (mock) {
				modules.push([
					'$provide',
					$provide => {
						// Constants
						angular.forEach(mock.constants, (mockedValue, key) => {
							$provide.constant(key, mockedValue)
						})

						// Services
						angular.forEach(mock.services, (mockedValue, key) => {
							$provide.service(key, mockedValue)
						})

						// Factories
						angular.forEach(mock.factories, (mockedValue, key) => {
							$provide.factory(key, mockedValue)
						})
					}
				])
			}

			angular.bootstrap(element, modules)

			// cache[key] = {
			// 	template,
			// 	element
			// }

			return buildAngularJsElement(element, template, context.args, hooks)
		}

		return updateAngularJsElement(element, context.args, hooks)
	}
}
