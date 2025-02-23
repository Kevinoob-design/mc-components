import { IComponentController } from 'angular'
import { IconXProps } from './icon-x.types'

class IconXController implements IComponentController, IconXProps {
	color?: string
	size?: string
}

export { IconXController }
