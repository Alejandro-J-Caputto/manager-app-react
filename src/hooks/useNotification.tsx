import { useState } from 'react'

export const useNotification = () => {
  const [notificationIsShow, setNotificationIsShow] = useState(false)
  const [notificationContent, setNotificationContent] = useState({text:'', icon:''})
  const showNotificationHandler = () => {
    setNotificationIsShow(true);
  }
  const hideNotificationHandler = () => {
    setNotificationIsShow(false)
  }

  const notificationContentHandler = (notificationOPT: {text:string, icon:string}) => {
    setNotificationContent(notificationOPT)
  }

  return {notificationIsShow, notificationContent, showNotificationHandler, hideNotificationHandler, notificationContentHandler}
}
