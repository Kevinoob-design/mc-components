---
to: app/components/<%=path%>/<%=name%>/<%=name%>.types.ts
---
export type <%=h.changeCase.pascal(name)%>Props = {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}