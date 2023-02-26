import React, { useEffect, useState, useRef } from 'react'
import {Button} from '@mui/material'; 
import jwt_decode from 'jwt-decode'; 
import SignInPopper from './SignInPopper';
import { googleLogout, GoogleLogin } from '@react-oauth/google';

export default function SignInWithGoogle() {
    const [user, setUser] = useState([]); 
    const [profile, setProfile] = useState()

    const handleCredentialResponse = (response) => {
        console.log(response)
        var userObject = jwt_decode(response.credential); 
        setUser(userObject); 
        setProfile(["test"])
    }

    const errorMessage = (error)=>{
        console.log(error)
    }

    const logOut = () => {
        googleLogout();
        setProfile(null);
    };

    return(
        profile ? <Button variant="contained" onClick={logOut}>Log out</Button>
            : <GoogleLogin id="sign-in-button" onSuccess={handleCredentialResponse} onError={errorMessage} />
     
    )
}
    // const [user, setUser] = useState(); 
    // 
    // const googleAuth = document.createElement("google-auth")
    // const divRef = useRef(null);



    // const handleLogout = (event) =>{ 
    //     setUser(); 
    //     document.getElementById("sign-in-button").hidden = false; 
    // }

    // useEffect(() => {
    //     const google = window.google;
    //     console.log("ATTEMPTING TO CONNECT")
    //         google.onload = () => {
    //             google.accounts.id.initialize({
    //                 client_id: GOOGLE_CLIENT_ID,
    //                 callback: handleCredentialResponse
    //             });
    //             console.log("Attempting to render: ")
    //             google.accounts.id.renderButton(
    //                 divRef.current, 
    //                 {theme: "outline", size: "large"}
    //             )            
    //         }
    // }, [divRef.current]) 

    // return (
    //     <button onClick={divRef}/>
    // )
