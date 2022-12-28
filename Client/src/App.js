import './App.css';
import React, { useState, createContext, useContext } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material';

export const ModeContext = createContext(); 

export default function App() {
  const[mode, setMode] = useState('light'); 

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ModeContext.Provider value={{setMode}}>
      <ThemeProvider theme={theme}>
          <Navigation theme={theme}/>
      </ThemeProvider>
    </ModeContext.Provider>
  );
}