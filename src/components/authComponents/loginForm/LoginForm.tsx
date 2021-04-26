import React, { useEffect, useState, useMemo, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { useForm, Validatable } from '../../../hooks/useForm'
import { AuthContextHook } from '../../../store/authContext/auth-context'

export const LoginForm = () => {

  const AuthContext = useContext(AuthContextHook);
  const {onLogin} = AuthContext;
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [leftInputEmail, setLeftInputEmail] = useState(false)
  const [leftInputPassword, setLeftInputPassword] = useState(false)
  const [validForm, setValidForm] = useState({ isValid: false, leftIntput: false })
  const { formValues, handleInputChange, customValidator, typing, setTyping } = useForm({ email: '', password: '' })
  const { email, password } = formValues;

  const passwordIsValid: Validatable = useMemo(() => {
    return {
      value: password,
      required: true,
      minLength: 4,
      maxLength: 15,
    }
  },[password])

  const emailIsValid: Validatable = useMemo(() => {
    return {
      value: email,
      required: true,
      type: 'email',
      min: 3
    }
  }, [email])


  useEffect(() => {
    if (typing) {
      setValidForm((prev) => {
        return {
          ...prev,
          isValid: false
        }
      })
    }
    const debounce = setTimeout(() => {
      // setTyping(true)
      if (customValidator(emailIsValid) && typing === true) {
        setValidEmail(true)
        setLeftInputEmail(true)
      }
      if (customValidator(passwordIsValid) && typing === true) {
        setValidPassword(true)
        setLeftInputPassword(true)
      }

    }, 500)
    return () => {
      clearTimeout(debounce)
    }
  }, [email, password, emailIsValid, passwordIsValid, customValidator, typing])

  const onBlurHandler = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement
    const inputElement = target.name;
    let valid = false;
    if (inputElement === 'email') {
      valid = customValidator(emailIsValid);
      setValidEmail(valid)
      setTyping(true)
      setLeftInputEmail(true)
    }
    if (inputElement === 'password') {
      valid = customValidator(passwordIsValid);
      setValidPassword(valid)
      setTyping(true)
      setLeftInputPassword(true)
    }
    return valid;
  }

  const onSubmitLoginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validEmail || !validPassword) {
      setValidForm((prev) => {
        return { ...prev, isValid: true }
      })
      return;
    }
    onLogin(email, password);

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
            value={email}
            onBlur={onBlurHandler}
            className={`auth-card__form__input ${(!validEmail && typing && leftInputEmail) || (validForm.isValid && !validEmail) ? 'auth__error--input' : ''}`}
            type="email"
            onChange={handleInputChange}
            placeholder="Email Address"
            id="email" />
          <label htmlFor="email" className="auth-card__form__label">Email Address</label>
          {/* <p className="auth__error">The email adress is required</p> */}
        </div>
        <div className="auth-card__form__group">
          <input
            name="password"
            value={password}
            onChange={handleInputChange}
            onBlur={onBlurHandler}
            className={`auth-card__form__input ${(!validPassword && typing && leftInputPassword) || (validForm.isValid && !validPassword) ? 'auth__error--input' : ''}`}
            type="password"
            placeholder="password"
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
