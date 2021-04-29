import React, { useState } from 'react'
import { useForm, Validatable } from '../../../hooks/useForm';
import { useUserProfileApi } from '../../../hooks/useUserProfileApi';


export const ProfileFormPassword = ({ classes }: { classes: string }) => {
  const [error, setError] = useState(false);
  const { updatePassword } = useUserProfileApi();
  const { formValues, handleInputChange, customValidator } = useForm({
    password: '',
    passwordReset: '',
    passwordConfirm: ''

  });

  const { password, passwordConfirm, passwordReset } = formValues;

  const passwordIsValid: Validatable = {
    value: passwordReset,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const passwordResetIsValid: Validatable = {
    value: passwordReset,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const passwordConfirmIsValid: Validatable = {
    value: passwordConfirm,
    valueCompare: passwordReset,
    required: true,
    minLength: 4,
    maxLength: 15,
  }
  const submitProfileHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!customValidator(passwordIsValid) || !customValidator(passwordResetIsValid) || !customValidator(passwordConfirmIsValid)) {
      setError(true)
      return;
    }
    const form = {
      password: password,
      passwordReset: passwordReset,
      passwordConfirm: passwordConfirm
    }

    const response = await updatePassword(form);
    console.log(response)

  }

  return (
    <div className={classes}>
      <form onSubmit={submitProfileHandler} className="profile-form__form">
        <div className="profile-form__form__group">
          <h2>RESET PASSWORD</h2>
          <label htmlFor="password" className="profile-form__form__label">Current Password</label>
          <input name="password" value={password} onChange={handleInputChange} type="password" className="profile-form__form__input" placeholder="Password" id="password" />
          {!customValidator(passwordIsValid) && error && <p className="error-form"> The current password is required</p>}
        </div>
        <div className="profile-form__form__group">

          <label htmlFor="password" className="profile-form__form__label">New Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Password"
            id="passwordReset"
            name="passwordReset" value={passwordReset} onChange={handleInputChange}
          />
          {!customValidator(passwordResetIsValid) && error && <p className="error-form">The new password  is required</p>}

        </div>
        <div className="profile-form__form__group">
          <label htmlFor="passwordConfirm" className="profile-form__form__label">Confirm Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Confirm Password"
            name="passwordConfirm" value={passwordConfirm} onChange={handleInputChange}
            id="passwordConfirm" />
          {!customValidator(passwordConfirmIsValid) && error && <p className="error-form">The password confirmation doesnt match with the provided password</p>}

        </div>
        <div className="profile-form__form__group">
          <button className="btn btn--red" type="submit">UPDATE PASSWORD</button>
        </div>
      </form>
    </div>
  )
}
