import React from 'react'
import { Route } from 'react-router-dom'
import { LoginForm } from '../../components/authComponents/loginForm/LoginForm'
import { RegisterForm } from '../../components/authComponents/registerForm/RegisterForm'

export const Authorization = () => {
  return (
    <div className="section__auth">
      <Route path="/auth/login" component={LoginForm}></Route>
      <Route path="/auth/register" component={RegisterForm}></Route>
    </div>
  )
}
