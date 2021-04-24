import React from 'react'
import { AppRouter } from './routers/appRouter/AppRouter'
import { AuthContextProvider } from './store/authContext/auth-context'

export const ManagerApp = () => {
  return (
    <AuthContextProvider>
      <AppRouter></AppRouter>
    </AuthContextProvider>
  )
}
