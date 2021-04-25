import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Authorization } from '../../pages/authPages/Authorization'
import { AuthContextHook } from '../../store/authContext/auth-context'
import { ManagerAppRouter } from '../managerAppRouter/ManagerAppRouter'

export const AppRouter = () => {
  const AuthContext = useContext(AuthContextHook);
  const { isLoggedIn, onCheckToken } = AuthContext;
 
  useEffect(() => {
    onCheckToken()
    // console.log(memoCheckToken())
   return () => {
   }
  }, [onCheckToken])
  return (
    <BrowserRouter>
      <Switch>
        {!isLoggedIn && <Route path="/auth" component={Authorization}></Route>}
        {isLoggedIn && <Route path="/manager-app" component={ManagerAppRouter}></Route>}
        {isLoggedIn ? <Redirect to="/manager-app/home/overview" /> : <Redirect to="/auth/login" />}
      </Switch>
    </BrowserRouter>
  )
}
