---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.module.ts
---
import angular from 'angular';
import { <%=h.changeCase.camel(name)%>Component } from './<%=h.changeCase.paramCase(name)%>.component';

export const <%=h.changeCase.pascal(name)%>Module = angular
	.module('<%=h.changeCase.pascal(name)%>Module', [])
	.component('<%=h.changeCase.camel('mc-'+name)%>', <%=h.changeCase.camel(name)%>Component).name;
