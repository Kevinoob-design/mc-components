---
inject: true
to: app/components/components.module.ts
before: "import {"
---
import { <%=h.changeCase.pascal(name)%>Module } from './<%=path%>/<%=name%>/<%=name%>.module'