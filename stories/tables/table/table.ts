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
			<button
				class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button">
				<span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<svg
						class="w-4 h-4 fill-slate-900"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
						<path
							d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
					</svg>
				</span>
			</button>
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
