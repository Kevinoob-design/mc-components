---
inject: true
to: app/components/components.spec.ts
before: vi.mock
skip_if: "vi.mock\\('./<%=h.changeCase.paramCase(path)%>'"
---
vi.mock('./<%=h.changeCase.paramCase(path)%>', () => ({
}))
