import { useCallback } from "react";

export interface Login {
  email: string,
  password: string
}
export interface Register {
  name: string,
  email: string,
  password: string,
  passwordConfirm: string
}
type authType = 'login' | 'register' | 'logout' | 'checkToken';
export const useAuthApiHook = () => {

  const authHTTP = useCallback(async (body: Login | Register | null, authType: authType = 'login', REQUEST_TYPE = 'POST') => {
    const API_URL: string = `https://manager-app-v2.herokuapp.com/api/todoapp/v1/auth`;
    // const API_URL: string = `http://localhost:8000/api/todoApp/v1/auth`;

    try {
      const CONFIG = {
        method: REQUEST_TYPE,
        body: body === null ? null : JSON.stringify(body),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': authType === 'checkToken' && REQUEST_TYPE === 'GET' ? localStorage.getItem('reactBearer')! : ''
        }
      }
      const request = await fetch(`${API_URL}/${authType}`, CONFIG);
      const response = await request.json();
      return response;
    } catch (error) {
      console.warn(error)
    }
  }, [])
  return { authHTTP };
}
