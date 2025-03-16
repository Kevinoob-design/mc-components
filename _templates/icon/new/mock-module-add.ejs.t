---
inject: true
to: app/components/components.test.ts
before: vi.mock
skip_if: "vi.mock\\('./<%=h.changeCase.paramCase(path)%>'"
---
vi.mock('./<%=h.changeCase.paramCase(path)%>', () => ({
}))
