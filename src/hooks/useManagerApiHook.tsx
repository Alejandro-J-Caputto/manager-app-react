import { useCallback } from 'react'

export interface WorspaceBodyHTTP {
    title: string,
    img: string
}

export const useManagerApiHook = () => {

  const managerHTTP = useCallback(async (body: WorspaceBodyHTTP | null, endpoint?: string, request_type = 'GET') => {
    const API_URL: string = `https://manager-app-v2.herokuapp.com/api/todoapp/v1`
    console.log(body)
    try {
      const CONFIG = {
        method: request_type,
        body: body === null ? null : JSON.stringify(body),
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('reactBearer')!
        }
      }
      const request = await fetch(`${API_URL}/${endpoint}`, CONFIG);
      const response = await request.json();
      return response;
    } catch (error) {
      console.warn(error);
    }

    
  }, [])
  return {managerHTTP}
}
