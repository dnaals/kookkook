"use client";
import { signIn,signOut,useSession } from "next-auth/react";
import React from 'react';
import '@/components/style/loginpage.scss'

function GoogleLogin() {
    const { data: session, status }:any = useSession();
    console.log(status)
    
    if (status === 'authenticated') {
<<<<<<< HEAD
        console.log(session)
        
        return <p>Signed in as {session.user.email}</p>
=======
        return <div><p onClick={logout}>Logout</p></div>
>>>>>>> a2a1428b39b6b0e66f05743441503b73c397ec80
    }

    async function login(){
        const result = await signIn("google", {
            redirect: true,
            callbackUrl: "/home",
        });    
    }    

    async function logout(){
        await signOut()
    }

    return (
        <div>
            <img src="/images/google.png" alt="" />
            <p onClick={login}>Login</p>
        </div>       
    );
}    

export default GoogleLogin;



