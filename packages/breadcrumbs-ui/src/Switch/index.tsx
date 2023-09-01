import React from 'react'
import { LabelDirections, SwitchProps } from './types'
import Flex from '../Flex'
import classNames from 'classnames'
import Text from '../Text'

const labelVariants: Record<LabelDirections, { text: string; flex: string }> = {
  left: { text: 'mr-2', flex: '' },
  right: { text: 'ml-2', flex: 'flex-row-reverse' },
}

const Switch = ({
  isChecked,
  onChange,
  className,
  label,
  labelDirection = 'right',
  onBackgroundColor = 'primary',
  offBackgroundColor = 'placeholderText',
  toggleColor = 'white',
  ...props
}: SwitchProps) => {
  return (
    <Flex align="center" className={labelVariants[labelDirection].flex}>
      <Text size="small" className={labelVariants[labelDirection].text}>
        {label}
      </Text>
      <Flex
        {...props}
        role="checkbox"
        aria-checked={isChecked}
        onClick={onChange}
        className={classNames(
          className,
          'relative inline-block w-12 h-6 select-none cursor-pointer transition-colors duration-300 ease-in',
        )}
      >
        <div
          className={classNames(
            'absolute top-0.5 left-0.5 w-5 h-5 transition-transform  duration-300 transform rounded-full shadow',
            `bg-${toggleColor}`,
            isChecked ? 'translate-x-6' : 'translate-x-0',
          )}
        ></div>
        <div
          className={classNames(
            'block w-12 h-6 rounded-full',
            isChecked ? `bg-${onBackgroundColor}` : `bg-${offBackgroundColor}`,
          )}
        ></div>
      </Flex>
    </Flex>
  )
}

export default Switch
