import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();

const ThemeProvider = ({children})=>{
    const [isdarkMode,setIsDarkMode] = useState(false);

    const toggleTheme =()=>{
        setIsDarkMode((prevMode)=> !prevMode)
    };
    return(
        <ThemeContext.Provider value={{isdarkMode,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )

};

const useTheme = () =>{
    return useContext(ThemeContext)

}

export {useTheme,ThemeProvider}