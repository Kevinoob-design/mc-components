import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetByPlaceHolder,
	sbLocatorGetSwitch,
	sbLocatorGetHeading
} from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Icon-Envelope Story', () => {
	// const sbInnerLocator = '#story--library-icons-icon-envelope--default--primary-inner'

	const buttonText = 'Icon-Envelope Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: Icon-Envelope - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-envelope--docs`)
	})

	test('Should have name Icon-Envelope', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-Envelope')).toHaveText('Icon-Envelope')
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
		const buttonText = 'New Icon-Envelope Default'

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
