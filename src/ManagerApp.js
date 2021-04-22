import React from 'react'
import { AppRouter } from './routers/appRouter/AppRouter'
import { AuthRouter } from './routers/authRouter/AuthRouter'

export const ManagerApp = () => {
  return (
    <>
      <div>
        <h1>Welcome again</h1>
      </div>
    <AppRouter></AppRouter>
    </>
  )
}
