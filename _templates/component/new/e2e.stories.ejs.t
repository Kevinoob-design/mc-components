---
to: e2e/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.spec.ts
---
import { test, expect } from '@playwright/test'
import {
	sbLocatorGetControlButton,
	sbLocatorGetControlPlaceHolder,
	sbLocatorGetControlSwitch,
	sbLocatorGetHeading
} from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('<%=h.changeCase.headerCase(name)%> Story', () => {
	const buttonText = '<%=h.changeCase.headerCase(name)%> Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: <%=h.changeCase.headerCase(name)%> - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-<%=path%>-<%=name%>--docs`)
	})

	test('Should have name Button', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, '<%=h.changeCase.headerCase(name)%>')).toHaveText('<%=h.changeCase.headerCase(name)%>')
	})

	test('Should be enabled', async ({ page }) => {
		const buttonLocator = sbLocatorGetControlButton(page, buttonText).first()

		await expect(buttonLocator).toHaveText(buttonText)
		await expect(buttonLocator).toBeEnabled()
	})

	test('Should be disabled', async ({ page }) => {
		const buttonLocator = sbLocatorGetControlButton(page, buttonText).first()
		const disableControlLocator = sbLocatorGetControlSwitch(page, disableControlName)

		await disableControlLocator.check()
		await expect(buttonLocator).toBeDisabled()
	})

	test('Should have loading dots', async ({ page }) => {
		const buttonLocator = sbLocatorGetControlButton(page, buttonText).first()
		const loadingControlLocator = sbLocatorGetControlSwitch(page, loadingControlName)

		await loadingControlLocator.check()
		await expect(buttonLocator).toHaveText(`${buttonText} ...`)
	})

	test('Should have updated label', async ({ page }) => {
		const buttonText = 'New <%=h.changeCase.headerCase(name)%> Default'

		const placeHolderControlLocator = sbLocatorGetControlPlaceHolder(page, placeHolderControlName)

		await placeHolderControlLocator.fill(buttonText)

		const buttonLocator = sbLocatorGetControlButton(page, buttonText).first()
		await expect(buttonLocator).toHaveText(buttonText)
	})

	test('Should click and log action', async ({ page }) => {
		const buttonLocator = sbLocatorGetControlButton(page, buttonText).first()

		page.on('console', async msg => {
			const message = msg.text()
			if (message.includes(consoleActionMessage)) {
				expect(message).toContain(consoleActionMessage)
			}
		})

		await buttonLocator.click()
	})
})
