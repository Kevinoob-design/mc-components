import { IComponentController } from 'angular'
import { ChipProps } from './chip.types'

class ChipController implements IComponentController, ChipProps {
	label: string
	bgColor?: string
}

export { ChipController }
