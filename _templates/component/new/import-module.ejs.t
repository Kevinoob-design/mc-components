---
inject: true
to: app/components/components.module.ts
after: import
---
import { <%=h.changeCase.pascal(name)%>Module } from './<%=path%>/<%=name%>/<%=name%>.module'