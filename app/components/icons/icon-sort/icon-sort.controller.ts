import { IComponentController } from 'angular'
import { IconSortProps } from './icon-sort.types'

class IconSortController implements IComponentController, IconSortProps {
	color?: string
	size?: string
}

export { IconSortController }
