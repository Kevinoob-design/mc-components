import { IComponentController } from 'angular'
import { IconSearchProps } from './icon-search.types'

class IconSearchController implements IComponentController, IconSearchProps {
	color?: string
	size?: string
}

export { IconSearchController }
