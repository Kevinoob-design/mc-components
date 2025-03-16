import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html, componentAlertAction } from '../../../../stories/shared'
import { TableModule, TableProps } from '..'
import { columns, mockRow, rows } from '../../../../__test__/mocks/table.mock'
import { ButtonModule, ButtonProps, IconButtonModule } from '../../buttons'
import { ChipModule } from '../../chips'
import { IconEditModule, IconLoadingModule, IconSortModule, IconSortUpModule, IconSortDownModule } from '../../icons'

const argTypes: Partial<ArgTypes<TableProps<mockRow>>> = {
	columns: { control: 'object' },
	rows: { control: 'object' }
}

const buildComponent = ({}: TableProps<mockRow> & ButtonProps) => html`
	<mc-table
		columns="columns"
		rows="rows">
	</mc-table>
`

const buildComplexComponent = ({}: TableProps<mockRow> & ButtonProps) => html`
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
				text="{{$parent.row.status === 'ONLINE' ? 'Connect' : ' Contacting'}}"
				disabled="$parent.row.status === 'ONLINE' ? false : true"
				loading="$parent.row.status === 'ONLINE' ? false : true"
				on-click="onClick()">
			</mc-button>
		</mc-table-cell-6>
	</mc-table>
`

const meta = {
	title: 'Library/Tables/Table',
	parameters: {
		angularJs: {
			module: [
				TableModule,
				ButtonModule,
				ChipModule,
				IconButtonModule,
				IconEditModule,
				IconSortModule,
				IconSortUpModule,
				IconSortDownModule,
				IconLoadingModule
			]
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<TableProps<mockRow> & ButtonProps>

export default meta

type Story = StoryObj<TableProps<mockRow> & ButtonProps>

export const Default: Story = {
	name: 'Basic table config',
	args: {
		columns: columns.map(col => ({ key: col.key, title: col.title })).filter(col => col.title),
		rows: { ...rows }
	}
}

export const Sortable: Story = {
	name: 'Table config with sortable columns',
	args: {
		columns: columns
			.map(col => ({ key: col.key, title: col.title, sortable: col.sortable }))
			.filter(col => col.title),
		rows
	}
}

const improvedSortableStatusColum = columns.map(col => ({ ...col }))

improvedSortableStatusColum[2].comparator = (first, second, sortDirection) => {
	if (first === second) return 0
	if (first === 'ONLINE') return sortDirection === 'asc' ? -1 : 1
	if (first === 'OFFLINE') return sortDirection === 'asc' ? 1 : -1
	return 0
}

export const Complex: Story = {
	name: 'Table with custom cell components and custom logic for Sorting Status column',
	render: args => buildComplexComponent(args),
	args: {
		columns: improvedSortableStatusColum,
		rows,
		onClick: () => componentAlertAction('Button', 'Clicked')
	}
}
