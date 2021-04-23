import React from 'react'

export const ProfileFormPassword = ({ classes }:{classes:string}) => {
  return (
    <div className={classes}>
      <form action="" className="profile-form__form">
        <div className="profile-form__form__group">
          <h2>RESET PASSWORD</h2>
          <label htmlFor="password" className="profile-form__form__label">Current Password</label>
          <input type="password" className="profile-form__form__input" placeholder="Password" id="password" />
          <p className="error-form"> The current password is required</p>
        </div>
        <div className="profile-form__form__group">

          <label htmlFor="password" className="profile-form__form__label">New Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Password"
            id="passwordReset"
          />
          <p className="error-form">The new password  is required</p>

        </div>
        <div className="profile-form__form__group">
          <label htmlFor="passwordConfirm" className="profile-form__form__label">Confirm Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Confirm Password"
            id="passwordConfirm" />
          <p className="error-form">The password confirmation doesnt match with the provided password</p>

        </div>
        <div className="profile-form__form__group">
          <button className="btn btn--red">UPDATE PASSWORD</button>
        </div>
      </form>
    </div>
  )
}
