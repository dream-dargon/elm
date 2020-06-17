import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import { TakeOut, Search, Order, Mine } from '@/router/assembly'
import './style.less'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1891443_lohk6lv52v.js',
});

export default function App () {
  return (
    <div className="pages-app">
      <div className="app-content">
        <Switch>
          <Route path='/app/take-out' component={TakeOut} />
          <Route path='/app/search' component={Search} />
          <Route path='/app/order' component={Order} />
          <Route path='/app/mine' component={Mine} />
          <Redirect to='/app/take-out' />
        </Switch>
      </div>
      <div className="app-foot">
        <NavLink to='/app/take-out'>
          <dl>
            <dt><IconFont type="icon-changyonglogo40" /></dt>
            <dd>外卖</dd>
          </dl>
        </NavLink>
        <NavLink to='/app/search'>
          <dl>
            <dt><IconFont type="icon-w_sousuo" /></dt>
            <dd>搜索</dd>
          </dl>
        </NavLink>
        <NavLink to='/app/order'>
          <dl>
            <dt><IconFont type="icon-weibiaoti-" /></dt>
            <dd>订单</dd>
          </dl>
        </NavLink>
        <NavLink to='/app/mine'>
          <dl>
            <dt><IconFont type="icon-wode" /></dt>
            <dd>我的</dd>
          </dl>
        </NavLink>
      </div>
    </div>
  )
}
