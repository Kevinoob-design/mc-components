export const componentLogAction = (componentName: string, actionName: string) =>
	console.log(`Component: ${componentName} - triggered action: ${actionName}`)

export const componentAlertAction = (componentName: string, actionName: string) =>
	alert(`Component ${componentName} - triggered action: ${actionName}`)
