import React, { useEffect } from 'react'
import swiper from 'swiper'
import { connect } from 'react-redux'
import { getNavList } from '@/actions/takeOut'
import 'swiper/css/swiper.min.css'

function Nav (props) {
  useEffect(() => {
    props.getNavList()
  }, [])

  useEffect(() => {
    new swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })        
  }, [])

  
  const { navList } = props.takeOut;
  return (
    <div className="take-out-nav">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            navList.map((v, i) => {
              if((i+1)%8 === 0){
                return (
                  <div className="swiper-slide" key={i}>
                    {
                      navList.map((j, k) => {
                        if(k <= i && k >= (((i+1-8)/8)*8)){
                          return (
                            <dl key={j.id}>
                              <dt>
                                <img src={`https://fuss10.elemecdn.com${j.image_url}`} alt="" />
                              </dt>
                              <dd>{j.title}</dd>
                            </dl>
                          )
                        }
                        return null;
                      })
                    }
                  </div>
                )
              }
              return null;
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  )
}

export default connect(state => {
  return { takeOut: state.takeOut }
},{
  getNavList,
})(Nav)
