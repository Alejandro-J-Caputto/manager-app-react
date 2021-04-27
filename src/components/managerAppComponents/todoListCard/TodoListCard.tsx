import React from 'react'

export const TodoListCard = () => {
  return (
    
    <div className="todoList-card card-grid">
      <div className="todoList-card__head">
        <input type="text" className="todoList-card__head__title"/>
        <i className="fas fa-trash-alt"></i>
      </div>
      <ul className="todoList-card__body">
        <li className="todoList-card__body__item">
          <input type="text" className="todo"/>
          <i className="far fa-check-square checkbox"></i>
          <i className="far fa-square done checkbox"></i>
        </li>
      </ul>
      <div className="todoList-card__add__item">
        <form action="">
          <div className="add-wrap">
            <input type="text" autoFocus={true} className="todoList-card__add-item__input"/>
            <span className="fas fa-pencil-alt"></span>
          </div>
          <button className="btn btn--todoList" type="submit">Add Task</button>
        </form>
      </div>
    </div>
  )
}
