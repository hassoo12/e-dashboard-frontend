import React from "react";
import { useState } from "react";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const collectData=()=>{
        console.log(email,password)
    }
    
    return(
        <div className="login">
        <h1>Login page</h1>

        <input type="text" className="inputBox"
        value={email} onChange={(e)=>setEmail(e.target.value)} 
        placeholder="Enter Email"/>

        <input type="password" className="inputBox" 
        value={password} onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Enter Password"/>

        <button type="button" className="appButton" 
        onClick={collectData}>
            Login</button>
        </div>
    )
}

export default Login;