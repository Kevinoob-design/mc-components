import { html } from './shared'

export interface ButtonProps {
	/** Is this the principal call to action on the page? */
	primary?: boolean
	/** What background color to use */
	backgroundColor?: string
	/** How large should the button be? */
	size?: 'small' | 'medium' | 'large'
	/** Button contents */
	label: string
	/** Optional click handler */
	onClick?: () => void
}

/** Primary UI component for user interaction */
export const createButton = ({ primary = false, label }: ButtonProps) => html`
	<primary-button
		text="${label}"
		disabled="${!primary}"
		loading="true"
		on-click="onClick()">
	</primary-button>
`
