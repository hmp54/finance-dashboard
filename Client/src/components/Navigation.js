import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import {
  IconButton, 
  Switch, 
  Toolbar, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiAppBar from '@mui/material/AppBar';
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import {ModeContext} from '../App'
import SignInWithGoogle from './SignInWithGoogle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import {Outlet, Routes, Route} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard'
import ConnectAccounts from './ConnectAccounts/ConnectAccounts';
import Settings from './Settings/Settings'

const drawerWidth = 240;



const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);


export default function Navigation({theme}) {
    const [open, setOpen] = useState(false); 
    const [activeScreen, setActiveScreen] = useState('Dashboard'); 
    const {setMode} = useContext(ModeContext); 


    const toggleActiveScreen = (screen) => {
     
    }


    const toggleDrawer = () =>{
      setOpen(!open); 
    }


    const toggleTheme = (e) => {
      if(e.target.checked)
        setMode('dark')
      else 
        setMode('light')
    }


  return (
    <Box sx={{display: 'flex'}}>
        <AppBar position="absolute" open={open}>
        <Toolbar>
            <IconButton 
                color="inherit" 
                onClick = {toggleDrawer}
                sx={{
                    marginRight: '36px',
                    ...(open && { display: 'none' }),
                }}
            >
                <MenuIcon/>
            </IconButton>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                Finance
            </Typography>
            <SignInWithGoogle/>
        </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open} sx={{height: '100vh', paddingRight: '10px', marginRight: '-1rem'}}>
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    px: [1]
                }}
            >
                <IconButton 
                    onClick={toggleDrawer}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </Toolbar>
            <Divider/>
            <List>
                <ListItemButton to = "/">
                    <AccountBalanceIcon sx={{marginRight: '36px', marginLeft: '15px'}}/>
                    <ListItemText>Dashboard</ListItemText>
                </ListItemButton>
                <ListItemButton to = "/connect-accounts">
                    <AccountTreeIcon sx={{marginRight: '36px', marginLeft: '15px'}}/>
                    <ListItemText>Connect Accounts</ListItemText>
                </ListItemButton>
                <ListItemButton to="/settings">
                    <SettingsIcon sx={{marginRight: '36px', marginLeft: '15px'}}/>
                    <ListItemText>Settings</ListItemText>
                </ListItemButton>
            </List>
            <Divider/>
            <ListItem 
                sx={{
                    ...(!open && {display: 'none'})
                }}>
                <ListItemText>Dark Mode</ListItemText>
                <Switch
                  onChange = {toggleTheme}
                />
            </ListItem>
        </Drawer>

        <Routes>
          <Route path="/" element={<Dashboard open={open}/>}/>
          <Route path="/connect-accounts" element={<ConnectAccounts openNav={open}/>}/>
          <Route path="/settings" element = {<Settings open={open}/>}/>
        </Routes>
        
  </Box>
  )
}
