import { IComponentController } from 'angular'
import { IconUserGroupProps } from './icon-user-group.types'

class IconUserGroupController implements IComponentController, IconUserGroupProps {
	color?: string
	size?: string
}

export { IconUserGroupController }
