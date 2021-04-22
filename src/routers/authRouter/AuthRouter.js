import React from 'react'
import { Route } from "react-router-dom";
import { LoginPage } from '../../pages/authPages/loginPage/LoginPage';
import { RegisterPage } from '../../pages/authPages/registerPage/RegisterPage';

export const AuthRouter = () => {
  return (
    <>
      <div>
          <Route  path="/auth/login" component={LoginPage}/>
          <Route  path="/auth/register" component={RegisterPage}/>
      </div>
    </>
  )
}
