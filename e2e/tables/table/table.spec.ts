import { test, expect } from '@playwright/test'
import { sbLocatorGetTable, sbLocatorGetHeading, sbRoleType, sbLocatorGetByRoleName } from '../../storybook.locator'
import { STORYBOOK_DOCS_PATH, STORYBOOK_URL } from '../../storybook.constants'
import { columns, rows } from '../../../__test__/mocks/table.mock'

test.describe('Table Story', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto(`${STORYBOOK_URL}/${STORYBOOK_DOCS_PATH}/library-tables-table--docs`)
	})

	test('Should have name Table', async ({ page }) => {
		await expect(sbLocatorGetHeading(page, 'Table').first()).toHaveText('Table')
	})

	test('Should have 1 header row and 4 data rows', async ({ page }) => {
		await expect(sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW)).toHaveCount(5)
	})

	test(`Should have ${columns.length - 2} columns`, async ({ page }) => {
		await expect(
			sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW).first().getByRole(sbRoleType.TABLE_CELL)
		).toHaveCount(columns.length - 2)
	})

	test('Should have name of Jane Doe', async ({ page }) => {
		const [, row] = rows

		await expect(
			sbLocatorGetTable(page)
				.first()
				.getByRole(sbRoleType.TABLE_ROW)
				.nth(2)
				.getByRole(sbRoleType.TABLE_CELL)
				.first()
		).toHaveText(row.name)
	})

	test('Should have new name of Janet Doe', async ({ page }) => {
		rows[1].name = 'Janet Doe'

		const rawControlLocator = 'RAW'
		const textBoxControlLocator = 'Edit JSON string...'

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(1)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(rows))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(1)
			.click()

		await expect(
			sbLocatorGetTable(page)
				.first()
				.getByRole(sbRoleType.TABLE_ROW)
				.nth(2)
				.getByRole(sbRoleType.TABLE_CELL)
				.first()
		).toHaveText(rows[1].name)
	})

	test('Should have 2 rows', async ({ page }) => {
		rows.length = 2

		const rawControlNth = 1
		const rawControlLocator = 'RAW'
		const textBoxControlLocator = 'Edit JSON string...'

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(rows))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawControlNth)
			.click()

		await expect(sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW)).toHaveCount(3)
	})

	test('Should have 2 columns', async ({ page }) => {
		columns.length = 2

		const rawControlNth = 0
		const rawControlLocator = 'RAW'
		const textBoxControlLocator = 'Edit JSON string...'

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(columns))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawControlNth)
			.click()

		await expect(
			sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW).first().getByRole(sbRoleType.TABLE_CELL)
		).toHaveCount(2)
	})

	test('Should have new columns and rows', async ({ page }) => {
		const columns = [
			{
				key: 'id',
				title: 'ID'
			},
			{
				key: 'name',
				title: 'Name'
			}
		]

		const rows = [
			{
				id: 1,
				name: 'John Doe'
			},
			{
				id: 2,
				name: 'Jane Doe'
			}
		]

		const rawColumnControlNth = 0
		const rawRowControlNth = 1
		const rawControlLocator = 'RAW'
		const textBoxControlLocator = 'Edit JSON string...'

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawColumnControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(columns))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawColumnControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawRowControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(rows))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawRowControlNth)
			.click()

		await expect(
			sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW).first().getByRole(sbRoleType.TABLE_CELL)
		).toHaveCount(2)

		await expect(
			sbLocatorGetTable(page)
				.first()
				.getByRole(sbRoleType.TABLE_ROW)
				.nth(2)
				.getByRole(sbRoleType.TABLE_CELL)
				.nth(1)
		).toHaveText(rows[1].name)
	})

	test('Should match column title with row key value after deleting columns', async ({ page }) => {
		const columns = [
			{
				key: 'id',
				title: 'ID'
			},
			{
				key: 'name',
				title: 'Name'
			},
			{
				key: 'age',
				title: 'Age'
			},
			{
				key: '',
				title: ''
			}
		]

		const rows = [
			{
				id: 1,
				name: 'John Doe',
				age: 30
			},
			{
				id: 2,
				name: 'Jane Doe',
				age: 25
			}
		]

		const rawColumnControlNth = 0
		const rawRowControlNth = 1
		const rawControlLocator = 'RAW'
		const textBoxControlLocator = 'Edit JSON string...'

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawColumnControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(columns))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawColumnControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawRowControlNth)
			.click()

		await sbLocatorGetByRoleName(page, sbRoleType.TEXTBOX, textBoxControlLocator).fill(JSON.stringify(rows))

		await sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, rawControlLocator)
			.getByRole(sbRoleType.BUTTON)
			.nth(rawRowControlNth)
			.click()

		await sbLocatorGetTable(page)
			.nth(1)
			.getByRole(sbRoleType.TABLE_ROW)
			.nth(1)
			.getByRole(sbRoleType.TABLE_CELL)
			.nth(3)
			.getByRole(sbRoleType.IMAGE)
			.nth(2)
			.click()

		await sbLocatorGetTable(page)
			.nth(1)
			.getByRole(sbRoleType.TABLE_ROW)
			.nth(1)
			.getByRole(sbRoleType.TABLE_CELL)
			.nth(3)
			.getByRole(sbRoleType.IMAGE)
			.nth(2)
			.click()

		await expect(
			sbLocatorGetTable(page)
				.first()
				.getByRole(sbRoleType.TABLE_ROW)
				.first()
				.getByRole(sbRoleType.TABLE_CELL)
				.first()
		).toHaveText(columns[2].title)

		await expect(
			sbLocatorGetTable(page)
				.first()
				.getByRole(sbRoleType.TABLE_ROW)
				.nth(1)
				.getByRole(sbRoleType.TABLE_CELL)
				.first()
		).toHaveText(rows[0].age.toString())
	})

	test('Should delete 3 rows and keep remaining rows with header row', async ({ page }) => {
		await sbLocatorGetTable(page)
			.nth(1)
			.getByRole(sbRoleType.TABLE_ROW)
			.nth(2)
			.getByRole(sbRoleType.TABLE_CELL)
			.nth(3)
			.getByRole(sbRoleType.IMAGE)
			.nth(2)
			.click()
		await sbLocatorGetTable(page)
			.nth(1)
			.getByRole(sbRoleType.TABLE_ROW)
			.nth(2)
			.getByRole(sbRoleType.TABLE_CELL)
			.nth(3)
			.getByRole(sbRoleType.IMAGE)
			.nth(2)
			.click()
		await sbLocatorGetTable(page)
			.nth(1)
			.getByRole(sbRoleType.TABLE_ROW)
			.nth(2)
			.getByRole(sbRoleType.TABLE_CELL)
			.nth(3)
			.getByRole(sbRoleType.IMAGE)
			.nth(2)
			.click()

		await expect(sbLocatorGetTable(page).first().getByRole(sbRoleType.TABLE_ROW)).toHaveCount(rows.length - 3 + 1)
	})
})
