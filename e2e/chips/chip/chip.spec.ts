import { test, expect } from '@playwright/test'
import { sbLocatorGetByText, sbLocatorGetComboBox, sbLocatorGetHeading } from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Chip Story', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-chips-chip--docs`)
	})

	test('Should have name Chip', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Chip')).toHaveText('Chip')
	})

	test('Should have uppercase class', async ({ page }) => {
		const className = 'uppercase'

		await expect(sbLocatorGetByText(page, 'Chip Default').first().locator('..')).toHaveClass(new RegExp(className))
	})

	test('Should change color', async ({ page }) => {
		const className = 'bg-green-500/20'

		await sbLocatorGetComboBox(page).first().selectOption(className)
		await expect(sbLocatorGetByText(page, 'Chip Default').first().locator('..')).toHaveClass(new RegExp(className))
	})
})
