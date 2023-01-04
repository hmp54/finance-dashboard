import React, {useEffect, useState} from 'react'
import {Button, Box, Typography, Paper} from '@mui/material'
import {
  PlaidLink,
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link';
import axios from 'axios'; 


export default function ConnectAccounts({openNav}) {
//  const { open, exit, ready } = usePlaidLink(config);
  const [token, setToken] = useState(null); 

  useEffect(() =>{
    axios.get('/link/token/create').then(response => {
      console.log(response)
    })
  }, [])


  return (
    <Paper 
      elevation={3} 
      sx={{width: '100vw', height: '100vh', margin: 0}}
      position='absolute'
      open='open'
    >
      <PlaidLink
      
        style={{ marginRight: "0", marginLeft: "auto"}}
        onSuccess={() => {console.log("Success")}}
      >
        Connect an account
      </PlaidLink>
    </Paper>
  )
}
