---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.controller.ts
---
import { <%=h.changeCase.pascal(name)%>Props } from './<%=h.changeCase.paramCase(name)%>.types'

class <%=h.changeCase.pascal(name)%>Controller implements <%=h.changeCase.pascal(name)%>Props {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

export { <%=h.changeCase.pascal(name)%>Controller };
