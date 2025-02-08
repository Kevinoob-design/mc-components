import type { Meta, StoryObj } from '@storybook/html'
import { TableModule, TableProps } from '../../../app/components/tables'
import { argTypes, buildComponent } from './table'
import { columns, mockRow, rows } from '../../../__test__/mocks/table.mock'

const meta = {
	title: 'Library/Tables/Table',
	parameters: {
		angularJs: {
			module: TableModule
		},
		docs: {
			source: {
				// code: docsPreview
			}
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta<TableProps<mockRow>>

export default meta

type Story = StoryObj<TableProps<mockRow>>

export const Default: Story = {
	args: {
		columns,
		rows
	}
}
