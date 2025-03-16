import { test, expect } from '@playwright/test'
import {
	sbLocatorGetButton,
	sbLocatorGetHeading,
	sbRoleType,
	sbLocatorGetComboBox,
	sbLocatorGetByRoleName
} from '../../../../e2e/storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../../../e2e/storybook.constants'

test.describe('Icon-X Story', () => {
	const sbInnerLocator = '#story--library-icons-icon-x--default--primary-inner'

	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-icons-icon-x--docs`)
	})

	test('Should have name Icon-X', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Icon-X')).toHaveText('Icon-X')
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
