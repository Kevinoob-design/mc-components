import { test, expect } from '@playwright/test'
import { sbLocatorGetButton, sbLocatorGetHeading, sbRoleType } from '../../../../e2e/storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../../../e2e/storybook.constants'

test.describe('Icon-Button Story', () => {
	const consoleActionMessage = 'Component: Button - triggered action: Clicked'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-buttons-icon-button--docs`)
	})

	test('Should have name Icon-Button', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-Button')).toHaveText('Icon-Button')
	})

	test('Should have svg icon', async ({ page }) => {
		await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toBeVisible()
	})

	test('Should click and log action', async ({ page }) => {
		const buttonLocator = sbLocatorGetButton(page).first()

		page.on('console', async msg => {
			const message = msg.text()
			if (message.includes(consoleActionMessage)) {
				expect(message).toContain(consoleActionMessage)
			}
		})

		await buttonLocator.click()
	})
})
