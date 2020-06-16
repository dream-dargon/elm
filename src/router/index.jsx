import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { App } from './assemly'

export default function Router () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  )
}
