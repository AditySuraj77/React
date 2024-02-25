import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
     const parmas= useParams()
  return (
    <h3>Hello i am {parmas.username}</h3>
  )
}

export default User