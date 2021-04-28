import React, { Fragment} from 'react'

export const Modal = ({onClose, onDeleteTodoList}:{onClose:()=>void, onDeleteTodoList:()=> void}) => {
  return (
    <Fragment>
      <div onClick={onClose}  className="overlay"></div>
      <div  className="modal">
        <div className="modal-content">
          <div className="modal-close">
            <i>X</i>
          </div>
          <div className="modal__title">
            <h3 className="modal__heading">

              Are you sure about this?
          </h3>
          </div>
          <div className="modal__body">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque exercitationem vero veritatis. Ducimus dolore harum, tempore facere error fugit accusamus.</p>
          </div>
          <div className="modal__button">
            <button onClick={onDeleteTodoList} className="btn modal__button--confirm">CONFIRM</button>
            <button onClick={onClose} className="btn modal__button--cancel">CANCEL</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
