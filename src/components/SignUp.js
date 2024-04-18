import React, { useState } from 'react'
import axios from 'axios';  
import {  useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'; 
const SignUp = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const useRegister=async ()=>{
        // let formData = new FormData();
        // formData('id',85)
        //    formData.append("userName",name);
        //    formData.append("email",email);
        //    formData.append("password",password);
        try{
          console.log(name);
          console.log(email);
         var res=await axios.post('https://localhost:7188/api/User',{
            userName:name,
            email:email,
            password:password
         },{
         headers: {
          'Content-Type': 'application/json'
        }})
        console.log(res);
        alert("successfully registered")
        navigate('/login');
        }
        catch(err){
       alert("user already exist")

        }
    }
  return (
<>
<h1>SignUp</h1>
    <Form>
  <label>username</label>
  <input type="text" onChange={(e)=>setName(e.target.value)}/>
  <br/>
  <br/>
  <label>email</label>
  <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
  <br/>
  <br/>
  <label>password</label>
  <input type="text" onChange={(e)=>setPassword(e.target.value)}/>
  <br/>
  <br/>
  <Button onClick={useRegister}>submit</Button>
</Form>
</>
  )
}

export default SignUp