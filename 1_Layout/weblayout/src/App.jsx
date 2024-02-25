import { useState } from 'react'
import Navbar from './Components/Navbar'
import Jumbotron from './Components/Jumbotron'
import Cards from './Components/Cards'


function App() {
  const [count, setCount] = useState(0)
  let imglink = {
    link1: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
    link2: "https://www.akamai.com/site/im-demo/perceptual-standard.jpg?imbypass=true",
    link3: "https://img.freepik.com/photos-premium/image-paysage-montagnes-colorees-ciel_772924-1345.jpg"
  }

  return (
    <>
      <Navbar />
      <Jumbotron source={imglink} height='500px' />
      <Cards />
      <Cards />
    </>
  )
}

export default App
