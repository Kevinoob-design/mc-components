---
to: app/components/<%=h.changeCase.paramCase(path)%>/<%=h.changeCase.paramCase(name)%>/<%=h.changeCase.paramCase(name)%>.html
---
<button
	class="text-3xl font-bold underline"
	ng-click="$ctrl.onClick()()"
	ng-disabled="{{$ctrl.disabled}}">
	{{$ctrl.text}} {{$ctrl.loading ? '...' : ''}}
</button>

