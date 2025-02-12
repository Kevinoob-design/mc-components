import { IComponentController } from 'angular'
import { IconButtonProps } from './icon-button.types'

class IconButtonController implements IComponentController, IconButtonProps {
	onClick?: () => void
}

export { IconButtonController }
