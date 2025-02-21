import type { Meta, StoryObj } from '@storybook/html'
import { TableModule, TableProps } from '../../../app/components/tables'
import { argTypes, buildComponent, buildComplexComponent } from './table'
import { columns, mockRow, rows } from '../../../__test__/mocks/table.mock'
import { ButtonModule, ButtonProps, IconButtonModule } from '../../../app/components/buttons'
import { ChipModule } from '../../../app/components/chips'
import { componentAlertAction } from '../../shared'
import {
	IconEditModule,
	IconLoadingModule,
	IconSortModule,
	IconSortUpModule,
	IconSortDownModule
} from '../../../app/components/icons'

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
		columns: columns.map(c => ({ key: c.key, title: c.title })).filter(c => c.title),
		rows: { ...rows }
	}
}

export const Sortable: Story = {
	name: 'Table config with sortable columns',
	args: {
		columns: columns.map(c => ({ key: c.key, title: c.title, sortable: c.sortable })).filter(c => c.title),
		rows
	}
}

const improvedSortableStatusColum = columns.map(c => ({ ...c }))

improvedSortableStatusColum[2].comparator = (a, b, sortDirection) => {
	if (a === b) return 0
	if (a === 'ONLINE') return sortDirection === 'asc' ? -1 : 1
	if (a === 'OFFLINE') return sortDirection === 'asc' ? 1 : -1
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
