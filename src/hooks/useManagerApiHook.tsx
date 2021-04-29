import { useCallback } from 'react'
import { RegisterForm, UpdatePass } from '../interface/app/managerapp'

export interface WorspaceBodyHTTP {
  title: string,
  img: string
}
export interface TodoListHTTP {
  _id: string
}
export interface NewTodoListHTTPBody {
  name: string,
  project: string
}

export interface NewTodoHTTPBody {
  todo: string,
  todoList:string
}

export const useManagerApiHook = () => {

  const managerHTTP = useCallback(async (body: WorspaceBodyHTTP | NewTodoHTTPBody | UpdatePass | RegisterForm |NewTodoListHTTPBody | TodoListHTTP["_id"] | null, endpoint?: string, request_type = 'GET') => {
    // const API_URL: string = `https://manager-app-v2.herokuapp.com/api/todoapp/v1`
    const API_URL: string = `http://localhost:8000/api/todoApp/v1`
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
  return { managerHTTP }
}
