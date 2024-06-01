---
to: app/components/<%=path%>/<%=name%>/<%=name%>.module.ts
---
import angular from 'angular';
import { <%=h.changeCase.camel(name)%>Component } from './<%=name%>.component';

export const <%=h.changeCase.pascal(name)%>Module = angular
	.module('<%=h.changeCase.pascal(name)%>Module', [])
	.component('<%=h.changeCase.camel(name)%>', <%=h.changeCase.camel(name)%>Component).name;
