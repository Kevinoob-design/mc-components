import { test, expect } from '@playwright/test'
import { sbLocatorGetHeading } from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Icon-Button Story', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-buttons-icon-button--docs`)
	})

	test('Should have name Icon-Button', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-Button')).toHaveText('Icon-Button')
	})
})
