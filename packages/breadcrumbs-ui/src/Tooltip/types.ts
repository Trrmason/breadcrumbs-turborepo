import { Colors } from 'breadcrumbs-theme'
import { WithDiv } from 'breadcrumbs-types'
import { ReactNode } from 'react'

export type Positions = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  text?: string
  content?: ReactNode
  backgroundColor?: Colors
  textColor?: Colors
  position?: Positions
}

export type TooltipProps = WithDiv<Props>
