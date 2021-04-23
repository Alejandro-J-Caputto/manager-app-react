import React from 'react'
import { NavLink } from 'react-router-dom'

export const LoginForm = () => {
 
  

  const onSubmitLoginHandler = (event) => {
    console.log('me dispare submit')
    console.log(event)
  }

  return (
    <div className="auth-card">
      <form onSubmit={onSubmitLoginHandler} autoComplete="off" className="auth-card__form">
        <h2 className="heading-secondary u-margin-bottom-small u-margin-top">
          Manager-App
        </h2>
        <div className="auth-card__form__group">
          <input
            name="email"
            className="auth-card__form__input"
            type="email"
            required
            placeholder="Email Address"
            id="email" />
          <label htmlFor="email" className="auth-card__form__label">Email Address</label>
          {/* <p className="auth__error">The email adress is required</p> */}
        </div>
        <div className="auth-card__form__group">
          <input
            name="password"
            className="auth-card__form__input"
            type="password"
            required
            placeholder="Email Address"
            id="password" />
          <label htmlFor="password" className="auth-card__form__label">Password</label>
          {/* <p className="auth__error">The password is required</p> */}
        </div>
        <div className="auth-card__form__group">
          <button className="btn btn--red" type="submit"> Log in </button>
        </div>
        <div className="auth-card__form__group u-margin-bottom-small authLink">
          <p className="paragraph u-center-text">Don't you have an account?
          </p>
          <NavLink activeClassName="spanStyle" to="/auth/register" className="paragraph u-center-text"> Register Now </NavLink> 

        </div>
      </form>
      <div className="auth-card__icon-box log">

      {/* <img src="assets/img/file_type_angular_icon_130754.png" class="auth-card__icon" alt="angular icon"/> */}
      <i className="fab fa-react auth-card__icon"></i>
      </div>
    </div >
  )
}
