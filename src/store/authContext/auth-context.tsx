import React, { createContext, ReactChild, ReactChildren, useState } from 'react'
import { useAuthApiHook } from '../../hooks/useAuthApiHook';
import { LoginResponse, User, RegisterResponse } from '../../interface/auth/authorizations';

interface RegisterFn {
  onRegister: (name: string, email: string, password: string, passwordConfirm: string) => void;
}

export const AuthContextHook = createContext({
  isLoggedIn: false,
  user: {},
  onLogout: () => { },
  onLogin: (email: string, password: string) => { },
  onRegister: (name: string, email: string, password: string, passwordConfirm: string) => { }
})



export const AuthContextProvider = ({ children }: { children: ReactChildren | ReactChild }) => {
  const { authHTTP } = useAuthApiHook()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const logOutHandler = () => {
    console.log('logged out')
  }

  const logInHandler = async (email: string, password: string) => {
    const responseAuth: LoginResponse = await authHTTP({ email, password }, 'login');
    if (responseAuth.status === 'success') {
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
      localStorage.setItem('reactBearer', `Bearer ${responseAuth.token}`)
    }
  }

  const registerHandler: RegisterFn["onRegister"] = async (name, email, password, passwordConfirm) => {
    const responseAuth: RegisterResponse = await authHTTP({ name, email, password, passwordConfirm }, 'register');
    if (responseAuth.status === 'success') {
      console.log(responseAuth)
      const user: User = {
        role: responseAuth.newUser.role,
        active: responseAuth.newUser.active,
        _id: responseAuth.newUser._id,
        name: responseAuth.newUser.name,
        email: responseAuth.newUser.email,
        img: responseAuth.newUser.img
      }
      setUser(user);
      setIsLoggedIn(true);
      localStorage.setItem('reactBearer', `Bearer ${responseAuth.token}`)
    }
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
