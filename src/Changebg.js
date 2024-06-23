import React, { useState } from 'react'

export default function Changebg() {
 
    const[backgroundColor,setBackgroundcolor] = useState('white');

    const handleclick=()=>{
        const newColor = backgroundColor ==='white' ? 'lightblue' : 'white';
        setBackgroundcolor(newColor);
    }

  return (
    <div onClick={handleclick} style ={{
        backgroundColor,
        width:'200px',
        height:'200px',
        cursor:'pointer'
    }

    }>
      Click me for Change background color
    </div>
  )
}
