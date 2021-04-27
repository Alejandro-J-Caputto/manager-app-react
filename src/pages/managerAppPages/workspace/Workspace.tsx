import React from 'react'
import {useParams} from 'react-router-dom'
import { TodoListCard } from '../../../components/managerAppComponents/todoListCard/TodoListCard';
import { Workspace } from '../../../interface/app/managerapp';
export const WorkspaceView = ({workspaces}:{workspaces:Workspace[]}) => {

  const {workspaceID}= useParams<{workspaceID:string}>();
  const currentWorkspace = [...workspaces].find(workSpc=> workSpc._id === workspaceID);
  console.log(currentWorkspace)
  const workspaceBackgroundStyle = {
    backgroundImage: `url('${currentWorkspace?.img}')`,
    backgroundSize: 'cover',
    bacgroundPosition: 'top'
  }

  return (
    <div className="section-workspace" style={workspaceBackgroundStyle}>
      <div className="todoList-wrapper">
        <TodoListCard />
        <form action="" className="add__card">
          <input type="text" placeholder="Add a new list"/>
          <button className="add__card__button" type="submit">NEW LIST</button>
        </form>
      </div>
    </div>
  )
}
