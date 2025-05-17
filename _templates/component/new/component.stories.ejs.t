---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.stories.ts
---
import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html, logAction } from '../../../../stories/shared'
import { <%=h.changeCase.pascal(name)%>Module, <%=h.changeCase.pascal(name)%>Props } from './'

const argTypes: Partial<ArgTypes< <%=h.changeCase.pascal(name)%>Props >> = {
	label: { control: 'text' },
	onClick: { action: 'onClick' },
	disabled: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	},
	loading: {
		control: 'boolean',
		table: { defaultValue: { summary: 'false' } }
	}
}

const buildComponent = ({
	disabled = false,
	loading = false,
	label
}: <%=h.changeCase.pascal(name)%>Props ) => html`
	<mc-<%=h.changeCase.paramCase(name)%>
		text="${label}"
		disabled="${disabled}"
		loading="${loading}"
		on-click="onClick()">
	</mc-<%=h.changeCase.paramCase(name)%>>
`

const meta = {
	title: 'Library/<%=h.changeCase.headerCase(path)%>/<%=h.changeCase.headerCase(name)%>',
	parameters: {
		angularJs: {
			module: <%=h.changeCase.pascal(name)%>Module
		}
	},
	argTypes,
	render: args => buildComponent(args)
} satisfies Meta< <%=h.changeCase.pascal(name)%>Props >

export default meta

type Story = StoryObj< <%=h.changeCase.pascal(name)%>Props >

export const Default: Story = {
	args: {
		disabled: false,
		loading: false,
		label: '<%=h.changeCase.headerCase(name)%> Default',
		onClick: () => logAction('<%=h.changeCase.headerCase(name)%>', 'Clicked')
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		label: '<%=h.changeCase.headerCase(name)%> Disabled'
	}
}

export const Loading: Story = {
	args: {
		loading: true,
		disabled: true,
		label: '<%=h.changeCase.headerCase(name)%> Loading'
	}
}
