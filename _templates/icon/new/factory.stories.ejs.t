---
to: stories/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.ts
---
import { ArgTypes } from '@storybook/html'
import { html } from '../../shared'
import { <%=h.changeCase.pascal(name)%>Props } from '../../../app/components/<%=h.changeCase.paramCase(path)%>'

export const argTypes: Partial<ArgTypes< <%=h.changeCase.pascal(name)%>Props >> = {
	size: {
		control: 'select',
		options: ['w-4', 'w-8', 'w-10'],
		table: { defaultValue: { summary: 'w-4' } }
	},
	color: {
		control: 'select',
		options: ['fill-slate-900', 'fill-white', 'fill-green-900', 'fill-red-900'],
		table: { defaultValue: { summary: 'fill-slate-900' } }
	}
}

export const buildComponent = ({
	color, 
	size
}: <%=h.changeCase.pascal(name)%>Props ) => html`
	<mc-<%=h.changeCase.paramCase(name)%>
		size="${size}"
		color="${color}">
	</mc-<%=h.changeCase.paramCase(name)%>>
`
