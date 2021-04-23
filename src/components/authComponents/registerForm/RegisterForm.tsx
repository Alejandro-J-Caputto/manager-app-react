import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm, Validatable } from '../../../hooks/useForm';

export const RegisterForm = () => {
  const [validName, setValidName] = useState({isValid: false, leftInput: false})
  const [validEmail, setValidEmail] = useState({isValid: false, leftInput: false});
  const [validPassword, setValidPassword] = useState({isValid: false, leftInput: false});
  const [validConfirmPass, setConfirmPass] = useState({isValid: false, leftInput: false});

  const {formValues, handleInputChange, customValidator, typing, setTyping} = useForm({name: '', email: '', password: '', passwordConfirm: ''});

  const {name, email, password, passwordConfirm} = formValues;

  const nameIsValid:Validatable = {
    value: name,
    required: true,
    minLength: 4,
  }
  const emailIsValid:Validatable = {
    value: email,
    required: true,
    type: 'email',
    minLength: 3,
  }

  const passwordIsValid:Validatable = {
    value: password,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const passwordConfirmIsValid:Validatable = {
    value: passwordConfirm,
    valueCompare: password,
    required: true,
    minLength: 4,
    maxLength: 15,
  }

  const onBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const inputElement = target.name;
    let valid = false;
    if(inputElement === 'name') {
      console.log('hello')
      valid = customValidator(nameIsValid);
      setValidName((prevValue) => {
        return { leftInput: true, isValid: valid}
      })
      setTyping(true)
    }
    if(inputElement === 'email') {
      valid = customValidator(emailIsValid);
      setValidEmail((prevValue) => {
        return { leftInput: true, isValid: valid}
      })
      setTyping(true)
     
    }
    if(inputElement === 'password') { 
      valid = customValidator(passwordIsValid);
      setValidPassword((prevValue) => {
        return{ leftInput: true, isValid: valid}
      })
      setTyping(true)
    }
    if(inputElement === 'passwordConfirm') { 
      valid = customValidator(passwordConfirmIsValid);
      setConfirmPass((prevValue) => {
        return{ leftInput: true, isValid: valid}
      })
      setTyping(true)
    }
    console.log(valid)
    return valid;
  }

  useEffect(() => {
    
    const debounce = setTimeout(()=> {
      // setTyping(true)
      if(customValidator(nameIsValid) && typing === true){
        setValidName((prevValue) => {
          console.log(prevValue)
          return { leftInput: true, isValid: true}
        })
      } 
      if(customValidator(emailIsValid) && typing === true){
        setValidEmail((prevValue) => {
          return { leftInput: true, isValid: true}
        })
      } 
      if(customValidator(passwordIsValid) && typing === true){
        setValidPassword((prevValue) => {
          return{ leftInput: true, isValid: true}
        })
      } 
      if(customValidator(passwordConfirmIsValid) && typing === true){
        setConfirmPass((prevValue) => {
          return{ leftInput: true, isValid: true}
        })
      } 

    },500)
    return () => {
      clearTimeout(debounce)
    }
  }, [email, password, name, passwordConfirm])
  const onSubmitRegisterHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('me dispare submit')
  }


  return (
    <div className="auth-card">
    <form onSubmit={onSubmitRegisterHandler} autoComplete="off" className="auth-card__form auth-card--register">
      <h2 className="heading-secondary u-margin-bottom-small u-margin-top">
        Manager-App
      </h2>
      <div className="auth-card__form__group ">
        <input
        onChange={handleInputChange}
        onBlur={onBlurHandler} 
        type="text" 
        className={ `auth-card__form__input ${!validName.isValid && validName.leftInput && typing ? 'auth__error' : ''}`}
        placeholder="Name" 
        name="name" 
        value={name}
        id="name"/>
        <label 
        htmlFor="name" 
        className="auth-card__form__label"
        >Name</label>
        {/* <p className="auth__error" >The name is required</p> */}
      </div>
      <div className="auth-card__form__group">
        <input
        onChange={handleInputChange}
        onBlur={onBlurHandler} 
        type="email" 
        value={email}
        className={ `auth-card__form__input ${!validEmail.isValid && validEmail.leftInput && typing ? 'auth__error' : ''}`}
        name="email"
        placeholder="Email Address" 
        id="email"/>
        <label htmlFor="email" className="auth-card__form__label">Email Address</label>
        {/* <p className="auth__error" >The email adress is required</p> */}

      </div>
      <div className="auth-card__form__group">
        <input
        onChange={handleInputChange}
        onBlur={onBlurHandler} type="password" 
        className={ `auth-card__form__input ${!validPassword.isValid && validPassword.leftInput && typing ? 'auth__error' : ''}`}
        placeholder="Password"  
        name="password" 
        value={password}
        id="password"/>
        <label htmlFor="password" className="auth-card__form__label">Password</label>
        {/* <p className="auth__error"  >The password is required</p> */}

      </div>
      <div className="auth-card__form__group">
        <input
        onChange={handleInputChange}
        onBlur={onBlurHandler} 
        type="password" 
        className={ `auth-card__form__input ${!validConfirmPass.isValid && validConfirmPass.leftInput && typing ? 'auth__error' : ''}`}
        placeholder="Confirm Password" 
        value={passwordConfirm}
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
