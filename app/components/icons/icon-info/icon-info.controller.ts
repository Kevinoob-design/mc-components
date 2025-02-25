import { IComponentController } from 'angular'
import { IconInfoProps } from './icon-info.types'

class IconInfoController implements IComponentController, IconInfoProps {
	color?: string
	size?: string
}

export { IconInfoController }
