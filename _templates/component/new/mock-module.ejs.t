---
inject: true
to: app/components/components.spec.ts
after: vi.mock
---
vi.mock('./<%=path%>/<%=name%>/<%=name%>.module', () => ({ <%=h.changeCase.pascal(name)%>Module: {} }))