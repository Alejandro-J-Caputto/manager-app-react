import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { AddWorkspace } from '../../../components/managerAppComponents/createWorkspace/AddWorkspace'
import { SearchWorkspace } from '../../../components/managerAppComponents/Search/SearchWorkspace'
import { WorkspacesAll } from '../../../components/managerAppComponents/workspacesAll/WorkspacesAll'
import { Sidebar } from '../../../components/shared/sidebar/Sidebar'
import { Workspace } from '../../../interface/app/managerapp'
import { DynamicContainer } from '../../../layout/dynamicContainer/DynamicContainer'


// export const HomePage = ()=> {
export const HomePage = ({workspaces, addWorkspace}:{workspaces:Workspace[], addWorkspace:()=> void}) => {

  return (
    <>
    <div className="section-home">
      <div className="main-dashboard">
        <div className="main-content-dashboard">
        <Sidebar></Sidebar>
        <DynamicContainer>
          <Switch>
            <Route exact path='/manager-app/home/overview' component={(props:any)=> <WorkspacesAll workspaces={workspaces} {...props}/>}></Route>
            <Route exact path="/manager-app/home/search" component={(props:any) => <SearchWorkspace workspaces={workspaces} {...props}/>}></Route>
            <Route exact path="/manager-app/home/add" component={AddWorkspace}></Route>
          </Switch>
        </DynamicContainer>
        </div>
      </div>
    </div>
    </>
  )
}
