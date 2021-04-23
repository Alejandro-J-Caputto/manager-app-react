import React from 'react'
import { ProfileForm } from '../../../components/managerAppComponents/profileForm/ProfileForm'
import { ProfileFormPassword } from '../../../components/managerAppComponents/profileForm/ProfileFormPassword'
import { ProfilePhoto } from '../../../components/managerAppComponents/profileForm/ProfilePhoto'

export const Profife = () => {
  return (
    <div className="section-profile">
      <div className="profile-menu">
        <div className="profile-content">
          <div className="profile-content-display">
            <ProfilePhoto classes="profile-picture" />
          </div>
          <ProfileForm classes="profile-form" />
          <ProfileFormPassword classes="profile-form" />
        </div>
      </div>
    </div>
  )
}
