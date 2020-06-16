import React from 'react'
import Loadable from '@@/Loadable'
const App = Loadable(() => import('@/pages/app'))
export {
  App,
}