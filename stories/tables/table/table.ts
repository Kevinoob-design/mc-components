import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { TableProps } from '../../../app/components/tables'

export const argTypes: Partial<ArgTypes<TableProps>> = {
	columns: { control: 'object' },
	rows: { control: 'object' }
}

export const buildComponent = ({}: TableProps) => html`
	<mc-table
		columns="columns"
		rows="rows">
	</mc-table>
`
