import { Colors } from 'breadcrumbs-theme'
import { WithDiv } from 'breadcrumbs-types'

export type LabelDirections = 'right' | 'left'

interface Props {
  isChecked: boolean
  onChange: (checked: boolean) => void
  onBackgroundColor?: Colors
  offBackgroundColor?: Colors
  toggleColor?: Colors
  label?: string
  labelDirection: LabelDirections
}

export type SwitchProps = WithDiv<Props>
