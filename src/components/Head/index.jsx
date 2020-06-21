import React from 'react'
import { withRouter } from 'react-router-dom'
import { IconFont } from '@@'
import './style.less'
function Head(props) {
  const {left,con, right, conText }  = props
  const Hleft = key => {
    const obj = {
      0:'ele.me',
      1:<IconFont className='icon' type='icon-left' />
    }
    return obj[key]
  }
  const Hcon = key => {
    const obj = {
      0:' ',
      1:conText
    }
    return obj[key]
  }
  const Hright = key => {
    const obj = {
      0:'登录|注册',
      1:'切换城市'
    }
    return obj[key]
  }
  const Cleft = key => {
    const obj = {
      0:0,
      1:-1
    }
    props.history.go(obj[key])
  }
  const Cright = key => {
    const obj = {
      0:'/login',
      1:'/'
    }
    props.history.push(obj[key])
  }
    return (
      <div className='com-head'>
        <div className='head-left' onClick={() =>Cleft(left)}>{Hleft(left)}</div>
        <div className='head-con'>{Hcon(con)}</div>
        <div className='head-right' onClick={() =>Cright(right)}>{Hright(right)}</div>
      </div>
    )
}
export default withRouter(Head)