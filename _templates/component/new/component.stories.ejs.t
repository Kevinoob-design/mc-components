---
to: stories/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/html'
import { <%=h.changeCase.pascal(name)%>Module, <%=h.changeCase.pascal(name)%>Props } from '../../../app/components/<%=h.changeCase.paramCase(path)%>'

import { argTypes, buildComponent } from './<%=h.changeCase.paramCase(name)%>'
import { withAngularJs } from '../../../plugins/storybook.angular.decorator'

const meta = {
	title: 'Library/<%=h.changeCase.headerCase(name)%>',
	tags: ['autodocs'],
	decorators: [withAngularJs()],
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
		onClick: () => alert('<%=h.changeCase.headerCase(name)%> clicked')
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
