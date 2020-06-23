import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1891443_10mljvmhifc.js',
});

export default function TakeoutShop (props) {
  const { data } = props
  return (
    <div className="shop-list">
      {
        data.map(v => {
          return (
            <dl key={v.name}>
              <dt><img src={`https://elm.cangdu.org/img/${v.image_path}`} alt="" /></dt>
              <dd>
                <p>
                  <span><i>品牌</i><i>{v.name}</i></span>
                  <span>保准票</span>
                </p>
                <p>
                  <span>
                    <IconFont type="icon-xingji" />
                    <IconFont type="icon-xingji" />
                    <IconFont type="icon-xingji" />
                    <IconFont type="icon-xingji" />
                    <IconFont type="icon-xingji" />
                    <i>{v.rating}</i> 月售{v.recent_order_num}单
                  </span>
                  <span><i>蜂鸟专送</i><i>准时达</i></span>
                </p>
                <p>
                  <span>
                    {v.float_minimum_order_amount}起送/配送费约{v.float_delivery_fee}
                  </span>
                  <span>
                    <i>{v.distance}公里</i> / <i>{v.order_lead_time}</i>
                  </span>
                </p>
              </dd>
            </dl>
          )
        })
      }
    </div>
  )
}
