---
to: stories/<%=path%>/<%=name%>/<%=name%>.stories.ts
---
import type { Meta, StoryObj } from '@storybook/html'
import { <%=h.changeCase.pascal(name)%>Module, <%=h.changeCase.pascal(name)%>Props } from '../../app/components/<%=path%>'

import { argTypes, buildComponent } from './<%=name%>'
import { withAngularJs } from '../../plugins/storybook.angular.decorator'

const meta = {
	title: 'Library/<%=name%>',
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
		label: '<%=name%> Default',
		onClick: () => alert('<%=name%> clicked')
	}
}

export const Disabled: Story = {
	args: {
		disabled: true,
		label: '<%=name%> Disabled'
	}
}

export const Loading: Story = {
	args: {
		loading: true,
		disabled: true,
		label: '<%=name%> Loading'
	}
}
