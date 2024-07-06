import {createContext , useContext} from 'react';

// can inset default values in this
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme:() => {}
})


export const ThemeProvider = ThemeContext.Provider;


export default function useTheme(){
    return useContext(ThemeContext)
}

