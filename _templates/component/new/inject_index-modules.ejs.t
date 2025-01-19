---
to: app/components/<%=path%>/index.ts
inject: true
after: export
append: true
---
export * from './<%=name%>'