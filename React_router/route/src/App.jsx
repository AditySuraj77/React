import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Services from './Components/Services'
import About from './Components/About'
import User from './Components/User'
function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Home/></>
    },
    {
      path:'/about',
      element:<><Navbar/><About/></>
    },
    {
      path:'/services',
      element:<><Navbar/><Services/></>
    },
    {
      path:'/user:username',
      element:<><Navbar/><User/></>
    }
  ])



  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
