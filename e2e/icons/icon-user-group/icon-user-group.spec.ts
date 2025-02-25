import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetByPlaceHolder,
	sbLocatorGetSwitch,
	sbLocatorGetHeading
} from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Icon-User-Group Story', () => {
	// const sbInnerLocator = '#story--library-icons-icon-user-group--default--primary-inner'

	const buttonText = 'Icon-User-Group Default'
	const disableControlName = 'disabled'
	const loadingControlName = 'loading'
	const placeHolderControlName = 'Edit string...'
	const consoleActionMessage = 'Component: Icon-User-Group - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-user-group--docs`)
	})

	test('Should have name Icon-User-Group', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-User-Group')).toHaveText('Icon-User-Group')
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
		const buttonText = 'New Icon-User-Group Default'

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
