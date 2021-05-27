import React from 'react'
import {Button, StyleProvider} from 'engageme-ui'
import 'engageme-ui/dist/index.css'

 const COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error',
  WARNING: 'warning',
  SUCCESS: 'success'
}

 const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
}

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    isPrimaryAction: true,
    color: {
      options: Object.values(COLORS),
      control: { type: 'radio' }
    },
    size: {
      options: Object.values(SIZE),
      control: { type: 'radio' }
    }
  }
}

const Template = (args) => (
  <StyleProvider>
    <Button {...args} />
  </StyleProvider>
)

export const Preview = Template.bind({})
Preview.args = {
  children: 'EXAMPLE'
}
