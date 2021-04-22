import * as React from "react"

import { Switch, Route, Redirect } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

import "./app.scss"

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} exact />
      <Route path="/404" component={NotFound} exact />
      <Route>
        <Redirect to="/404" />
      </Route>
    </Switch>
  )
}

export default App
