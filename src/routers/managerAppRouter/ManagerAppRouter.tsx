import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../../components/shared/navbar/Navbar'
import { HomePage } from '../../pages/managerAppPages/homePage/HomePage'
import { Profife } from '../../pages/managerAppPages/profilePage/Profife'
import { Workspace } from '../../pages/managerAppPages/workspace/Workspace'
import { ManagerAppContextProvider } from '../../store/managerContext.tsx/manager-context'

export const ManagerAppRouter = () => {
  
  return (
    <ManagerAppContextProvider>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/manager-app/profile" component={Profife}></Route>
            <Route path="/manager-app/workspace/:id" component={Workspace}></Route>
            <Route path="/manager-app/home" component={HomePage}></Route>   
          </Switch>
    </ManagerAppContextProvider>
  )
}
