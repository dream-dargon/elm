import Loadable from '@@/Loadable'

const App = Loadable(() => import('@/pages/app'))
const Default = Loadable(() => import('@/pages/default'))
const TakeOut = Loadable(() => import('@/pages/take-out'))
const Search = Loadable(() => import('@/pages/search'))
const Order = Loadable(() => import('@/pages/order'))
const Mine = Loadable(() => import('@/pages/mine'))
const City = Loadable(() => import('@/pages/city'))
export {
  Default,
  App,
  TakeOut,
  Search,
  Order,
  Mine,
  City,
}