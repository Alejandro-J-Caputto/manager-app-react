import React, { useState } from 'react'
import { useForm } from '../../../hooks/useForm';
import { useTodoListsApi } from '../../../hooks/useTodoListsApi';
interface Todo {
 
  id: string,
  currValue: string,
  done: boolean
}
export const TodoItem = ({ id, currValue, done }: Todo) => {

  const { updateStatusTodo } = useTodoListsApi()
  const [isDone, setIsDone] = useState(done);

  const onIsDone = async () => {
    const response = await updateStatusTodo(id);
    setIsDone(response)

  }
  const dragStartHandler = (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', id);
    event.dataTransfer.effectAllowed = 'move';
  }


  const { formValues: todoContent, handleInputChange: handleTodoChange } = useForm({ todoText: currValue });
  const { todoText } = todoContent;

  return (
    <li draggable={true} onDragStart={dragStartHandler} className="todoList-card__body__item">
      <input  value={todoText} name="todoText" onChange={handleTodoChange} id={id} type="text" className="todo" />
      {isDone && <i onClick={onIsDone} className="far fa-check-square checkbox"></i>}
      {!isDone && <i onClick={onIsDone} className="far fa-square done checkbox"></i>}
    </li>
  )
}
