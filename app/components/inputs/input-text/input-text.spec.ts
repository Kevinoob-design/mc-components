import { test, expect } from '@playwright/test'
import { sbLocatorGetHeading } from '../../../../e2e/storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../../../e2e/storybook.constants'

test.describe('Input-Text Story', () => {
	// const sbInnerLocator = '#story--library-inputs-input-text--default--primary-inner'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-inputs-input-text--docs`)
	})

	test('Should have name Input-Text', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Input-Text')).toHaveText('Input-Text')
	})
})
