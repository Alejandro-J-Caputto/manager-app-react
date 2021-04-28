import React, { useEffect, useRef, useState } from 'react'
import {useParams} from 'react-router-dom'
import { TodoListCard } from '../../../components/managerAppComponents/todoListCard/TodoListCard';
import { TodoLists, Workspace } from '../../../interface/app/managerapp';
import {useTodoListsApi} from '../../../hooks/useTodoListsApi'
import { Modal } from '../../../components/shared/modal/Modal';
export const WorkspaceView = ({workspaces}:{workspaces:Workspace[]}) => {

  const {deleteToDoList} = useTodoListsApi();
  const {workspaceID}= useParams<{workspaceID:string}>();
  const {getTodoListsById, addNewTodoList} = useTodoListsApi();
  const newListTitle = useRef<HTMLInputElement>(null)
  const [todoLists, setTodoLists] = useState<TodoLists[]>([])
  const [todoListID, setTodoListID] = useState<string>();
  const currentWorkspace:Workspace = [...workspaces].find(workSpc=> workSpc._id === workspaceID)!;
  const workspaceBackgroundStyle = {
    backgroundImage: `url('${currentWorkspace?.img}')`,
    backgroundSize: 'cover',
    bacgroundPosition: 'top'
    }
  const [modalIsShown, setModalIsShown] = useState(false)

  const modalControlHandler = () => {
    setModalIsShown(!modalIsShown)
  }
  const confirmTodoListDeleteModal = async () => {
    await deleteToDoList(todoListID!);
    setTodoLists((prevTodoLists:TodoLists[])=> {
      return [...prevTodoLists.filter(todoLists => todoLists._id !== todoListID)]
    })
    modalControlHandler();
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
    newListTitle.current!.value= ''
  }
  useEffect(() => {
    async function getTodoLists() {
      const response = await getTodoListsById(workspaceID);
      setTodoLists(response!)
    }
    getTodoLists();
    
  }, [workspaceID, getTodoListsById])
  return (
    <>
   {modalIsShown && <Modal onClose={modalControlHandler} onDeleteTodoList={confirmTodoListDeleteModal}></Modal>}
    <div className="section-workspace" style={workspaceBackgroundStyle}>
      <div className="todoList-wrapper">
        {todoLists!.map((todoList:TodoLists)=> {
          return <TodoListCard onModalControlHandler={modalControlHandler} onSetTodoListID={setTodoListID} id={todoList._id} titleTodoList={todoList.name} todos={!todoList.todos.length ? []: todoList.todos} project={todoList.project} key={todoList._id} />
        })}
        <form onSubmit={handleAddNewList} className="add__card">
          <input ref={newListTitle} type="text" placeholder="Add a new list"/>
          <button className="add__card__button" type="submit">NEW LIST</button>
        </form>
      </div>
    </div>
    </>
  )
}
