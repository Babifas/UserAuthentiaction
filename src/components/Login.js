import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const loginUser=async ()=>{
    console.log(email);
    try{
      var res=await axios.get(`https://localhost:7188/api/User?email=${email}&password=${password}`);
    
        navigate('/home');

      console.log(res);
    }
    catch(err){
      alert("incorrect email or password");
    }
  }
  return (
    <>
    <h1>Login</h1>
    <Form>
    <label>email</label>
    <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <br/>
    <label>password</label>
    <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
    <br/>
    <br/>
    <Button onClick={loginUser}>submit</Button>
  </Form>
  </>
  )
}

export default Login