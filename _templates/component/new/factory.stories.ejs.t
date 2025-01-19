---
to: stories/<%=path%>/<%=name%>/<%=name%>.ts
---
import { ArgTypes } from '@storybook/html'
import { html } from '../../template-tags'
import { <%=h.changeCase.pascal(name)%>Props } from '../../../app/components/<%=path%>'

export const argTypes: Partial<ArgTypes< <%=h.changeCase.pascal(name)%>Props >> = {
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

export const buildComponent = ({
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
