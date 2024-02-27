"use client";
import { signIn,useSession } from "next-auth/react";
import React from 'react';

function GoogleLogin() {
    const { data: session, status }:any = useSession();
    
    if (status === 'authenticated') {
        console.log(session)
        return <p>Signed in as {session.user.email}</p>
    }

    async function login(){
        const result = await signIn("google", {
            redirect: true,
            callbackUrl: "/",
        });    
    }    

    return (
        <div>
            <button onClick={login}>google</button>
            <button></button>
        </div>        
    );
}    

export default GoogleLogin;



