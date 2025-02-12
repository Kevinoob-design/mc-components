import { IComponentController } from 'angular'
import { IconSortUpProps } from './icon-sort-up.types'

class IconSortUpController implements IComponentController, IconSortUpProps {
	color?: string
	size?: string
}

export { IconSortUpController }
