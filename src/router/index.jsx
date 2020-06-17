import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App, Default } from './assembly'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/" component={Default} />
      </Switch>
    </BrowserRouter>
  )
}
