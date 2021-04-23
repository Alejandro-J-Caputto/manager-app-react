import React from 'react'

export const DynamicContainer = ({children}) => {
  return (
    <div className="dashboard-outlet">
      {children}
    </div>
  )
}
