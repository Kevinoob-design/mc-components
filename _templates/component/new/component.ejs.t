---
to: app/components/<%=path%>/<%=name%>/<%=name%>.component.ts
---
import './<%=name%>.html';
import './<%=name%>.scss';
import { <%=h.changeCase.pascal(name)%>Controller } from './<%=name%>.controller';

export const <%=h.changeCase.camel(name)%>Component = {
	bindings: {
		text: '@',
		onClick: '&',
		disabled: '<',
		loading: '<'
	},
	templateUrl: 'app/components/<%=path%>/<%=name%>/<%=name%>.html',
	controller: <%=h.changeCase.pascal(name)%>Controller,
};
