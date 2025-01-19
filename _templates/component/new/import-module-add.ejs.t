---
inject: true
to: app/components/components.module.ts
after: "const modules = \\["
append: true
---
<%=h.changeCase.pascal(name)%>Module,