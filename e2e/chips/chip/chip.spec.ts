import { test, expect } from '@playwright/test'
import {
	sbLocatorGetControlButton,
	sbLocatorGetControlPlaceHolder,
	sbLocatorGetControlSwitch,
	sbLocatorGetHeading
} from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Chip Story', () => {
	const buttonText = 'Chip Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: Chip - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-chips-chip--docs`)
	})

	test('Should have name Chip', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Chip')).toHaveText('Chip')
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
		const buttonText = 'New Chip Default'

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
