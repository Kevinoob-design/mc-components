import { Page } from '@playwright/test'
import { playwrightRoleType } from './playwright.types'

export const storybookIframeSelector = 'iframe[title="storybook-preview-iframe"]'

export enum sbControlType {
	HEADING = 'heading',
	SWITCH = 'switch',
	BUTTON = 'button'
}

export const sbLocatorGetControl = (page: Page, control: playwrightRoleType, name: string) =>
	page.locator(storybookIframeSelector).contentFrame().getByRole(control, { name })

export const sbLocatorGetControlPlaceHolder = (page: Page, name: string) =>
	page.locator(storybookIframeSelector).contentFrame().getByPlaceholder(name)

export const sbLocatorGetHeading = (page: Page, name: string) => sbLocatorGetControl(page, sbControlType.HEADING, name)

export const sbLocatorGetControlSwitch = (page: Page, name: string) =>
	sbLocatorGetControl(page, sbControlType.SWITCH, name)

export const sbLocatorGetControlButton = (page: Page, name: string) =>
	sbLocatorGetControl(page, sbControlType.BUTTON, name)
