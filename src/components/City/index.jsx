import React from 'react'
import './style.less'
export default function City(props) {
  const { name, data, colors, jump } = props
  const click = id => {
    jump(id)
  } 
    return (
        <div className='city'>
        <div className='kong'></div>
          <p className='names'>{name}</p>
          <div className='city-item'>
          {
            data.map( v => {
              return (
              <p className='item' style={{color:colors}} key={v.id} onClick={() =>click(v.id)}>
                {v.name}
              </p>
              )
            })
          }
          </div>
        </div>
    )
}
