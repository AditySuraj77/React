import React from 'react'

function Button({ onclickbtn }) {
  const btnName = ['C', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', '*', '/', '=']
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '10px' }}>
      {btnName.map((btn) =>
        <button onClick={() => onclickbtn(btn)} style={{ width: '70px', margin: '1px', border: '1px solid grey', borderRadius: "3px" }}>{btn}</button>
      )}
    </div>
  )
}

export default Button