import React from 'react'
import { NavLink } from 'react-router-dom'

export const RegisterForm = () => {
  return (
    <div className="auth-card">
    <form  autoComplete="off" className="auth-card__form auth-card--register">
      <h2 className="heading-secondary u-margin-bottom-small u-margin-top">
        Manager-App
      </h2>
      <div className="auth-card__form__group ">
        <input 
        type="text" 
        className="auth-card__form__input" 
        placeholder="Name" 
        name="name" 
        id="name"/>
        <label 
        htmlFor="name" 
        className="auth-card__form__label"
        >Name</label>
        {/* <p className="auth__error" >The name is required</p> */}
      </div>
      <div className="auth-card__form__group">
        <input 
        type="email" 
        className="auth-card__form__input" 
        name="email"
        placeholder="Email Address" 
        id="email"/>
        <label htmlFor="email" className="auth-card__form__label">Email Address</label>
        {/* <p className="auth__error" >The email adress is required</p> */}

      </div>
      <div className="auth-card__form__group">
        <input type="password" 
        className="auth-card__form__input" 
        placeholder="Password"  
        name="password" 
        id="password"/>
        <label htmlFor="password" className="auth-card__form__label">Password</label>
        {/* <p className="auth__error"  >The password is required</p> */}

      </div>
      <div className="auth-card__form__group">
        <input 
        type="password" 
        className="auth-card__form__input" 
        placeholder="Confirm Password" 
        name="passwordConfirm"
        id="passwordConfirm"/>
        <label htmlFor="passwordConfirm" className="auth-card__form__label">Confirm Password</label>
        {/* <p className="auth__error"  >The password confirmation is required</p> */}
       {/* <p className="auth__error">ERROR API</p> */}
      </div>
      <div className="auth-card__form__group">
        <button className="btn btn--red" type="submit"> Sign In </button>
      </div>
      <div className="auth-card__form__group u-margin-bottom-small authLink">
        <p className="paragraph u-center-text">Already registered?
        </p>
         <NavLink activeClassName="spanStyle" to="/auth/login" className="paragraph u-center-text "> Log in </NavLink> 
      </div>
    </form>
    <div className="auth-card__icon-box">
    <i className="fab fa-react auth-card__icon"></i>
      
    </div>
  </div>
  )
}
