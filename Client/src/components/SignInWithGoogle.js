import React, { useEffect } from 'react'
import {Button, Typography} from '@mui/material'; 
import {GoogleLogin} from 'react-google-login'
import googleAuthenticationClientID from '../.env'

export default function SignInWithGoogle() {

    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token" + response)
    }

    useEffect(()=>{
        console.log("Private key: " + googleAuthenticationClientID)
        google.accounts.id.initialize({
            client_id: googleAuthenticationClientID,
            callback: handleCredentialResponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"), 
            {theme: "outline", size: "large"}
        );
    }, [])

    return (
        <div id="signInDiv" class="test"></div>     
    )
}

/*



*/ 