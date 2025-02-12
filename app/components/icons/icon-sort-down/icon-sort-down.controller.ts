import { IComponentController } from 'angular'
import { IconSortDownProps } from './icon-sort-down.types'

class IconSortDownController implements IComponentController, IconSortDownProps {
	color?: string
	size?: string
}

export { IconSortDownController }
