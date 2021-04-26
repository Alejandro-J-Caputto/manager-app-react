import React from 'react'
import { useNotification } from './hooks/useNotification'
import { AppRouter } from './routers/appRouter/AppRouter'
import { AuthContextProvider } from './store/authContext/auth-context'

export const ManagerApp = () => {
  const {
    notificationContent,
    notificationIsShow,
    showNotificationHandler,
    hideNotificationHandler,
    notificationContentHandler
  } = useNotification();
  return (

    <AuthContextProvider
      onShowNotification={showNotificationHandler}
      onHideNotification={hideNotificationHandler}
      onNotificationContent={notificationContentHandler} >
      <AppRouter
        onShowNotification={showNotificationHandler}
        notificationIsShow={notificationIsShow}
        notificationContent={notificationContent}></AppRouter>
    </AuthContextProvider>

  )
}
