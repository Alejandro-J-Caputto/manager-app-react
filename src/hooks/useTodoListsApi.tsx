
import { useCallback } from 'react'
import { TodoListResponse, NewTodoListResponse, AddTodoResponse } from '../interface/app/managerapp'
import { useManagerApiHook, TodoListHTTP } from './useManagerApiHook'
export const useTodoListsApi = () => {

  const { managerHTTP } = useManagerApiHook()

  const getTodoListsById = useCallback(async (workspaceID: TodoListHTTP["_id"]) => {
    const responseManager: TodoListResponse = await managerHTTP(null, `todoList/${workspaceID}`, 'GET');
    if (responseManager.status === 'success') {
      return responseManager.todoList;
    }
    if (responseManager.status === 'fail') {
      throw new Error('There was a problem with the request');
    }
  }, [managerHTTP])


  const addNewTodoList = async (val: string, workspaceID: string) => {
    const bodyRequest = { name: val, project: workspaceID }
    const responseManager: NewTodoListResponse = await managerHTTP(bodyRequest, 'todoList', 'POST');
    if (responseManager.status === 'success') {
      return responseManager.newTodoList;
    }
  }

  const addNewTodo = async (val: string, todoListID: string) => {
    const bodyRequest = { todo: val, todoList: todoListID }
    const responseManager: AddTodoResponse = await managerHTTP(bodyRequest, 'todo', 'POST');
    if (responseManager.status === 'success') {
      return responseManager.newTodo;
    }
  }

  const updateStatusTodo = async (todoID:string) => {
    const responseManager = await managerHTTP(null, `todo/isDone/${todoID}`, 'GET');
    if(responseManager.status === 'success'){
      return responseManager.todoDone.done;
    }
  }



  return { getTodoListsById, addNewTodoList, addNewTodo, updateStatusTodo }
}
