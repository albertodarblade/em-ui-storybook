import React from 'react'
import { IconButton, StyleProvider } from 'engageme-ui'
import 'engageme-ui/dist/index.css'


const { COLORS, SIZE } = IconButton.ENUMS;

export default {
  title: 'Example/IconButton',
  component: IconButton,
  argTypes: {
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
    <IconButton {...args} />
  </StyleProvider>
)

export const Preview = Template.bind({})
Preview.args = {
  shadow: false,
  isPrimaryAction: false,
  disabled: false,
  loading: false,
  name: 'people'
}
