import React from 'react'

function Input({ changevalue }) {
  return (
    <input style={{ border: '2px solid grey' }} value={changevalue} readOnly type="text" class="form-control" />
  )
}

export default Input