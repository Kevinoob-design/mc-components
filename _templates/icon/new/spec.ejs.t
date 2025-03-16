---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.spec.ts
---
import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetByRoleName,
	sbLocatorGetComboBox,
	sbLocatorGetHeading,
	sbRoleType
} from '../../../../e2e/storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../../../e2e/storybook.constants'

test.describe('<%=h.changeCase.headerCase(name)%> Story', () => {
	const sbInnerLocator = '#story--library-<%=path%>-<%=name%>--default--primary-inner'

	const buttonText = '<%=h.changeCase.headerCase(name)%> Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: <%=h.changeCase.headerCase(name)%> - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-<%=path%>-<%=name%>--docs`)
	})

	test('Should have name <%=h.changeCase.headerCase(name)%>', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, '<%=h.changeCase.headerCase(name)%>')).toHaveText('<%=h.changeCase.headerCase(name)%>')
	})

	test('Should have svg icon', async ({ page }) => {
		await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toBeVisible()
	})

	test('Should change svg size', async ({ page }) => {
		const className = 'w-10'

		await sbLocatorGetComboBox(page).nth(0).selectOption(className)
		await expect(sbLocatorGetByRoleName(page, sbRoleType.IMAGE, '', sbInnerLocator)).toHaveClass(
			new RegExp(className)
		)
	})

	test('Should change icon color', async ({ page }) => {
		const className = 'fill-red-900'

		await sbLocatorGetComboBox(page).nth(1).selectOption(className)
		await expect(sbLocatorGetByRoleName(page, sbRoleType.IMAGE, '', sbInnerLocator)).toHaveClass(
			new RegExp(className)
		)
	})
})
