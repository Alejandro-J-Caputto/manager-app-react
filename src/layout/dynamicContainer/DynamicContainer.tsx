import React, { ReactChild, ReactChildren } from 'react'

export const DynamicContainer = ({children}:{children: ReactChildren | ReactChild}) => {
  return (
    <div className="dashboard-outlet">
      {children}
    </div>
  )
}
