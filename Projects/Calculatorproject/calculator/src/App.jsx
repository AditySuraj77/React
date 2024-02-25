import { useState } from 'react'
import Input from './Components/Input';
import Button from './Components/Button';


function App() {
  const [value, setValue] = useState("")


  function onButtonclicked(buttonText) {
    if (buttonText === "C") {
      setValue("")

    }
    else if (buttonText === '=') {
      const result = eval(value)
      setValue(result)

    }
    else {
      let newval = value + buttonText
      setValue(newval)
    }

  }

  return (
    <>
      <div
        style={{
          width: '20%', minHeight: '40%',
          border: '1px solid grey', borderRadius: '5px',
          padding: '10px',
          position: 'relative',
          left: '40%',
          top: '100px'
        }}>
        <Input changevalue={value} />
        <Button onclickbtn={onButtonclicked} />

      </div>
    </>
  )
}

export default App;

