import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetByRoleName,
	sbLocatorGetComboBox,
	sbLocatorGetHeading,
	sbRoleType
} from '../../../../e2e/storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../../../e2e/storybook.constants'

test.describe('Icon-Sort-Down Story', () => {
	const sbInnerLocator = '#story--library-icons-icon-sort-down--default--primary-inner'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-sort-down--docs`)
	})

	test('Should have name Icon-Sort-Down', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-Sort-Down')).toHaveText('Icon-Sort-Down')
	})

	test('Should have svg icon', async ({ page }) => {
		await expect(sbLocatorGetButton(page).first().getByRole(sbRoleType.IMAGE)).toBeVisible()
	})

	test('Should change svg size', async ({ page }) => {
		const className = 'w-10'

		await sbLocatorGetComboBox(page).nth(0).selectOption(className)
		await expect(sbLocatorGetByRoleName(page, sbRoleType.IMAGE, '', sbInnerLocator)).toHaveClass(
			new RegExp(className)
		)
	})

	test('Should change icon color', async ({ page }) => {
		const className = 'fill-red-900'

		await sbLocatorGetComboBox(page).nth(1).selectOption(className)
		await expect(sbLocatorGetByRoleName(page, sbRoleType.IMAGE, '', sbInnerLocator)).toHaveClass(
			new RegExp(className)
		)
	})
})
