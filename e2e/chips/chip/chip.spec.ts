import { test, expect } from '@playwright/test'
import { sbLocatorGetHeading } from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Chip Story', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-chips-chip--docs`)
	})

	test('Should have name Chip', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Chip')).toHaveText('Chip')
	})
})
