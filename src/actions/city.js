import api from '@/services/api'
import { get } from '@/utils/request'
import { 
  FETCH_GET_CITY, FETCH_GET_SHOP, FETCH_GET_SHOP_CLEAR,
  FETCH_ADD_SHOP, FETCH_CLEAR_SHOP

} from '@/constants/actionTypes'
//选择的城市
export function getcity (payload) {
  return {
    type: FETCH_GET_CITY,
    payload:get('https://elm.cangdu.org/v1/cities/'+payload)
  }
}
//获取本地的店铺
export function getshops (type, cid, contents) {
  return {
    type: FETCH_GET_SHOP,
    payload:get(`/api${api.citySearch}?type=`+type+`&city_id=`+cid+`&keyword=`+contents)
  }
}
//清空本地店铺
export function clearshops (payload) {
  return {
    type: FETCH_GET_SHOP_CLEAR,
    payload
  }
}
//添加历史的店铺
export function addsearchshops (payload) {
  return {
    type: FETCH_ADD_SHOP,
    payload
  }
}
//清空所有的历史记录
export function clearsearchshops (payload) {
  return {
    type: FETCH_CLEAR_SHOP,
    payload
  }
}