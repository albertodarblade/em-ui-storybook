import React from 'react'
import { Button, StyleProvider } from 'engageme-ui'
import 'engageme-ui/dist/index.css'


const { COLORS, SIZE } = Button.ENUMS;

export default {
  title: 'Example/Button',
  component: Button,
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
    <Button {...args} />
  </StyleProvider>
)

export const Preview = Template.bind({})
Preview.args = {
  children: 'EXAMPLE',
  isPrimaryAction: true,
  disabled: false,
  loading: false,
  icon: 'people'
}
