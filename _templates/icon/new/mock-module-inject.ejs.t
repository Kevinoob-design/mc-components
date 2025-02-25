---
inject: true
to: app/components/components.spec.ts
after: "vi.mock\\('./<%=h.changeCase.paramCase(path)%>'"
append: true
---
<%=h.changeCase.pascal(name)%>Module: {},