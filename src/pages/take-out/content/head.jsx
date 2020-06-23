import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1891443_joumwq9iie.js',
});

export default function Head (props) {
  const token = localStorage.getItem('token')

  const goSearch = () => {
    props.props.history.push('/app/search')
  }

  const goDefault = () => {
    props.props.history.push('/')
  }

  return (
    <div className="take-out-head">
      <p><IconFont type="icon-sousuo" onClick={goSearch} /></p>
      <p>上海交通大学（长宁区北新泾临空经济发展）</p>
      <p>{ token ? <IconFont type="icon-wode" onClick={goDefault} /> : <i><span>登录</span>|<span>注册</span></i>}</p>
    </div>
  )
}
