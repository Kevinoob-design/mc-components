import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { TableProps } from '../../../app/components/tables'
import { mockRow } from '../../../__test__/mocks/table.mock'
import { ButtonProps } from '../../../app/components/buttons'

export const argTypes: Partial<ArgTypes<TableProps<mockRow>>> = {
	columns: { control: 'object' },
	rows: { control: 'object' }
}

export const buildComponent = ({ label, disabled, loading }: TableProps<mockRow> & ButtonProps) => html`
	<mc-table
		columns="columns"
		rows="rows">
		<mc-table-cell-3>
			<mc-chip
				label="{{ $parent.row[$parent.column.key] }}"
				bg-color="{{ $parent.row[$parent.column.key] === 'ONLINE' ? 'bg-green-500/20 text-green-900' : 'bg-slate-500/20 text-slate-900'}}">
			</mc-chip>
		</mc-table-cell-3>
		<mc-table-cell-5>
			<mc-icon-button on-click="onClick()">
				<mc-icon-edit></mc-icon-edit>
			</mc-icon-button>
		</mc-table-cell-5>
		<mc-table-cell-6>
			<mc-button
				text="${label}"
				disabled="${disabled}"
				loading="${loading}"
				on-click="onClick()">
			</mc-button>
		</mc-table-cell-6>
	</mc-table>
`
