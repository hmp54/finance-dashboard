import './App.css';
import React, { useState, createContext, useContext } from 'react'
import Navigation from './components/Navigation'
import Dashboard from './components/Dashboard/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material';
import ConnectAccounts from './components/ConnectAccounts/ConnectAccounts';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


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
      <Router>
        <ThemeProvider theme={theme}>
            <Navigation theme={theme}/>
        </ThemeProvider>


      </Router>
    </ModeContext.Provider>
  );
}