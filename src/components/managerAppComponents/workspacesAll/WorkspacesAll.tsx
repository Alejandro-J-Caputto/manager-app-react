import React from 'react'
import { Workspace } from '../../../interface/app/managerapp'
import { WorkspaceCard } from '../../shared/workspaceCard/WorkspaceCard'

export const WorkspacesAll = ({workspaces}:{workspaces: Workspace[]}) => {
  return (
    <div className="grid__workspace">      
      {workspaces.map( workCard => {
        return <WorkspaceCard key={workCard._id} id={workCard._id} img={workCard.img} title={workCard.title}/>
      })}
    </div>
  )
}
