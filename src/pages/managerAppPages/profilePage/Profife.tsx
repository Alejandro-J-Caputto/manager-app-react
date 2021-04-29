import React from 'react'
import { ProfileForm } from '../../../components/managerAppComponents/profileForm/ProfileForm'
import { ProfileFormPassword } from '../../../components/managerAppComponents/profileForm/ProfileFormPassword'
import { ProfilePhoto } from '../../../components/managerAppComponents/profileForm/ProfilePhoto'
import { NotificationCmp } from '../../../components/shared/notifications/Notification'
import { useNotification } from '../../../hooks/useNotification'

export const Profife = () => {
  const {showNotificationHandler, hideNotificationHandler, notificationContentHandler, notificationIsShow, notificationContent} = useNotification();

  return (
    <>

    {notificationIsShow && <NotificationCmp notificationContent={notificationContent}/>}
    <div className="section-profile">
      <div className="profile-menu">
        <div className="profile-content">
          <div className="profile-content-display">
            <ProfilePhoto onShow={showNotificationHandler} onHide={hideNotificationHandler} onContent={notificationContentHandler} classes="profile-picture" />
          </div>
          <ProfileForm onShow={showNotificationHandler} onHide={hideNotificationHandler} onContent={notificationContentHandler} classes="profile-form" />
          <ProfileFormPassword onShow={showNotificationHandler} onHide={hideNotificationHandler} onContent={notificationContentHandler} classes="profile-form" />
        </div>
      </div>
    </div>
    </>
  )
}
