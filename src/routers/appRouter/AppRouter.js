import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Authorization } from '../../pages/authPages/Authorization'
import { ManagerAppRouter } from '../managerAppRouter/ManagerAppRouter'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/auth" component={Authorization}></Route>
        <Route path="/manager-app" component={ManagerAppRouter}></Route>
      </Switch>
    </BrowserRouter>
  )
}
