import React, { createContext, ReactChild, ReactChildren, useState } from 'react'

export const AuthContextHook = createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email:string, password:string) => {},
  onRegister: (name: string, email:string, password:string, passwordConfirm:string) => {}
})



export const AuthContextProvider = ({children}:{children: ReactChildren | ReactChild}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOutHandler = () => {
    console.log('logged out')
  }

  const logInHandler = () => {
    console.log('logged in')
  }

  const registerHandler = () => {
    console.log('registered')
  }


  return (
    <AuthContextHook.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logOutHandler,
      onLogin: logInHandler,
      onRegister: registerHandler
    }}>
      {children}
    </AuthContextHook.Provider>
  )
}
