---
inject: true
to: app/components/components.module.ts
after: "import './index.css'"
---
import { <%=h.changeCase.pascal(name)%>Module } from './<%=h.changeCase.paramCase(path)%>'