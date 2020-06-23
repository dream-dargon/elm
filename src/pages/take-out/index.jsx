import React from 'react'
<<<<<<< HEAD
=======
import { Heads, Nav, Shop } from './content'
>>>>>>> daeb4118ae46f307b2b4749a125b9a94093cc3ff
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