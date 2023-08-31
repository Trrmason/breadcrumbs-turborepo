import React from 'react'
import { ButtonProps, Sizes, Variants } from './types'
import classNames from 'classnames'
import { Icon } from 'breadcrumbs-icons'
import { Colors } from 'breadcrumbs-theme'
import Flex from '../Flex'

const ButtonSizeVariants: Record<Sizes, string> = {
  sm: 'px-2 py-2',
  md: 'px-3 py-4',
  lg: 'px-4 py-5',
  full: 'w-full p-2',
}

const getButtonVariants = (variant: Variants, color: Colors) => {
  switch (variant) {
    case 'secondary':
      return `bg-none`
    default:
      return `bg-${color}`
  }
}

const Button = ({
  className,
  children,
  icon,
  textColor,
  iconPosition = 'start',
  backgroundColor = 'button',
  variant = 'primary',
  size = 'sm',
  animate = true,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        className,
        getButtonVariants(variant, backgroundColor),
        `text-${
          variant === 'secondary' ? textColor ?? 'text' : textColor ?? 'white'
        } border border-${backgroundColor} ${
          animate && 'active:scale-[98%] transition'
        }`,
        'rounded-lg',
        size && ButtonSizeVariants[size],
      )}
      {...props}
    >
      {icon ? (
        <Flex align="center" justify="center">
          {iconPosition === 'start' ? (
            <>
              <Icon icon={icon} color={textColor} size={20} className="mr-2" />
              {children}
            </>
          ) : (
            <>
              {children}
              <Icon icon={icon} color={textColor} size={20} className="ml-2" />
            </>
          )}
        </Flex>
      ) : (
        children
      )}
    </button>
  )
}

export default Button
