import React, {useState} from 'react'
import {Button, Box, Typography, Paper} from '@mui/material'
import {
  usePlaidLink,
  PlaidLinkOptions,
  PlaidLinkOnSuccess,
} from 'react-plaid-link';

const config = {
  onSuccess: (public_token, metadata) => {console.log("Success:" + public_token)},
  onExit: (err, metadata) => {},
  onEvent: (eventName, metadata) => {},
  token: 'GENERATED_LINK_TOKEN',
  //required for OAuth; if not using OAuth, set to null or omit:
  receivedRedirectUri: window.location.href,
};

export default function ConnectAccounts({open}) {
  const {openPlaid, exit, ready} = usePlaidLink(config); 
  
  return (
    <Paper 
      elevation={3} 
      sx={{width: '100vw', height: '100vh', margin: 0}}
      position='absolute'
      open='open'
    >
      <Box sx={{marginLeft: '2em', marginTop: '5.5em'}}>
          <Button variant="contained" onClick={openPlaid}>Connect account with Stripe</Button>
      </Box>
    </Paper>
  )
}
