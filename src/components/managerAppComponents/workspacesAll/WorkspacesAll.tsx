import React from 'react'
import { Workspace } from '../../../interface/app/managerapp'
import { WorkspaceCard } from '../../shared/workspaceCard/WorkspaceCard'

export const WorkspacesAll = ({ workspaces }: { workspaces: Workspace[] }) => {
  return (
    <>
      <div className="grid__workspace">
        {!workspaces.length && <div className="workspace-empty">

          <div className="welcome">
            <h2 className="heading-secondary"> Welcome to Manager-APP PEPE, </h2>
            <p className="paragraph">Manager App is a simple project that I have developed to put in practise different technologies and frameworks like Node, MongoDB, NoSql, Express, Mongoose, JavaScript, TypeScript, Angular & React.
            Please play around, the app is responsive and is connected to my API.
        </p>
            <br />
          </div>
          <div className="steps">
            <h3 className="heading-tertiary steps--1">To start</h3>
            <p className="paragraph steps--1-description">
              Create or click on a workspace if you have already created one. It will redirect you to your new Space.
          </p>
            <br />
            <h3 className="heading-tertiary steps--2">On your new Workspace</h3>
            <p className="paragraph steps--2-description">
              You can add cards. These cards work as an individual to do list. <br />
          You can delete them, update them, drag them and drop them.
          </p>
          </div>
        </div>}
        {workspaces.map(workCard => {
          return <WorkspaceCard key={workCard._id} id={workCard._id} img={workCard.img} title={workCard.title} />
        })}
      </div>
    </>
  )
}
