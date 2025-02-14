import { IComponentController } from 'angular'
import { IconLoadingProps } from './icon-loading.types'

class IconLoadingController implements IComponentController, IconLoadingProps {
	circleColor?: string
	barBgColor?: string
	barColor?: string
	size?: string
}

export { IconLoadingController }
