import { GET_NAV_LIST, GET_SHOP_LIST } from '@/constants/actionTypes'

const initialState = {//外卖页面的redux初始数据
  navList: [],
  shopList: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_NAV_LIST:
    return { ...state, navList:[...payload] }

  case GET_SHOP_LIST:
    return { ...state, shopList:[...payload] }

  default:
    return state
  }
}
