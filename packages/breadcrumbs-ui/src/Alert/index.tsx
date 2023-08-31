import { Icons, Icon } from 'breadcrumbs-icons'
import Flex from '../Flex'
import { AlertProps, AlertTypes } from './types'
import classNames from 'classnames'
import { Colors } from 'breadcrumbs-theme'
import Text from '../Text'

const AlertVariants: Record<AlertTypes, { icon: Icons; color: Colors }> = {
  info: { icon: 'info', color: 'info' },
  warning: { icon: 'warning', color: 'warning' },
  success: { icon: 'check', color: 'success' },
  error: { icon: 'error', color: 'error' },
}

const Alert = ({
  className,
  alertType,
  message,
  onDismiss,
  children,
  ...props
}: AlertProps) => {
  const variant = AlertVariants[alertType]
  return (
    <Flex
      {...props}
      align="center"
      className={classNames(
        className,
        'rounded-xl py-2 px-3 max-w-[320px] bg-opacity-5 ease-in duration-700 opacity-100',
        `border border-${variant.color} bg-${variant.color}`,
      )}
      role="alert"
    >
      <Flex className="mr-3">
        <Icon color={variant.color} icon={variant.icon} size={20} />
      </Flex>
      <Flex wrap>
        {children ? children : <Text color={variant.color}> {message} </Text>}
      </Flex>
      {onDismiss && (
        <Icon
          icon="simple-exit"
          size={12}
          color={variant.color}
          className="ml-3 cursor-pointer"
          onClick={onDismiss}
        />
      )}
    </Flex>
  )
}

export default Alert
