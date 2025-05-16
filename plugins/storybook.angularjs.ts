import angular from 'angular'

type Hooks = { beforeCompile: () => void; beforeUpdate: () => void }

/**
 * Compiles the given template with the given props into the given element.
 */
export function buildAngularJsElement(element: HTMLElement, template: string, props: Object, hooks: Hooks) {
	const $element = angular.element(element)
	const $injector = $element.injector()

	if (hooks && typeof hooks.beforeCompile === 'function') {
		$injector.invoke(hooks.beforeCompile)
	}

	const compiler = function ($compile, $rootScope) {
		// get the scope of the target, use the rootScope if it does not exists
		const $scope = $element.scope() || $rootScope

		// compile the new template and link it with the updated scope
		$compile($element.html(template))(Object.assign($scope, props))

		$rootScope.$digest()
	}

	compiler.$inject = ['$compile', '$rootScope']

	$injector.invoke(compiler)

	return element
}

/**
 * Updates the given element with the given props.
 */
export function updateAngularJsElement(element: HTMLElement, props: Object, hooks: Hooks) {
	const $element = angular.element(element)
	const $injector = $element.injector()

	if (hooks && typeof hooks.beforeUpdate === 'function') {
		$injector.invoke(hooks.beforeUpdate)
	}

	const updater = function () {
		const $scope = $element.scope()

		$scope.$applyAsync(() => {
			Object.assign($scope, props)
		})
	}

	updater.$inject = []

	$injector.invoke(updater)

	return element
}
