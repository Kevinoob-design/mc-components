---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.component.ts
---
import { IComponentOptions } from 'angular'
import './<%=h.changeCase.paramCase(name)%>.html';
import './<%=h.changeCase.paramCase(name)%>.scss';
import { <%=h.changeCase.pascal(name)%>Controller } from './<%=h.changeCase.paramCase(name)%>.controller';

export const <%=h.changeCase.camel(name)%>Component: IComponentOptions = {
	bindings: {
		text: '@',
		onClick: '&',
		disabled: '<',
		loading: '<'
	},
	templateUrl: 'app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.html',
	controller: <%=h.changeCase.pascal(name)%>Controller,
};
