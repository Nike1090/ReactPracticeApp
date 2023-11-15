import React from 'react'
import Card from '../Card/Card'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
const services = require('../Services/services')

export const Login = () => {
  const [errors, setErrors] = useState(null);
  const [isLoginValid, setIsLoginValid] = useState(null);
  const [user, setUser ] = useState(null);



  const LoginError = (props) => {
    return (
      <div className='loginerror'>{props.error}</div>
    )
  }

  const loginUser = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setErrors("Email/Password cannot be empty, try again")
      setIsLoginValid(true)
    } else {
      try {
        console.log("Trying to login")
        const user = await services.login(email, password)
       
        setIsLoginValid(false)
        if (!sessionStorage.getItem("user")) {
          sessionStorage.setItem("user", JSON.stringify(user))
        }
        setUser(user);
      } catch (e) {
        // console.log(e)
        setErrors(e)
        setIsLoginValid(true)
      }
    }
  }



  return (
    
    <Card className="login-card">
      {user && <Navigate to="/home" />}
      <form onSubmit={loginUser} className="login-form">
        {isLoginValid && <LoginError error={errors} />}
        <label htmlFor='email'>Login</label>
        <div>
        <input type="text" id='email' name='email' placeholder='Email' style={{ width: '300px', border: 'none' }}/></div>
        <div>
        <input type="password" id='password' name='password' placeholder='Password' style={{ width: '300px', height: 50, borderRadius: 6, border: 'none'}}/></div>
        <button className='loginbtn' type="submit" value="Login" style={{ width: '300px', border: 'none', height:  50, marginTop: 8, background: '#007bff' }}>Login</button>
      </form>
    </Card>
    
  )
}