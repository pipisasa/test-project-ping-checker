import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from './pages/Home/Home'
import Ping from './pages/Ping/Ping'
import Statistics from './pages/Statistics/Statistics'

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route
            path="/"
            exact
            component={Home}
          />
          <Route
            path="/statistics"
            exact
            component={Statistics}
          />
          <Route
            path="/ping"
            exact
            component={Ping}
          />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default Router
