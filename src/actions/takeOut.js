import { GET_NAV_LIST, GET_SHOP_LIST } from '@/constants/actionTypes'
import api from '@/services/api'
import { get } from '@/utils/request'

export const getNavList = (payload) => ({//定义获取导航redux数据的方法
  type: GET_NAV_LIST,
  payload: get(`/api${api.navList}`)
})

export const getShopList = (payload) => ({//定义获取商家列表数据的方法
  type: GET_SHOP_LIST,
  payload: get(`/api${api.shop}`)
})
