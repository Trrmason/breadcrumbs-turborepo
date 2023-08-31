import React from 'react'
import { Flex, Input, Text, Divider, Button, Checkbox } from '@breadcrumbs/ui'
import { LoginProps } from './types'
import classNames from 'classnames'

/**
 * `Login` component for user authentication.
 *
 * @component
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onUserInput - Callback function to handle user input changes
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onPasswordInput - Callback function to handle password input changes
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} onRememberMe - Callback function to handle remember me checkbox toggling
 * @param {() => void} onSignIn - Callback function to handle sign-in action
 * @param {string} [inputBackgroundColor] - Background color of the input fields
 * @param {boolean} [socialLogin] - Whether to show social login buttons or not
 * @param {string} [signInButtonTextColor] - Text color of the sign-in button
 * @param {string} [textColor='text'] - Default text color for the component
 * @param {string} [buttonColor='button'] - Default button color for the component
 * @param {string} [widgetTitle='Welcome'] - Title text displayed at the top of the widget
 * @param {string} [widgetBackgroundColor='background'] - Background color of the widget
 * @param {string} [widgetBorderColor='border'] - Border color of the widget
 * @param {string} [userFieldText='email'] - Determines the type and placeholder of the user input field (can be 'email' or another value for 'username')
 * @param {string} [signInText='Sign in to your account'] - The sign-in description text
 * @param {object} [placeholder] - Placeholder values for user and password inputs
 * @param {object} [labels] - Label text values for user and password inputs
 */

const Login = ({
  onUserInput,
  onPasswordInput,
  onRememberMe,
  onSignIn,
  inputBackgroundColor = 'input',
  socialLogin,
  signInButtonTextColor,
  textColor = 'text',
  buttonColor = 'button',
  widgetTitle = 'Welcome',
  widgetBackgroundColor = 'backgroundBright',
  widgetBorderColor = 'border',
  userFieldText = 'email',
  signInText = 'Sign in to your account',
  placeholder = {
    user: userFieldText === 'email' ? 'Email' : 'Username',
    password: 'Password',
  },
  labels = {
    user: userFieldText === 'email' ? 'Email' : 'Username',
    password: 'Password',
  },
}: LoginProps) => {
  return (
    <Flex
      direction="column"
      className={classNames(
        `bg-${widgetBackgroundColor} border-${widgetBorderColor}`,
        'border w-full max-w-[500px] min-w-[250px] p-4 md:p-7 rounded-[10px]',
      )}
    >
      <Flex className="w-full">
        <Text size="large" className="w-full" weight="bold" color={textColor}>
          {widgetTitle}
        </Text>
      </Flex>
      {socialLogin && (
        <Flex className="w-full mt-7 mb-3 flex-wrap md:flex-nowrap">
          <Button
            icon="google"
            variant="secondary"
            backgroundColor={buttonColor}
            textColor={textColor}
            size="full"
          >
            Log in with Google
          </Button>
          <span className="mx-2 my-2 md:my-0" />
          <Button
            icon="apple"
            variant="secondary"
            textColor={textColor}
            backgroundColor={buttonColor}
            size="full"
          >
            Log in with Apple
          </Button>
        </Flex>
      )}
      <Flex className="w-full my-5" align="center">
        {socialLogin && (
          <>
            <Divider color={buttonColor} />
            <Text lineHeight="none" className="mx-5" color={buttonColor}>
              or
            </Text>
          </>
        )}
        <Divider color={buttonColor} />
      </Flex>
      <Flex
        direction="column"
        align="center"
        justify="space-between"
        className="h-[160px] md:h-[170px] w-full"
      >
        <Input
          placeholder={placeholder.user}
          type={userFieldText === 'email' ? 'email' : 'text'}
          icon={userFieldText === 'email' ? 'mail' : 'person'}
          className="transform-capitalize"
          label={labels.user}
          backgroundColor={inputBackgroundColor}
          borderColor={buttonColor}
          textColor={textColor}
          onChange={onUserInput}
        />
        <Input
          placeholder={placeholder.password}
          icon="lock"
          type="password"
          label={labels.password}
          borderColor={buttonColor}
          backgroundColor={inputBackgroundColor}
          textColor={textColor}
          onChange={onPasswordInput}
        />
      </Flex>
      <Flex className="mt-5">
        <Checkbox
          label="Remember me?"
          color={buttonColor}
          textColor={textColor}
          backgroundColor={inputBackgroundColor}
          onChange={onRememberMe}
        />
      </Flex>
      <Flex className="w-full mt-5">
        <Button
          size="full"
          backgroundColor={buttonColor}
          textColor={signInButtonTextColor}
          onClick={onSignIn}
        >
          {signInText}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Login
