import React from 'react'
import { useTheme } from './ThemeContext'

export default function LightDark() {

    const{isdarkMode,toggleTheme} = useTheme();
  return (
    <div>
        <label>
            <input type='checkbox' checked={isdarkMode} onChange={toggleTheme}/>
            Dark Mode
        </label>
      
    </div>
  )
}
