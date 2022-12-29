import React from 'react'
import googleAuthenticationClientID from '../.env'
import { GoogleLogout } from 'react-google-login';

export default function SignOutWithGoogle() {

    const logout = () =>{ 
        console.log("Logout successful")
    }
    
  return (
    <GoogleLogout
        clientId="googleAuthenticationClientID"
        buttonText="Logout"
        onLogoutSuccess={logout}
    >
    </GoogleLogout>
  )
}
