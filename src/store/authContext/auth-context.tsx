import React, { createContext, ReactChild, ReactChildren, useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useAuthApiHook } from '../../hooks/useAuthApiHook';
import { LoginResponse, User, RegisterResponse, CheckTokenResponse } from '../../interface/auth/authorizations';

interface RegisterFn {
  onRegister: (name: string, email: string, password: string, passwordConfirm: string) => void;
}
const NOTIFICATION_OPTS = {
  login: {
    text: 'Succesfully Logged In',
    icon: 'far fa-check-circle'
  },
  registration: {
    text: 'Succesfully registered',
    icon: 'far fa-check-circle'
  },
  loading: {
    text: 'Activating Super Security!!',
    icon: 'fas fa-sync fa-spin'
  },
  error: {
    text: 'there was a problem',
    icon: 'fas fa-exclamation-circle'
  }
}

export const AuthContextHook = createContext<{
  isLoggedIn: boolean;
  user: User;
  onLogout: () => void;
  onLogin: (email: string, password: string) => void;
  onRegister: (name: string, email: string, password: string, passwordConfirm: string) => void;
  onCheckToken: () => void;
}>({
  isLoggedIn: false,
  user: {},
  onLogout: () => { },
  onLogin: (email: string, password: string) => { },
  onRegister: (name: string, email: string, password: string, passwordConfirm: string) => { },
  onCheckToken: () => { },
})




export const AuthContextProvider = ({ children, onShowNotification, onHideNotification, onNotificationContent }: {children: ReactChildren | ReactChild, onShowNotification: () => void, onHideNotification: () => void, onNotificationContent: (notificationOPT: { text: string, icon: string }) => void }) => {
  const { authHTTP } = useAuthApiHook()
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({})
  const history = useHistory();
  const logInHandler = async (email: string, password: string) => {
    onShowNotification();
    onNotificationContent(NOTIFICATION_OPTS.loading)
    const responseAuth: LoginResponse = await authHTTP({ email, password }, 'login');

    try {
      if (responseAuth.status === 'success') {
        onNotificationContent(NOTIFICATION_OPTS.login)

        const user: User = {
          role: responseAuth.user.role,
          active: responseAuth.user.active,
          _id: responseAuth.user._id,
          name: responseAuth.user.name,
          email: responseAuth.user.email,
          img: responseAuth.user.img
        }
        setUser(user);
        setTimeout(() => {
          onHideNotification();
          setIsLoggedIn(true);
        }, 2500);

        localStorage.setItem('reactBearer', `Bearer ${responseAuth.token}`)

      }

      if (responseAuth.status === 'fail') {
        onNotificationContent(NOTIFICATION_OPTS.error);
        setTimeout(() => {
          onHideNotification();
        }, 2500);
      }

    } catch (error) {
      console.log(error)

    }
  }

  const registerHandler: RegisterFn["onRegister"] = async (name, email, password, passwordConfirm) => {
    onShowNotification();
    onNotificationContent(NOTIFICATION_OPTS.loading);
    const responseAuth: RegisterResponse = await authHTTP({ name, email, password, passwordConfirm }, 'register');
    if (responseAuth.status === 'success') {
      onNotificationContent(NOTIFICATION_OPTS.registration);
      const user: User = {
        role: responseAuth.newUser.role,
        active: responseAuth.newUser.active,
        _id: responseAuth.newUser._id,
        name: responseAuth.newUser.name,
        email: responseAuth.newUser.email,
        img: responseAuth.newUser.img
      }
      setUser(user);
      setTimeout(() => {
        onHideNotification();
        setIsLoggedIn(true);
      }, 2500);
      localStorage.setItem('reactBearer', `Bearer ${responseAuth.token}`)
    }
    if( responseAuth.status === 'fail') {
      onNotificationContent(NOTIFICATION_OPTS.error);
      setTimeout(() => {
        onHideNotification();
      }, 2500);
    }
  }

  const logOutHandler = async () => {
    try {

      const responseAuth = await authHTTP(null, 'logout', 'GET');
      if (responseAuth.status === 'success') {
        localStorage.setItem('reactBearer', 'logout');
        localStorage.removeItem('lastPath');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.warn(error)
    }
  }

  const checkTokenHandler = useCallback(async () => {
    const responseAuth: CheckTokenResponse = await authHTTP(null, 'checkToken', 'GET');
    if (responseAuth.status === 'success') {
      const { _id, email, name, active, role, img } = responseAuth.user;
      setUser({
        role,
        active,
        _id,
        name,
        email,
        img,
      });
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      localStorage.setItem('reactBearer', 'logout');
      history.push('/auth');
      setUser({});
    }
  }, [authHTTP])

  return (
    <AuthContextHook.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logOutHandler,
      onLogin: logInHandler,
      onRegister: registerHandler,
      user: user,
      onCheckToken: checkTokenHandler,
    }}>
      {children}
    </AuthContextHook.Provider>
  )
}
