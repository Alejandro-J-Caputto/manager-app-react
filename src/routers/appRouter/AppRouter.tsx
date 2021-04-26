import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { NotificationCmp } from '../../components/shared/notifications/Notification'
import { Authorization } from '../../pages/authPages/Authorization'
import { AuthContextHook } from '../../store/authContext/auth-context'
import { ManagerAppRouter } from '../managerAppRouter/ManagerAppRouter'

export const AppRouter = ({onShowNotification, notificationIsShow, notificationContent}:{onShowNotification:()=>void, notificationIsShow:boolean, notificationContent:{text:string, icon:string}}) => {
  const AuthContext = useContext(AuthContextHook);
  const { isLoggedIn, onCheckToken} = AuthContext;
  
  useEffect(() => {
    onCheckToken()
    return () => {
    }
  }, [onCheckToken])
  return (
    <BrowserRouter>
    {notificationIsShow && <NotificationCmp notificationContent={notificationContent}/>}
      <Switch>
          {!isLoggedIn && <Route path="/auth" component={Authorization}></Route>}
          {isLoggedIn && <Route path="/manager-app" component={ManagerAppRouter}></Route>}
          {isLoggedIn ? <Redirect to="/manager-app/home/overview" /> : <Redirect to="/auth/login" />}
      </Switch>
    </BrowserRouter>
  )
}
