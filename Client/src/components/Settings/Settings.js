import React from 'react'
import {
    Paper,
    Box, 
    Typography
} from '@mui/material'

export default function Settings() {
  return (
    <Paper       
    elevation={3} 
    sx={{width: '100vw', height: '100vh', margin: 0}}
    position='absolute'
    open='open'
    >
         <Box sx={{marginLeft: '2em', marginTop: '5.5em'}}>
            <Typography>Settings</Typography>
         </Box>
    </Paper>
  )
}
