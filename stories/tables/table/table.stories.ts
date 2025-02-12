import type { Meta, StoryObj } from '@storybook/html'
import { TableModule, TableProps } from '../../../app/components/tables'
import { argTypes, buildComponent } from './table'
import { columns, mockRow, rows } from '../../../__test__/mocks/table.mock'
import { ButtonModule, ButtonProps } from '../../../app/components/buttons'
import { ChipModule, ChipProps } from '../../../app/components/chips'
import { componentAlertAction } from '../../shared'

const meta = {
	title: 'Library/Tables/Table',
	parameters: {
		angularJs: {
			module: [TableModule, ButtonModule, ChipModule]
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
		columns,
		rows,
		disabled: false,
		loading: false,
		label: 'Save',
		onClick: () => componentAlertAction('Button', 'Clicked')
	}
}
