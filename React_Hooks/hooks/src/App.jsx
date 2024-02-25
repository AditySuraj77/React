import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [counter, setCouter] = useState(0)
  let [time, setTime] = useState('')



  // UseEffect Hook 
  useEffect(() => {
    alert('Page Load')
  }, [])
  // useEffect hook used for The useEffect Hook allows you to perform side effects in your components. Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.
  // UseEffect Hook
  useEffect(() => {
    alert('Counter Fire')

  }, [counter])

  useEffect(() => {
    let currenttime = setInterval(() => {
      let time = new Date()
      time = time.toLocaleString()
      setTime(time)
    }, 1000);

    return () => {
      clearInterval(currenttime)
      alert('Component was Unmounted')
    }
  }, [])



  const increase = () => {
    console.log('Value Increase');
    if (counter != 20) {
      setCouter(counter + 1)
    }
  }

  const decrease = () => {
    if (counter >= 1) {
      console.log('Value Decrease');
      setCouter(counter - 1)

    }

  }
  return (
    <>
      <h1>React APP</h1>
      <h3>Counter: {counter}</h3>
      <p>You can Increase Value between 0 to 20</p>
      <p>You can Decrease Value between 20 to 0</p>
      <button style={{ color: 'white' }} onClick={increase}>Increase Value</button>
      <button style={{ color: 'white' }} onClick={decrease}>Decrease Value</button>
      <p>Current Time : {time}</p>
    </>
  )
}

export default App
