import type { Meta, StoryObj } from '@storybook/html'
import { TableModule, TableProps } from '../../../app/components/tables'
import { argTypes, buildComponent, buildComplexComponent } from './table'
import { columns, mockRow, rows } from '../../../__test__/mocks/table.mock'
import { ButtonModule, ButtonProps, IconButtonModule } from '../../../app/components/buttons'
import { ChipModule } from '../../../app/components/chips'
import { componentAlertAction } from '../../shared'
import { IconEditModule, IconLoadingModule, IconSortModule } from '../../../app/components/icons'

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
				IconLoadingModule
			]
		},
		docs: {
			source: {
				// code: docsPreview
			}
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<TableProps<mockRow> & ButtonProps>

export default meta

type Story = StoryObj<TableProps<mockRow> & ButtonProps>

export const Default: Story = {
	args: {
		columns: columns.map(c => ({ key: c.key, title: c.title })).filter(c => c.title),
		rows
	}
}

export const Complex: Story = {
	name: 'Table with custom cell components and logic',
	render: args => buildComplexComponent(args),
	args: {
		columns,
		rows,
		disabled: false,
		loading: false,
		label: 'Save',
		onClick: () => componentAlertAction('Button', 'Clicked')
	}
}
