import React, { useState } from 'react'

export default function Form() {
    const[input,setinput] = useState('');
  return (
    <div> 
      <input type='textbox' value={input} onChange={(e)=>setinput(e.target.value)}/>
      <p> User Input: {input}</p>
    </div>
  )
}
