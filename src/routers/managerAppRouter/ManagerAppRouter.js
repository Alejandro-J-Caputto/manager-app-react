import React from 'react'
import { Route } from "react-router-dom";
import { AddWorkspace } from '../../components/managerAppComponents/createWorkspace/AddWorkspace';
import { SearchWorkspace } from '../../components/managerAppComponents/Search/SearchWorkspace';
import { WorkspacesAll } from '../../components/managerAppComponents/workspacesAll/WorkspacesAll';
import { Navbar } from '../../components/shared/navbar/Navbar';
import { Profife } from '../../pages/managerAppPages/profilePage/Profife';
import { Workspace } from '../../pages/managerAppPages/workspace/Workspace';

export const ManagerAppRouter = () => {
  return (
    <>
      <Navbar />
      <div>
        <Route exact path='/v2/manager-app/home' component={WorkspacesAll}></Route>
        <Route exact path="/v2/manager-app/home/search" component={SearchWorkspace}></Route>
        <Route exact path="/v2/manager-app/home/add" component={AddWorkspace}></Route>
        <Route exact path='/v2/manager-app/workspace/:id' component={Workspace}></Route>
        <Route exact path='/v2/manager-app/profile' component={Profife} ></Route>
      </div>
    </>
  )
}
