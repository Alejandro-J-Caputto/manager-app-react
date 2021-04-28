import React, { useEffect, useRef, useState } from 'react'
import {useParams} from 'react-router-dom'
import { TodoListCard } from '../../../components/managerAppComponents/todoListCard/TodoListCard';
import { TodoLists, Workspace } from '../../../interface/app/managerapp';
import {useTodoListsApi} from '../../../hooks/useTodoListsApi'
export const WorkspaceView = ({workspaces}:{workspaces:Workspace[]}) => {
  //Borrar una todoList 
  const {getTodoListsById, addNewTodoList} = useTodoListsApi();
  const newListTitle = useRef<HTMLInputElement>(null)
  const [todoLists, setTodoLists] = useState<TodoLists[]>([])
  const {workspaceID}= useParams<{workspaceID:string}>();
  const currentWorkspace:Workspace = [...workspaces].find(workSpc=> workSpc._id === workspaceID)!;
  const workspaceBackgroundStyle = {
    backgroundImage: `url('${currentWorkspace?.img}')`,
    backgroundSize: 'cover',
    bacgroundPosition: 'top'
    }
    
 

  const onAddNewList = async (val: string) => {
    const response = await addNewTodoList(newListTitle.current!.value, workspaceID)
    if(!response?.todos) {
      response!.todos = [];
    }
    setTodoLists((prevTodoLists => {
      return [...prevTodoLists, response!]
    }))
  }
  const handleAddNewList = async (event:React.FormEvent) => {
    event.preventDefault();
    if(newListTitle.current?.value.trim().length! < 2) return
    await onAddNewList(newListTitle.current?.value!);
  }
  useEffect(() => {
    async function getTodoLists() {
      const response = await getTodoListsById(workspaceID);
      setTodoLists(response!)
    }
    getTodoLists();
    
  }, [workspaceID, getTodoListsById])
  return (
    <div className="section-workspace" style={workspaceBackgroundStyle}>
      <div className="todoList-wrapper">
        {todoLists!.map((todoList:TodoLists)=> {
          return <TodoListCard id={todoList._id} titleTodoList={todoList.name} todos={!todoList.todos.length ? []: todoList.todos} project={todoList.project} key={todoList._id} />
        })}
        <form onSubmit={handleAddNewList} className="add__card">
          <input ref={newListTitle} type="text" placeholder="Add a new list"/>
          <button className="add__card__button" type="submit">NEW LIST</button>
        </form>
      </div>
    </div>
  )
}
