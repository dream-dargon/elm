import api from '@/services/api'
import { get } from '@/utils/request'
import { FETCH_GET_GUESS, FETCH_GET_HOT, FETCH_GET_GROUP } from '@/constants/actionTypes'
//定位当前城市
export function getGuess (payload) {
  return {
    type: FETCH_GET_GUESS,
    payload:get(`api${api.guess}?type=`+payload)
  }
}
//获取热门城市
export function getHot (payload) {
  return {
    type: FETCH_GET_HOT,
    payload:get(`api${api.hot}?type=`+payload)
  }
}
//获取全部城市
export function getGroup (payload) {
  return {
    type: FETCH_GET_GROUP,
    payload:get(`api${api.group}?type=`+payload)
  }
}