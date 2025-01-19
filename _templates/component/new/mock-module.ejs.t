---
inject: true
to: app/components/components.spec.ts
before: vi.mock
---
vi.mock('./<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.module', () => ({ <%=h.changeCase.pascal(name)%>Module: {} }))