import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { getcity } from '@/actions/city'
import { Head } from '@@'
export default connect(({ city }) => {
  return { 
    cityName: city.cityName
  }
},{
  getcity
})(Citys)
function Citys(props) {
  const { cityName, getcity } = props
  useEffect(()  => {
   getcity(props.match.params.id)
  },[])
    return (
      <div className='pages-city'>
      {/* 引入头部组件 */}
      <Head left={1} right={1} con={1} conText = { cityName } />
      </div>
    )
}
