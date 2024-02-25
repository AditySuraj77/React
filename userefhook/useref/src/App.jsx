import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const firstref = useRef(0)
  const btnref = useRef()

  useEffect(() => {
    firstref.current = firstref.current + 1

  });

  const chnagecolor = () => {
    let flag = true
    if (flag) {
      btnref.current.style.backgroundColor = 'red'
      flag = false
    }
    else{
      btnref.current.style.backgroundColor = 'grey'
      
    }
  }



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>{firstref.current}</p>
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={chnagecolor}>Change Color</button>
    </>
  )
}

export default App
