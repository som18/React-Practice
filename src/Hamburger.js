import React, { useState } from 'react'
import './styles/Hamburger.css'

export default function Hamburger() {

    const[isOpen,setIsOpen] = useState(false);

    const tooglemenu =()=>{
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <button className='menu-icon' onClick={tooglemenu}>
            Menu
        </button>
        <ul className={`menu ${isOpen ? 'open':''}`} >
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contacts</li>
        </ul>
      
    </div>
  )
}
