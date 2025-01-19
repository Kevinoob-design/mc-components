---
inject: true
to: app/components/components.module.ts
before: "import {"
---
import { <%=h.changeCase.pascal(name)%>Module } from './<%=h.changeCase.paramCase(path)%>'