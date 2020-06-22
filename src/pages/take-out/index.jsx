import React from 'react'
import { Heads, Nav, Shop } from './content'
import './style.less'

export default function TakeOut (props) {
  return (
    <div className="pages-take-out">
      <Heads props={props} />
      <div className="take-out-content">
        <Nav />
        <Shop />
      </div>
    </div>
  )
}