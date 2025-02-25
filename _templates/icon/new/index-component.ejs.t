---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/index.ts
---
export * from './<%=h.changeCase.paramCase(name)%>.module'
export * from './<%=h.changeCase.paramCase(name)%>.types'