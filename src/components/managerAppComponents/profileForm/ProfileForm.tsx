import React, { useContext, useState } from 'react'
import { useForm, Validatable } from '../../../hooks/useForm';
import { useUserProfileApi } from '../../../hooks/useUserProfileApi';
import { RegisterForm } from '../../../interface/app/managerapp';
import { AuthContextHook } from '../../../store/authContext/auth-context';

export const ProfileForm = ({ classes }: { classes: string }) => {
  const AuthContext = useContext(AuthContextHook);
  const { user } = AuthContext;
  const [error, setError] = useState(false);
  const { patchUserData } = useUserProfileApi();
  const { formValues, handleInputChange, customValidator } = useForm<RegisterForm>({
    name: user.name!,
    email: user.email!,
    password: ''
  });
  const { name, email, password } = formValues;

  const nameIsValid: Validatable = {
    value: name,
    required: true,
    minLength: 4,
  }
  const emailIsValid: Validatable = {
    value: email,
    required: true,
    type: 'email',
    minLength: 3,
  }


  const passwordIsValid: Validatable = {
    value: password,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const submitProfileHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!customValidator(nameIsValid) || !customValidator(emailIsValid) || !customValidator(passwordIsValid)) {
      setError(true)
      return;
    }
    const form = {
      name,
      email,
      password
    }

    const response = await patchUserData(form);
    console.log(response)

  }


  return (
    <div className={classes}>
      <form onSubmit={submitProfileHandler} className="profile-form__form">
        <div className="profile-form__form__group">
          <h2>PROFILE CONTENT</h2>
          <label htmlFor="name" className="profile-form__form__label">Name</label>
          <input
            name="name"
            id="name"
            onChange={handleInputChange}
            value={name}
            type="text"
            className="profile-form__form__input"
            placeholder="MR.Patata"
          />
          {(!customValidator(nameIsValid) && error) && <p className="error-form">The name is required</p>}
        </div>
        <div className="profile-form__form__group">
          <label htmlFor="email" className="profile-form__form__label">Email Address</label>
          <input
            type="text"
            className="profile-form__form__input"
            placeholder="patata@gmail.com"
            id="email"
            name="email"
            onChange={handleInputChange}
            value={email}
          />
          {(!customValidator(emailIsValid) && error) && <p className="error-form">The email adress is required</p>}
        </div>
        <div className="profile-form__form__group">
          <label htmlFor="password" className="profile-form__form__label">Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Password"
            id="password"
            name="password"
            onChange={handleInputChange}
            value={password}
          />
          {(!customValidator(passwordIsValid) && error) && <p className="error-form">The password  is required</p>}

        </div>
        <div className="profile-form__form__group">
          <button className="btn btn--red" type="submit">UPDATE</button>
        </div>
      </form>

    </div>
  )
}
