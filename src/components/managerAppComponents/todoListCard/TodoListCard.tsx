import React, { useRef, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { useTodoListsApi } from '../../../hooks/useTodoListsApi';
import { Todo } from '../../../interface/app/managerapp'
import { TodoItem } from '../todoItem/TodoItem';

interface TodoListCardContent {
 
  onModalControlHandler: () => void,
  onUpdate: ()=> Promise<unknown>,
  id: string,
  project: {
    _id: string,
    title: string
  },
  todos: Todo[],
  titleTodoList: string,
  onSetTodoListID: React.Dispatch<React.SetStateAction<string | undefined>>

}

export const TodoListCard = ({ onUpdate, onModalControlHandler, onSetTodoListID, id, project, todos, titleTodoList }: TodoListCardContent) => {

  const { addNewTodo, dragAndDropTodo } = useTodoListsApi();
  const [todosCard, setTodosCard] = useState(todos)

  const onAddNewTodo = async (val: string, todoListID: string): Promise<void> => {
    const response = await addNewTodo(val, todoListID)
    setTodosCard(prevTodos => {
      return [...prevTodos, response!]
    })
  }
  const { formValues, handleInputChange } = useForm({ title: titleTodoList });
  const { title } = formValues;
  const newTodoText = useRef<HTMLInputElement>(null!);

  const handleAddSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (newTodoText.current.value.trim().length > 2) {
      await onAddNewTodo(newTodoText.current.value!, id);
      await onUpdate();
      newTodoText.current.value = '';
    }
  }


  // DRAG & DROP AREA
  const todoListRef = useRef<HTMLDivElement>(null)
  const dragOverHandler = (event:React.DragEvent) => {
    if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      todoListRef.current?.classList.add('drop-drop');
    }
  }
  const dragLeaveHandler = (event:React.DragEvent) => {
    if(event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
      event.preventDefault();
      todoListRef.current?.classList.remove('drop-drop');
    }
  }
  const dropHandler = async (event:React.DragEvent) => {
    todoListRef.current?.classList.remove('drop-drop');
    const currentTodoID = event.dataTransfer.getData('text/plain');
    await onUpdate();
    await dragAndDropTodo(currentTodoID, id)
  }
  return (

    <div ref={todoListRef} data-id={id} className="todoList-card card-grid" onDragOver={dragOverHandler} onDragLeave={dragLeaveHandler} onDrop={dropHandler}>
      <div className="todoList-card__head">
        <input type="text" onChange={handleInputChange} value={title} name="name" className="todoList-card__head__title" />
        <i onClick={() => { onModalControlHandler(); onSetTodoListID(id) }} className="fas fa-trash-alt"></i>
      </div>
      <ul className="todoList-card__body">
        {todosCard.length !== 0 && todosCard.map((todo: Todo | any) => {
          return <TodoItem  key={todo._id} id={todo._id} done={todo.done} currValue={todo.todo} />
        })}
      </ul>
      <div className="todoList-card__add__item">
        <form onSubmit={handleAddSubmit}>
          <div className="add-wrap">
            <input ref={newTodoText} placeholder="Add Todo" type="text" autoFocus={true} className="todoList-card__add-item__input" />
            <span className="fas fa-pencil-alt"></span>
          </div>
          <button className="btn btn--todoList" type="submit">Add Task</button>
        </form>
      </div>
    </div>
  )
}
