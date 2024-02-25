import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
     <nav class="navbar navbar-expand-lg bg-primary">
     <div class="container-fluid">
       <a class="navbar-brand text-light" href="/">Navbar</a>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
         <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{gap:'15px'}} >
           <li class="nav-item">
             <NavLink style={{color:'white', listStyle:'none'}} className={(e)=>{return e.isActive?'link-danger':""}}  class="nav-link active " aria-current="page" to="/">Home</NavLink>
           </li>
           <li class="nav-item ">
             <NavLink style={{color:'white', listStyle:'none'}} className={(e)=>{return e.isActive?'link-danger':""}}  class="nav-link active " aria-current="page" to="/services">Services</NavLink>
           </li>
           <li class="nav-item ">
             <NavLink style={{color:'white', listStyle:'none'}} className={(e)=>{return e.isActive?'link-danger':""}}  class="nav-link " to="/about">About</NavLink>
           </li>
         </ul>
         <form class="d-flex" role="search">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-outline-success text-light" type="submit">Search</button>
         </form>
       </div>
     </div>
   </nav>
  )
}

export default Navbar