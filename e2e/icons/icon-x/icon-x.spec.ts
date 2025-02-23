import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetByPlaceHolder,
	sbLocatorGetSwitch,
	sbLocatorGetHeading
} from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Icon-X Story', () => {
	// const sbInnerLocator = '#story--library-icons-icon-x--default--primary-inner'

	const buttonText = 'Icon-X Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: Icon-X - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-x--docs`)
	})

	test('Should have name Icon-X', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-X')).toHaveText('Icon-X')
	})

	test('Should be enabled', async ({ page }) => {
		const buttonLocator = sbLocatorGetButton(page, buttonText).first()

		await expect(buttonLocator).toHaveText(buttonText)
		await expect(buttonLocator).toBeEnabled()
	})

	test('Should be disabled', async ({ page }) => {
		const buttonLocator = sbLocatorGetButton(page, buttonText).first()
		const disableControlLocator = sbLocatorGetSwitch(page, disableControlName)

		await disableControlLocator.check()
		await expect(buttonLocator).toBeDisabled()
	})

	test('Should have loading dots', async ({ page }) => {
		const buttonLocator = sbLocatorGetButton(page, buttonText).first()
		const loadingControlLocator = sbLocatorGetSwitch(page, loadingControlName)

		await loadingControlLocator.check()
		await expect(buttonLocator).toHaveText(`${buttonText} ...`)
	})

	test('Should have updated label', async ({ page }) => {
		const buttonText = 'New Icon-X Default'

		const placeHolderControlLocator = sbLocatorGetByPlaceHolder(page, placeHolderControlName)

		await placeHolderControlLocator.fill(buttonText)

		const buttonLocator = sbLocatorGetButton(page, buttonText).first()
		await expect(buttonLocator).toHaveText(buttonText)
	})

	test('Should click and log action', async ({ page }) => {
		const buttonLocator = sbLocatorGetButton(page, buttonText).first()

		page.on('console', async msg => {
			const message = msg.text()
			if (message.includes(consoleActionMessage)) {
				expect(message).toContain(consoleActionMessage)
			}
		})

		await buttonLocator.click()
	})
})
