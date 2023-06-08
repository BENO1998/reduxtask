import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './App.css'

export const Login =()=>{

    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
const dispatch=useDispatch()
const users = useSelector(state=> state.users)
const login =()=>{
    

    const payload = users.find(user=> user.username === username && user.password === password)

    if(payload){
dispatch({
    type : 'Login',
    payload
})
alert('Login Successful!!')
    }else{
        alert('User Not Found')
    }
}

    return(
        <form className="login-form">
            <h3>Login Here</h3>
             <input type="text" placeholder="Email"value={username} onChange={e=>setUsername(e.target.value)}/><br/><br/>
            <input type="password" placeholder="Password"value={password} onChange={e=>setPassword(e.target.value)}/><br/><br/>
            <input type="button" value="Login"onClick={login}/><br/>
        </form>
    )
}