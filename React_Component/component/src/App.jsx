import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Card'

function Card() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1 className='bg-green-400 p-8 text-black rounded-xl mb-5'>Tailwind</h1>
      <Cards display='Buy Now'/>
      <Cards display='Read now'/>

    </>
  )
}

export default Card
