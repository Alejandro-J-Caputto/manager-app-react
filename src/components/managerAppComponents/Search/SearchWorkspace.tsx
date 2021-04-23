import React from 'react'

export const SearchWorkspace = () => {
  return (
    <>
      <div className="grid__search">
        <div className="search-group">
          <input
            type="text"
            autoComplete="off"
            placeholder="Search..."
            id="search"
            autoFocus={true}
            className="workspace-form__title-input" />
          <label className="workspace-form__title-label" htmlFor="search">Search...</label>
          <p className="search__fail">ERROR PLACEHOLDER</p>
          <p className="message-empty" style={{ textAlign: 'center' }}>
            YOU DON'T HAVE A CREATED A WORKSPACE YET
          </p>
        </div>
        <div className="grid__workspace">
          <div className="workspace-card">
            <span className="workspace-card__title"> WORKSPACE </span>
            {/* <img className="workspace-card__img" src="" alt=""/> */}
          </div>
        </div>
      </div>
      <div className="grid__workspace">
        <div className="loading">
          <i className="fas fa-sync fa-spin"></i>
        </div>
      </div>
    </>
  )
}
