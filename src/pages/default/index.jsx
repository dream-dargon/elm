import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { Head, City } from '@@'
import { getGuess, getHot, getGroup } from '@/actions/default'
import './style.less'

export default connect(({ defaluts }) => {
  return { 
    guessName: defaluts.guessName,
    hotCity: defaluts.hotCity,
    groupCity: defaluts.groupCity, 
    id:defaluts.id
  }
},{
  getGuess,
  getHot,
  getGroup
})(Default)
function Default (props) {
  const { getGuess, getHot, guessName, hotCity, getGroup, groupCity, id } = props
  const keys = Object.keys(groupCity).sort((a,b)=> a.charCodeAt(0)-b.charCodeAt(0))
  useEffect(()=>{
    getGuess('guess')
    getHot('hot')
    getGroup('group')
  },[])
const jump = (id) => {
  props.history.push('/city/'+id)
}
  return (
    <div className="pages-default">
    {/* 引入头部组件 */}
      <Head left={0} right={0} con={0} />
      {/*当前定位 */}
      <div className='default-top'>
        <div className='check'>当前定位城市:</div>
        <div className='check'>定位不准时，请在城市列表中选择</div>
      </div>
      <div className='default-guess' onClick = {() =>jump(id)}>
      <div className='guess-name'>{guessName}</div>
      </div>
      {/*热门城市 */}
      <City jump={jump} name={'热门城市'} data={hotCity} colors={'#3190E8'} />
      {/*全部城市 */}
      {
        keys.map( v => {
          return <City jump={jump} key = {v} name={v} data={groupCity[v]} colors={'#666666'} />
        })
      }
    </div>
  )
}
