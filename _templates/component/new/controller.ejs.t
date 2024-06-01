---
to: app/components/<%=path%>/<%=name%>/<%=name%>.controller.ts
---
class <%=h.changeCase.pascal(name)%>Controller {
	name: string;

	constructor() {
		this.name = '<%=name%>';
	}
}

export { <%=h.changeCase.pascal(name)%>Controller };
