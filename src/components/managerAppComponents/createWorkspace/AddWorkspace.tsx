import React, { useRef, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';

export const AddWorkspace = ({ history ,addWorkspace }: { history: RouteComponentProps['history'], addWorkspace: (bodyRequest: {title: string, img: string}) => void }) => {

  const titleInput = useRef<HTMLInputElement>(null);
  const cardList = useRef<HTMLUListElement>(null);
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState<string>('iksgsorgjrltr65cs8gq')


  
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(false)
    if(titleInput.current?.value.trim().length! > 2) {
      const body = {
        title: titleInput.current!.value,
        img: theme
      }
      addWorkspace(body)
      history.push('/manager-app/home/overview');
    } else {
      setError(true);
    }
  }

  const onSetTheme = (event: React.MouseEvent) => {
    const currentElement = event.target as HTMLLIElement;
    const themeCard = currentElement.closest('.workspace-card') as HTMLLIElement;
    setTheme(themeCard.getAttribute('data-theme')!);
    setOutline(themeCard.id);
  }

  const setOutline = (cardId:string) => {
    cardList.current?.childNodes.forEach((el) => {
      const liItem = el as HTMLLIElement;
      liItem.classList.remove('selectedCard')
      if(liItem.id === cardId) {
        return liItem.classList.add('selectedCard');
      }
    })
  }

  return (
    <div className="grid__add">
      <div className="grid__heading">
        <h2>CREATE A WORKSPACE</h2>
      </div>
      <div className="add__form">
        <form onSubmit={submitHandler} className="workspace-form">
          <div className="form-group" >
            <input
              ref={titleInput}
              type="text"
              name='title'
              id="title"
              autoFocus={true}
              className="workspace-form__title-input" />
            <label htmlFor="title" className="workspace-form__title-label"></label>
            {error && <p className="error-form"> The name is required </p>}
          </div>
          <div className="form-group">
            <p className="workspace-form__title-label">Select a theme</p>
            <ul ref={cardList} onClick={onSetTheme} className="grid__workspace grid__workspace--add">
              <li id="iksgsorgjrltr65cs8gq" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg" className="workspace-card workspace-card--1"></li>
              <li id="ogjwagrcqyvf4xcphg64" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/ogjwagrcqyvf4xcphg64.jpg" className="workspace-card workspace-card--2"></li>
              <li id="vg4ti2cc9b23yzyvxkom" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/vg4ti2cc9b23yzyvxkom.jpg" className="workspace-card workspace-card--3"></li>
              <li id="epdqoodzp24aecddjcjf" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/epdqoodzp24aecddjcjf.jpg" className="workspace-card workspace-card--4"></li>
              <li id="dj3mofltuo74qnjcfsgj" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/dj3mofltuo74qnjcfsgj.jpg" className="workspace-card workspace-card--5"></li>
              <li id="hdcfionelybyd10nexrw" data-theme="https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/hdcfionelybyd10nexrw.jpg" className="workspace-card workspace-card--6"></li>
            </ul>
          </div>
          <button className="btn btn--red btn--add">CREATE WORKSPACE</button>

        </form>
      </div>
    </div>
  )
}
