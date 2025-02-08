import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { TableProps } from '../../../app/components/tables'
import { mockRow } from '../../../__test__/mocks/table.mock'

export const argTypes: Partial<ArgTypes<TableProps<mockRow>>> = {
	columns: { control: 'object' },
	rows: { control: 'object' }
}

export const buildComponent = ({}: TableProps<mockRow>) => html`
	<mc-table
		columns="columns"
		rows="rows">
	</mc-table>
`
