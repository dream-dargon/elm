import React,{ useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { message } from 'antd'
import { getcity, getshops, clearshops, addsearchshops, clearsearchshops } from '@/actions/city'
import { Head } from '@@'
import './style.less'
export default connect(({ city }) => {
  return { 
    cityName: city.cityName,
    cid:city.cid,
    cityData:city.cityData,
    searchData: city.searchData
  }
},{
  getcity,
  getshops,
  clearshops,
  addsearchshops,
  clearsearchshops
})(Citys)
function Citys(props) {
  const { 
    cityName, getcity, cid, getshops, 
    cityData, clearshops, searchData,
    addsearchshops, clearsearchshops 
  } = props
  const [htitle, setHtitle] = useState(true)//搜索历史标题是否出现
  const [content,setContent] = useState('')//输入框的值
  const [resules, setResules] = useState(false) //判断是否有数据的值
  useEffect(()  => {
   getcity(props.match.params.id)
   clearshops([])
  },[])
  const change = e => {
    setContent(e.target.value.replace(/\s/g,""))//去除空格
  }
  const submits = async () => {
    if(!content) {
      message.info('请填写店铺名称')
    } else {
     const res = await getshops('search',cid,content) //提交
      setHtitle(false)
      //判断是否有数据
      if(res.payload.length === 0) {
        setResules(true)
      } else {
        setResules(false)
      }
    }
  }
  //点击店铺
  const toApp = opt => {
    addsearchshops(opt)
    props.history.push('/app/take-out?geohash='+opt.geohash)
  }
 const clear = () => {
  clearsearchshops([])
 }
 let data = !htitle ? cityData : searchData
  return (
      <div className='pages-city'>
      {/* 引入头部组件 */}
      <Head left={1} right={1} con={1} conText = { cityName } />
      <div className='city-search'>
        <input 
          placeholder='输入学校、商务楼、地址' 
          value={content} 
          onChange={(e)=>change(e)} />
        <button onClick={submits}>提交</button>
      </div>
      <p className='search' style={{display: htitle ? 'block' : 'none'}}>搜索历史</p>
      <div className='shops'>
        {
          data.map( v => {
            return (
              <div key={v.geohash} onClick={() => toApp(v)} >
                <h4 className='first'>{v.name}</h4>
                <span className='two'>{v.address}</span>
              </div>
            )
          })
        }
      </div>
      <p  
        className='clears' 
        style={{display: htitle&& searchData.length!==0? 'block' : 'none'}}
        onClick={() =>clear()}
        >
        清空所有
      </p>
      <p 
        className='clears' 
        style={{display: resules ? 'block' : 'none'}}
        >
        很抱歉!无搜索结果
      </p>
      </div>
    )
}
