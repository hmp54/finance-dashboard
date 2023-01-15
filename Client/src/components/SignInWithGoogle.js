import React, { useEffect, useState } from 'react'
import {Button, Typography} from '@mui/material'; 
import {GoogleLogin} from 'react-google-login'
//import {googleAuthenticationClientID} from '../.secret/keys'
import jwt_decode from 'jwt-decode'; 
import SignInPopper from './SignInPopper';

export default function SignInWithGoogle() {
    const [user, setUser] = useState(); 


    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token" + response.credential); 
        var userObject = jwt_decode(response.credential); 
        console.log(userObject); 
        setUser(userObject); 
        document.getElementById("signInDiv").hidden = true; 
    }


    const handleLogout = (event) =>{ 
        setUser(); 
        document.getElementById("signInDiv").hidden = false; 
    }


    useEffect(()=>{
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
        <div>
            <div id="signInDiv"></div>
            { user &&
                <div>
                    <SignInPopper/>
                    <Button variant = "contained" onClick={handleLogout}>Sign out</Button>
                </div>
            }
        </div>
    )
}

/**
 * 
 * <div>
                    <img src={user.picture} style = {{height: '2rem', width: '2rem', borderRadius:'15px'}}/>
                </div>
 */