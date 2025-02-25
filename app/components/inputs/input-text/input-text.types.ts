export type InputTextProps = {
	placeholder: string
	label: string
	topLabel: string
	info: string
	error: string
	type: 'text' | 'email' | 'password' | 'number' | 'tel'
	required: boolean
	disabled?: boolean
	debounce?: number
	onChange?: (value: string) => void
}
