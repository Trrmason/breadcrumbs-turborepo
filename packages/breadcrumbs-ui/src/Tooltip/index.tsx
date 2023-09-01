import React from 'react'
import { Positions, TooltipProps } from './types'
import classNames from 'classnames'
import Text from '../Text'

const tooltipPositionVariants: Record<Positions, string> = {
  top: 'bottom-full mb-2 left-1/2 transform -translate-x-1/2',
  right: 'left-full ml-2 top-1/2 transform -translate-y-1/2',
  bottom: 'top-full mt-2 left-1/2 transform -translate-x-1/2',
  left: 'right-full mr-2 top-1/2 transform -translate-y-1/2',
}

const Tooltip = ({
  text,
  content,
  className,
  position = 'top',
  backgroundColor = 'secondaryDark',
  textColor = 'white',
  children,
  ...props
}: TooltipProps) => {
  return (
    <div className="relative group">
      <div className="transition-opacity hover:opacity-80 duration-150">
        {children}
      </div>
      <div
        className={classNames(
          className,
          'absolute p-2 inline-block w-max max-w-[300px] rounded-md shadow group-hover:opacity-100 opacity-0 duration-150 transition-transform transform group-hover:scale-105 z-[9999] pointer-events-none group-hover:pointer-events-auto',
          `bg-${backgroundColor} text-${textColor} shadow-${backgroundColor}`,
          tooltipPositionVariants[position],
        )}
        {...props}
      >
        {content ? (
          content
        ) : (
          <Text size="small" color={textColor}>
            {text}
          </Text>
        )}
      </div>
    </div>
  )
}

export default Tooltip
