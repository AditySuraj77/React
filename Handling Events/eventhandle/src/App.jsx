import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState()
  const [form, setForm] = useState({ email: "", phone: "" })

  const bgchanger = () => {
    alert('Hey i am clicked')

  }
  const set_name = () => {
    setName(name)

  }
  const handlevalue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form);

  }
  const backgroundColorchnager = () => {
    document.body.style.backgroundColor = "aqua"

  }




  return (
    <>
      <button onClick={bgchanger}>Click</button><br />
      <input type="text" value={name} onChange={set_name} /><br />
      <label>Email: </label>
      <input type="text" name='email' value={form.email} onChange={handlevalue} />
      <label> Phone: </label>
      <input type="text" name='phone' value={form.phone} onChange={handlevalue} /><br />
      <button className='f-btn' onClick={backgroundColorchnager}>Click me to Change Background Color</button>
    </>
  )
}

export default App
