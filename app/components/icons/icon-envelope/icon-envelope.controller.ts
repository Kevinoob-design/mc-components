import { IComponentController } from 'angular'
import { IconEnvelopeProps } from './icon-envelope.types'

class IconEnvelopeController implements IComponentController, IconEnvelopeProps {
	color?: string
	size?: string
}

export { IconEnvelopeController }
