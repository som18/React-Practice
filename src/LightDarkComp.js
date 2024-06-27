import React from 'react'
import { useTheme } from './ThemeContext'
import './styles/LightDark.css'
export default function LightDarkComp() {

    const {isdarkMode} = useTheme();
    const themeClass = isdarkMode ? 'dark-theme':'light';
  return (
    <div className={`container ${themeClass}`}>
      <p>This Component uses selected Theme.</p>
    </div>
  )
}
