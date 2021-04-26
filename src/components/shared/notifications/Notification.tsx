import React from 'react'

export type NotifiyType = 'registration' | 'login' | 'delete' | 'loading' | 'wuops' | 'searching' | 'create' | 'update'

export const NotificationCmp = ({notificationContent}:{notificationContent:{text:string, icon:string}}) => {

  return (    
      <div className="notification">
      <div className="notification__action">
        <i className={notificationContent.icon}></i>
      </div>
      <div className="notifation__body">
        <div className="notification__message">
          <p>{notificationContent.text}</p>
        </div>
      </div>
    </div >
  )
}
