import React, { useEffect } from 'react'
import {Button, Typography} from '@mui/material'; 


export default function SignInWithGoogle() {
   // var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;

    const handleLogin = async () =>{ 
        
    }


    return (
        <Button onClick = {handleLogin} variant='contained' color='inherit'>
            <Typography sx={{color: 'black'}}>Log in with Google</Typography>
        </Button>       
    )
}

/*



*/ 