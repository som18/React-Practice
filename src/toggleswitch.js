import React, { useState } from 'react'

export default function Toggleswitch() {
 const [istoggled,setistoggled] = useState(false);

 const handleToggle = () =>{
    setistoggled(!istoggled)
 }
  return (
    <div>
      <label>
        <input type='checkbox' onChange={handleToggle}/>
      </label>
      <p>{istoggled? "On" : "Off"}</p>
    </div>
  )
}
