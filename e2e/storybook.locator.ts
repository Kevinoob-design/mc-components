import { Page } from '@playwright/test'
import { playwrightRoleType } from './playwright.types'

export const sbIframeLocator = 'iframe[title="storybook-preview-iframe"]'

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

export const sbLocatorGetIframe = (page: Page) => page.locator(sbIframeLocator).contentFrame()

export const sbLocatorGetIframeWithOptionalInnerLocator = (page: Page, sbInnerLocator?: string) => {
	if (sbInnerLocator) return sbLocatorGetIframe(page).locator(sbInnerLocator)

	return sbLocatorGetIframe(page)
}

export const sbLocatorGetByRoleName = (
	page: Page,
	role: playwrightRoleType,
	name: string,
	sbInnerLocator: string = ''
) => sbLocatorGetIframeWithOptionalInnerLocator(page, sbInnerLocator).getByRole(role, { name })

export const sbLocatorGetByPlaceHolder = (page: Page, text: string, sbInnerLocator: string = '') =>
	sbLocatorGetIframeWithOptionalInnerLocator(page, sbInnerLocator).getByPlaceholder(text)

export const sbLocatorGetByText = (page: Page, text: string, sbInnerLocator: string = '') =>
	sbLocatorGetIframeWithOptionalInnerLocator(page, sbInnerLocator).getByText(text)

export const sbLocatorGetByLocator = (page: Page, locator: string, sbInnerLocator: string = '') =>
	sbLocatorGetIframeWithOptionalInnerLocator(page, sbInnerLocator).locator(locator)

export const sbLocatorGetHeading = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.HEADING, name, sbInnerLocator)

export const sbLocatorGetSwitch = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.SWITCH, name, sbInnerLocator)

export const sbLocatorGetButton = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.BUTTON, name, sbInnerLocator)

export const sbLocatorGetTable = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.TABLE, name, sbInnerLocator)

export const sbLocatorGetComboBox = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.COMBOBOX, name, sbInnerLocator)

export const sbLocatorGetRow = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.TABLE_ROW, name, sbInnerLocator)

export const sbLocatorGetCell = (page: Page, name: string = '', sbInnerLocator: string = '') =>
	sbLocatorGetByRoleName(page, sbRoleType.TABLE_CELL, name, sbInnerLocator)
