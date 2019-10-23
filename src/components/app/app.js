import React from "react"
import { Route, Switch } from "react-router-dom"

import "./app.css"
import { HomePage, CardPage } from "../pages"

const App = () => {
  return (
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/card/' component={CardPage} />
    </Switch>
  )
}

export default App
