import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  // define States
  const [length, setlength] = useState(8)
  const [numberallowed, setnumberallowed] = useState(false)
  const [Charallowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState("")

  //Logic for building password generator using callback hook
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) {
      str += "0123456789"

    }
    if (Charallowed) {
      str += "!@#$%^&*-_+=[]{}~`"

    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)


    }

    // set the password in password state
    setPassword(pass)
    // dependencies for every change in password this is call again
  }, [length, numberallowed, Charallowed, setPassword])

  // use effect hooks use for run directly 
  useEffect(() => {
    passwordGenerator()
  }, [length, numberallowed, Charallowed, passwordGenerator])

  // copy functions
  let passwordRef = useRef(null)
  // copy to clipboard nction
  let copypasswordclipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (
    <>
      <div style={{ backgroundColor: 'white', width: '20%', padding: '20px', position: 'relative', left: '40%', top: '80%' }}>
        <h1 style={{ fontFamily: 'sans-serif' }}>Password Generator</h1>
        <input ref={passwordRef} type="text" value={password} readOnly placeholder='Password' />
        <button onClick={copypasswordclipboard} style={{ cursor: 'pointer' }}>Copy</button><br />
        <input onChange={(e) => { setlength(e.target.value) }} type="range" min={5} max={100} value={length} style={{ cursor: 'pointer' }} />
        <label style={{ fontFamily: 'sans-serif' }}>Length : ({length})</label><br />
        <input onChange={() => {
          setnumberallowed((prev) => !prev)
        }} type="checkbox" defaultChecked={numberallowed} /><label style={{ fontFamily: 'sans-serif' }}>Number</label>
        <input onChange={() => {
          setCharallowed((prev) => !prev)
        }} type="checkbox" defaultChecked={Charallowed} /><label style={{ fontFamily: 'sans-serif' }}>Char</label>
      </div>


    </>
  )
}

export default App
