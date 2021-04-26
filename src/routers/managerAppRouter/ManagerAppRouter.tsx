import React, { useContext, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../../components/shared/navbar/Navbar'
import { HomePage } from '../../pages/managerAppPages/homePage/HomePage'
import { Profife } from '../../pages/managerAppPages/profilePage/Profife'
import { Workspace } from '../../pages/managerAppPages/workspace/Workspace'
import { ManagerContextHook } from '../../store/managerContext.tsx/manager-context'

export const ManagerAppRouter = () => {
  const ManagerCtx = useContext(ManagerContextHook)
  const {onGetWorkspaces, workspaces, onCreateWorkspaces} = ManagerCtx;
  useEffect(() => {
      onGetWorkspaces()
  }, [onGetWorkspaces])
  return (
    <>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/manager-app/profile" component={Profife}></Route>
            <Route path="/manager-app/workspace/:id" component={Workspace}></Route>
            <Route path="/manager-app/home" component={(props:any)=> <HomePage workspaces={workspaces} addWorkspace={onCreateWorkspaces} {...props}/>}></Route>   
          </Switch>
    </>
  )
}
