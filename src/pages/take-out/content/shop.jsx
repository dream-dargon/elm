import React, { useEffect } from 'react'
import { createFromIconfontCN } from '@ant-design/icons'
import { connect } from 'react-redux'
import { getShopList } from '@/actions/takeOut'
import ShopList from '@/components/takeout-shop'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1891443_1svh5vpfw5p.js',
});

function Shop (props) {
  const { shopList } = props.takeOut

  useEffect(() => {
    props.getShopList()
  }, [])

  return (
    <div className="content-shop">
      <p><IconFont type="icon-tubiaolunkuo-" />附近商家</p>
      <ShopList data = {shopList} />
    </div>
  )
}

export default connect(state => {
  return { takeOut: state.takeOut }
},{
  getShopList
})(Shop)