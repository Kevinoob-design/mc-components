---
to: app/components/<%=h.changeCase.paramCase(path)%>/index.ts
inject: true
after: export
append: true
---
export * from './<%=h.changeCase.paramCase(name)%>'