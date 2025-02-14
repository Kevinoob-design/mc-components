import { test, expect } from '@playwright/test'
import { sbLocatorGetButton, sbLocatorGetComboBox, sbLocatorGetHeading, sbRoleType } from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'

test.describe('Icon-Loading Story', () => {
	const elementInnerContainer = '#story--library-icons-icon-loading--default--primary-inner'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-loading--docs`)
	})

	test('Should have name Icon-Loading', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-Loading')).toHaveText('Icon-Loading')
	})

	test('Should have svg icon', async ({ page }) => {
		await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toBeVisible()
	})

	test('Should change svg size', async ({ page }) => {
		const className = 'w-10'

		await sbLocatorGetComboBox(page).nth(0).selectOption(className)
		// await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toHaveClass(new RegExp(className))

		// Refactor this to use the above, we need to use the element inner container in all e2e test
		await expect(
			page
				.locator('iframe[title="storybook-preview-iframe"]')
				.contentFrame()
				.locator(elementInnerContainer)
				.getByRole(sbRoleType.IMAGE)
		).toHaveClass(new RegExp(className))
	})

	test('Should change bar background color', async ({ page }) => {
		const className = 'text-red-900'

		await sbLocatorGetComboBox(page).nth(1).selectOption(className)
		// await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toHaveClass(new RegExp(className))

		// Refactor this to use the above, we need to use the element inner container in all e2e test
		await expect(
			page
				.locator('iframe[title="storybook-preview-iframe"]')
				.contentFrame()
				.locator(elementInnerContainer)
				.getByRole(sbRoleType.IMAGE)
		).toHaveClass(new RegExp(className))
	})

	test('Should change bar color', async ({ page }) => {
		const className = 'fill-green-900'

		await sbLocatorGetComboBox(page).nth(2).selectOption(className)
		// await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toHaveClass(new RegExp(className))

		// Refactor this to use the above, we need to use the element inner container in all e2e test
		await expect(
			page
				.locator('iframe[title="storybook-preview-iframe"]')
				.contentFrame()
				.locator(elementInnerContainer)
				.getByRole(sbRoleType.IMAGE)
				.locator('path')
		).toHaveClass(new RegExp(className))
	})

	test('Should change circle color', async ({ page }) => {
		const className = 'fill-slate-900'

		await sbLocatorGetComboBox(page).nth(3).selectOption(className)
		// await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toHaveClass(new RegExp(className))

		// Refactor this to use the above, we need to use the element inner container in all e2e test
		await expect(
			page
				.locator('iframe[title="storybook-preview-iframe"]')
				.contentFrame()
				.locator(elementInnerContainer)
				.getByRole(sbRoleType.IMAGE)
		).toHaveClass(new RegExp(className))
	})
})
