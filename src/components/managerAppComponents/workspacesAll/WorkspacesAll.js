import React from 'react'
import { Link } from 'react-router-dom'
import { WorkspaceCard } from '../../shared/workspaceCard/WorkspaceCard'

export const WorkspacesAll = () => {
  return (
    <div className="grid__workspace">
      
      <WorkspaceCard id='1234' img='https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284918/iksgsorgjrltr65cs8gq.jpg' title="Arnie" />
      <WorkspaceCard id='1234' img='https://res.cloudinary.com/dlm1qwk4g/image/upload/v1617284917/ogjwagrcqyvf4xcphg64.jpg' title="Arnie" />
      <WorkspaceCard id='1234' img='./src/assets/img/pexels-arnie-chou-1229042.jpg' title="Arnie" />
      <WorkspaceCard id='1234' img='./src/assets/img/pexels-arnie-chou-1229042.jpg' title="Arnie" />
    </div>
  )
}
