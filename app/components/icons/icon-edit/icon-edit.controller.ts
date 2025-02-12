import { IComponentController } from 'angular'
import { IconEditProps } from './icon-edit.types'

class IconEditController implements IComponentController, IconEditProps {
	color?: string
	size?: string
}

export { IconEditController }
