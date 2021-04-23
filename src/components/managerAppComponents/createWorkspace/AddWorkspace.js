import React from 'react'

export const AddWorkspace = () => {
  return (
    <div className="grid__add">
      <div className="grid__heading">
        <h2>CREATE A WORKSPACE</h2>
      </div>
      <div className="add__form">
        <form className="workspace-form">
          <div className="form-group" >
            <input
              type="text"
              id="title"
              autoFocus={true}
              className="workspace-form__title-input" />
            <label htmlFor="title" className="workspace-form__title-label"></label>
            <p className="error-form"> The name is required </p>
          </div>
          <div className="form-group">
            <p className="workspace-form__title-label">Select a theme</p>
            <ul className="grid__workspace grid__workspace--add">
              <li id="iksgsorgjrltr65cs8gq" className="workspace-card workspace-card--1"></li>
              <li id="ogjwagrcqyvf4xcphg64" className="workspace-card workspace-card--2"></li>
              <li id="vg4ti2cc9b23yzyvxkom" className="workspace-card workspace-card--3"></li>
              <li id="epdqoodzp24aecddjcjf" className="workspace-card workspace-card--4"></li>
              <li id="dj3mofltuo74qnjcfsgj" className="workspace-card workspace-card--5"></li>
              <li id="hdcfionelybyd10nexrw" className="workspace-card workspace-card--6"></li>
            </ul>
          </div>
          <button className="btn btn--red btn--add">CREATE WORKSPACE</button>

        </form>
      </div>
    </div>
  )
}
