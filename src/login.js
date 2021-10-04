import React, { useState } from 'react'
import {UseState} from "react"
import {useHistory} from "react-router-dom";
import Profile from "./profile";

export default function Login() 
{
  const history = useHistory();

    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")
    const Loginsucess = () =>{
        if(email=="arjad@gmail.com" && pass =="123")
        {
            history.push("/profile")
        }
        else 
        {
            alert("Email : arjad@gmail.com;;; passord:123")
        }

    }
    return (
    <form className="container px-5">
       <h2>Login Form</h2>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" onChange={(e)=>{setemail(e.target.value)}} aria-describedby="emailHelp" placeholder="Enter email"/>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" onChange={(e)=>{setpass(e.target.value)}} id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button onClick={Loginsucess} type="submit" class="btn btn-primary">Submit</button>
    </form>
    )
}
