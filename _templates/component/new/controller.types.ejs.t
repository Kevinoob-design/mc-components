---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.types.ts
---
export type <%=h.changeCase.pascal(name)%>Props = {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}