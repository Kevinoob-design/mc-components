---
to: app/components/<%=path%>/<%=name%>/<%=name%>.controller.ts
---
import { <%=h.changeCase.pascal(name)%>Props } from './<%=name%>.types'

class <%=h.changeCase.pascal(name)%>Controller implements <%=h.changeCase.pascal(name)%>Props {
	disabled?: boolean
	loading?: boolean
	label: string
	onClick?: () => void
}

export { <%=h.changeCase.pascal(name)%>Controller };
