import React from 'react'
import { IconProps } from '../types'

const Icon = ({ ...props }: IconProps) => {
  return (
    <svg
      enable-background="new 0 0 64 64"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <g>
          <path
            d="m32 50.95c-1.19 0-2.32-.49-3.14-1.35l-27.68-29.26c-1.64-1.74-1.57-4.47.17-6.11 1.73-1.64 4.47-1.57 6.11.17l24.54 25.94 24.53-25.94c1.64-1.74 4.38-1.81 6.11-.17 1.74 1.64 1.81 4.38.17 6.11l-27.67 29.26c-.82.86-1.95 1.35-3.14 1.35z"
          ></path>
        </g>
      </g>
    </svg>
  )
}

export default Icon
