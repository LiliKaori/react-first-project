//Instalar React Router Dom 5
//npm i react-router-dom@5.0.0

import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Users from "./Pages/Users"

function Routes() {

    return (
        <Router>
            <Switch>
                <Route exact path="/react-first-project" component={Home} />
                <Route exact path="/react-first-project/usuarios" component={Users} />
            </Switch>
        </Router>
    )
}

export default Routes