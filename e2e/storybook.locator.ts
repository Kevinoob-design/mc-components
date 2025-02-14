import { Page } from '@playwright/test'
import { playwrightRoleType } from './playwright.types'

export const storybookIframeSelector = 'iframe[title="storybook-preview-iframe"]'

export enum sbRoleType {
	HEADING = 'heading',
	SWITCH = 'switch',
	BUTTON = 'button',
	TEXTBOX = 'textbox',
	LINK = 'link',
	TABLE = 'table',
	TABLE_ROW = 'row',
	TABLE_CELL = 'cell',
	COMBOBOX = 'combobox',
	IMAGE = 'img'
}

export const sbLocatorGetByRoleName = (page: Page, role: playwrightRoleType, name: string) =>
	page.locator(storybookIframeSelector).contentFrame().getByRole(role, { name })

export const sbLocatorGetByPlaceHolder = (page: Page, text: string) =>
	page.locator(storybookIframeSelector).contentFrame().getByPlaceholder(text)

export const sbLocatorGetByText = (page: Page, text: string) =>
	page.locator(storybookIframeSelector).contentFrame().getByText(text)

export const sbLocatorGetByLocator = (page: Page, locator: string) =>
	page.locator(storybookIframeSelector).contentFrame().locator(locator)

export const sbLocatorGetHeading = (page: Page, name: string) => sbLocatorGetByRoleName(page, sbRoleType.HEADING, name)

export const sbLocatorGetSwitch = (page: Page, name: string) => sbLocatorGetByRoleName(page, sbRoleType.SWITCH, name)

export const sbLocatorGetButton = (page: Page, name: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.BUTTON, name)

export const sbLocatorGetTable = (page: Page, name: string = '') => sbLocatorGetByRoleName(page, sbRoleType.TABLE, name)

export const sbLocatorGetComboBox = (page: Page, name: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.COMBOBOX, name)

export const sbLocatorGetRow = (page: Page, name: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.TABLE_ROW, name)

export const sbLocatorGetCell = (page: Page, name: string) => sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, name)
