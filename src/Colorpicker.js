import React, { useState } from 'react'

export default function Colorpicker() {
    const [selectedColor,setselectedColor] = useState('#000000');

    const handleChange = (e) =>{
        setselectedColor(e.target.value);
    }
  return (
    <div>
      <input type='color' onChange={handleChange}/>
      <div style={{width: '100px',height:'100px',backgroundColor: selectedColor}}>

      </div>
    </div>
  )
}
