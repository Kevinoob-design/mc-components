export const logAction = (componentName: string, actionName: string) =>
	console.log(`Component: ${componentName} - triggered action: ${actionName}`)

export const alertAction = (componentName: string, actionName: string) =>
	alert(`Component ${componentName} - triggered action: ${actionName}`)
