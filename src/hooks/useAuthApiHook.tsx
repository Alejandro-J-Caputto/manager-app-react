
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
type authType = 'login' | 'register' | 'logout'
export const useAuthApiHook = () => {

  const API_URL: string = `https://manager-app-v2.herokuapp.com/api/todoapp/v1/auth`;
  // const API_URL: string = `http://localhost:8000/api/todoApp/v1/auth`;

  const authHTTP = async (body: Login | Register, authType: authType) => {
    try {
      console.log(body)
      const CONFIG = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      }
      console.log(`${API_URL}/login`)
      const request = await fetch(`${API_URL}/${authType}`, CONFIG);
      const response = await request.json();
      console.log(response)
      return response;
    } catch (error) {
      console.warn(error)
    }

  }
  return { authHTTP };
}
