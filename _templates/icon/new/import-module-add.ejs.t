---
inject: true
to: app/components/components.module.ts
after: "const modules = \\["
---
<%=h.changeCase.pascal(name)%>Module,