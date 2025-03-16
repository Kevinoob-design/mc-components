---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.stories.ts
---
import type { ArgTypes, Meta, StoryObj } from '@storybook/html'
import { html, componentLogAction } from '../../../../stories/shared'
import { <%=h.changeCase.pascal(name)%>Module, <%=h.changeCase.pascal(name)%>Props } from './'

const argTypes: Partial<ArgTypes< <%=h.changeCase.pascal(name)%>Props >> = {
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

const buildComponent = ({
	color, 
	size
}: <%=h.changeCase.pascal(name)%>Props ) => html`
	<mc-<%=h.changeCase.paramCase(name)%>
		size="${size}"
		color="${color}">
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
		size: '',
		color: ''
	}
}
