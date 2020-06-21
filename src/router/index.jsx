import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App, Default, City } from './assembly'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/city/:id" component={City} />
        <Route path="/" component={Default} />
      </Switch>
    </BrowserRouter>
  )
}
