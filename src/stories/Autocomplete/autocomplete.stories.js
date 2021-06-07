import React from 'react'
import { Autocomplete, StyleProvider } from 'engageme-ui'
import 'engageme-ui/dist/index.css'


export default {
  title: 'Example/Autocomplete',
  component: Autocomplete,
  argTypes: {
  }
}

const Template = (args) => {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  function handleChange(event, newValue) {
    setValue(newValue)
  }

  async function getValues() {
    setLoading(true);
    const response = await fetch('https://restcountries.eu/rest/v2/all')
    const data = await response.json();
    setOptions(data);
    setLoading(false)
  }

  return (
  <StyleProvider>
    <div style={{ width: '320px' }}>
      <a href="https://material-ui.com/es/api/autocomplete/" target="_blank"> 
        <p>
        Properties API
        </p>
       </a>
      <Autocomplete
        onOpen={getValues}
        value={value}
        onChange={handleChange}
        loading={loading}
        label="Epics"
        options={options}
        getOptionSelected={(option, value) => option.name === value.name}
        {...args}
      />
    </div>
  </StyleProvider>
)}

export const Preview = Template.bind({})
Preview.args = {
  loading: false,
  disabled: false
}
