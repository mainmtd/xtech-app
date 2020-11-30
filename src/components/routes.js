import React from 'react'

import Login from '../pages/login'
import Home from '../pages/home'
import NotFound from './NotFound'
import PrivateRoute from './PrivateRoute'

import {history} from '../history'

const { Router, Switch, Route } = require("react-router")

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route component={Login} exact path="/login"/>
            <PrivateRoute component={Home} exact path="/"/>
            <PrivateRoute component={NotFound}/>
        </Switch>
    </Router>
)

export default Routes;