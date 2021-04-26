import React, { useEffect, useMemo, useState } from 'react'
import { NotifiyType } from '../components/shared/notifications/Notification'

export const useNotify = () => {
  const [showNotification, setShowNotification] = useState(false)
  const toggleNotificationHandler = (state: boolean) => {
    setShowNotification(state)
  }
  const notificationResult = {text: '',
    icon: ''}
  
  const [content, setContent] = useState(notificationResult)
  
  useEffect(() => {
    setContent(content)
    
  }, [content])
  

  const setTextContent = async (action: NotifiyType, textInput?: string) => {

    switch (action) {
      case 'registration':
        notificationResult.text = 'Succesfully registered'
        notificationResult.icon = 'far fa-check-circle'
        setContent(notificationResult)

        break;


      case 'login':
        notificationResult.text = 'Succesfully Logged In'
        notificationResult.icon = 'far fa-check-circle'
        setContent(notificationResult)

        break;

      case 'update':
        notificationResult.text = `${textInput ? textInput : 'Succesfully Logged In'}`
        notificationResult.icon = 'far fa-check-circle'
        setContent(notificationResult)

        break;

      case 'loading':
        notificationResult.text = `${textInput ? textInput : 'Activating Super Security!!'}`
        notificationResult.icon = 'fas fa-sync fa-spin'
        setContent(notificationResult)

        break;

      case 'wuops':
        notificationResult.text = `${'there was a problem'}`
        notificationResult.icon = 'fas fa-exclamation-circle'
        setContent(notificationResult)


        break;
      case 'searching':
        console.log(textInput)
        notificationResult.text = `${textInput ? textInput : 'Searching...'}`
        notificationResult.icon = 'fas fa-spinner fa-pulse'
        setContent(notificationResult)

        break;

      case 'create':
        notificationResult.text = 'Workspace sucesfully created!'
        notificationResult.icon = 'far fa-check-circle'
        setContent(notificationResult)

        break;

      default:
       setContent(notificationResult)
    }
  }



  return { toggleNotificationHandler, setTextContent, content, showNotification, notificationResult, setContent }
}
