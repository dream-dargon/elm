import api from '@/services/api'
import { get } from '@/utils/request'
import { FETCH_GET_CITY } from '@/constants/actionTypes'
//选择的城市
export function getcity (payload) {
  return {
    type: FETCH_GET_CITY,
    payload:get('https://elm.cangdu.org/v1/cities/'+payload)
  }
}