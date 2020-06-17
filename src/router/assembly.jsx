import Loadable from '@@/Loadable'

const App = Loadable(() => import('@/pages/app'))
const Default = Loadable(() => import('@/pages/default'))
const TakeOut = Loadable(() => import('@/pages/take-out'))
const Search = Loadable(() => import('@/pages/search'))
const Order = Loadable(() => import('@/pages/order'))
const Mine = Loadable(() => import('@/pages/mine'))

export {
  Default,
  App,
  TakeOut,
  Search,
  Order,
  Mine,
}