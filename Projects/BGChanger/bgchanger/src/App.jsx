import { useState } from 'react'

import './App.css'

function App() {
  let [color, setColor] = useState("")

  return (

    <div style={{backgroundColor:color, width:'100vw', height:'100vh', borderRadius:'10px'}}>
      <div style={{ width:'20vw', display:'flex',gap:'10px', padding:'10px' }}>
        <button onClick={()=> setColor("green")} style={{backgroundColor:'green', width:'100px', border:'2px solid grey'}}>Green</button>
        <button onClick={()=> setColor("blue")} style={{backgroundColor:'blue', width:'100px', border:'2px solid grey'}}>Blue</button>
        <button onClick={()=> setColor('red')} style={{backgroundColor:'red', width:'100px', border:'2px solid grey'}}>Red</button>
        <button onClick={()=> setColor('yellow')} style={{backgroundColor:'yellow', color:'black', width:'100px', border:'2px solid grey'}}>Yellow</button>
        <button onClick={()=> setColor('violet')} style={{backgroundColor:'violet', color:'black', width:'100px', border:'2px solid grey'}}>Violet</button>
        <button onClick={()=> setColor('tan')} style={{backgroundColor:'tan', color:'black', width:'100px', border:'2px solid grey'}}>Tan</button>
        <button onClick={()=> setColor('purple')} style={{backgroundColor:'purple', color:'black', width:'100px', border:'2px solid grey'}}>Purple</button>
      </div>
    </div>
  )
}

export default App
