---
to: stories/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/html'
import { componentLogAction } from '../../shared'
import { <%=h.changeCase.pascal(name)%>Module, <%=h.changeCase.pascal(name)%>Props } from '../../../app/components/<%=h.changeCase.paramCase(path)%>'
import { argTypes, buildComponent } from './<%=h.changeCase.paramCase(name)%>'

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
