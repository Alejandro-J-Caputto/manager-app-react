import React from 'react'

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthRouter } from '../authRouter/AuthRouter';
import { ManagerAppRouter } from '../managerAppRouter/ManagerAppRouter';



export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' component={ManagerAppRouter}></Route>
          <Route path='/auth' component={AuthRouter}></Route>
          <Redirect to='/'/>
        </Switch>
      </div>
    </Router>
  )
}
