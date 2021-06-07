import React from 'react'
import { StyleProvider, DateTimePicker } from 'engageme-ui'
import 'engageme-ui/dist/index.css'


const { LANGUAGES, VARIANTS } = DateTimePicker.ENUMS;

export default {
  title: 'Example/DateTimePicker',
  component: DateTimePicker,
  argTypes: {
    language: {
      options: Object.values(LANGUAGES),
      control: { type: 'radio' }
    },
    variant: {
      options: Object.values(VARIANTS),
      control: { type: 'radio' }
    },
  }
}

const Template = (args) => {
  const [value, setValue] = React.useState(null)
  return (
  <StyleProvider>
    <DateTimePicker {...args} value={value} onChange={setValue}/>
  </StyleProvider>
)}

export const Preview = Template.bind({})
Preview.args = {
  disabled: false,
  ampm: false,
  autoOk: false,
  disableFuture: false,
  disablePast: false,
  disableToolbar: false,
  clearable: false,
  showTodayButton: false,
  value: null,
  emptyLabel: 'None',
  minutesStep: 1,
  label: 'Select a due date',
  dateFormat: 'MMMM Do YYYY,'
}
