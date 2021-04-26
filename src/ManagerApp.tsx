import React, { useState } from 'react'

import { AppRouter } from './routers/appRouter/AppRouter'
import { AuthContextProvider } from './store/authContext/auth-context'

export const ManagerApp = () => {

  const [notificationIsShow, setNotificationIsShow] = useState(false)
  const [notificationContent, setNotificationContent] = useState({text:'', icon:''})
  const showNotificationHandler = () => {
    setNotificationIsShow(true);
  }
  const hideNotificationHandler = () => {
    setNotificationIsShow(false)
  }

  const notificationContentHandler = (notificationOPT: {text:string, icon:string}) => {
    setNotificationContent(notificationOPT)
  }

  return (

    <AuthContextProvider onShowNotification={showNotificationHandler} onHideNotification={hideNotificationHandler} onNotificationContent={notificationContentHandler} >
      <AppRouter onShowNotification={showNotificationHandler} notificationIsShow={notificationIsShow} notificationContent={notificationContent}></AppRouter>
    </AuthContextProvider>

  )
}
