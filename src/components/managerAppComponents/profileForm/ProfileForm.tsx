import React from 'react'

export const ProfileForm = ({ classes }:{classes:string}) => {
  return (
    <div className={classes}>
      <form action="" className="profile-form__form">
        <div className="profile-form__form__group">
          <h2>PROFILE CONTENT</h2>
          <label htmlFor="name" className="profile-form__form__label">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            className="profile-form__form__input"
            placeholder="MR.Patata"
          />
          <p className="error-form">The name is required</p>
        </div>
        <div className="profile-form__form__group">
          <label htmlFor="email" className="profile-form__form__label">Email Address</label>
          <input
            type="text"
            className="profile-form__form__input"
            placeholder="patata@gmail.com"
            id="email"
            name="email"
          />
          <p className="error-form">The email adress is required</p>
        </div>
        <div className="profile-form__form__group">
          <label htmlFor="password" className="profile-form__form__label">Password</label>
          <input
            type="password"
            className="profile-form__form__input"
            placeholder="Password"
            id="password"
            name="password"
          />
          <p className="error-form">The password  is required</p>

        </div>
        <div className="profile-form__form__group">
          <button className="btn btn--red">UPDATE</button>
        </div>
      </form>

    </div>
  )
}
