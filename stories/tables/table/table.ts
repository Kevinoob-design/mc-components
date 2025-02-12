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
			<div class="w-max">
				<div
					class="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap {{ $parent.row[$parent.column.key] === 'ONLINE'
		? 'bg-green-500/20 text-green-900'
		: 'bg-slate-500/20 text-slate-900'}}">
					<span class="">{{ $parent.row[$parent.column.key] }}</span>
				</div>
			</div>
		</mc-table-cell-3>
		<mc-table-cell-5>
			<button
				class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-slate-900 transition-all hover:bg-slate-900/10 active:bg-slate-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button">
				<span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
						class="w-4 h-4">
						<path
							d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
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
