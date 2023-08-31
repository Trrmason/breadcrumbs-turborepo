// import { keys } from 'lodash'
import {
  colorSafelist,
  colorSafelistForStorybookOnly,
  theme,
  defaultTheme,
} from '@breadcrumbs/theme/src/colors'
import { mediaQueries, MediaSizes } from '@breadcrumbs/theme/src/mediaQueries'
// import { Colors } from './src/theme/types'
// const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './stories/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/breadcrumbs-ui/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/breadcrumbs-widgets/src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/breadcrumbs-icons/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [...colorSafelist, ...colorSafelistForStorybookOnly],
  theme: {
    extend: {
      colors: {
        green: 'blue',
      },
    },
    screens: mediaQueries,
  },
  plugins: [theme, require('@tailwindcss/forms')],
}
