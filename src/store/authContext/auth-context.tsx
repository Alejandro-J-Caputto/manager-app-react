import React, { createContext, ReactChild, ReactChildren, useState } from 'react'
import { useAuthApiHook } from '../../hooks/useAuthApiHook';
import { LoginResponse, User } from '../../interface/auth/authorizations';

export const AuthContextHook = createContext({
  isLoggedIn: false,
  user: {},
  onLogout: () => {},
  onLogin: (email:string, password:string) => {},
  onRegister: (name: string, email:string, password:string, passwordConfirm:string) => {}
})



export const AuthContextProvider = ({children}:{children: ReactChildren | ReactChild}) => {
  const {authHTTP} = useAuthApiHook()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const logOutHandler = () => {
    console.log('logged out')
  }

  const logInHandler = async (email:string, password: string) => {
    const responseAuth:LoginResponse = await authHTTP({email, password}, 'login');
    if(responseAuth.status === 'success') {
      const user: User = {
        role: responseAuth.user.role,
        active: responseAuth.user.active,
        _id: responseAuth.user._id,
        name: responseAuth.user.name,
        email: responseAuth.user.email,
        img: responseAuth.user.img  
      }
      setUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('reactBearer',`Bearer ${responseAuth.token}`)
    }
  }

  const registerHandler = () => {
    console.log('registered')
  }


  return (
    <AuthContextHook.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logOutHandler,
      onLogin: logInHandler,
      onRegister: registerHandler,
      user: user
    }}>
      {children}
    </AuthContextHook.Provider>
  )
}
