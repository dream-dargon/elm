import { 
  FETCH_GET_CITY, FETCH_GET_SHOP, FETCH_GET_SHOP_CLEAR,
  FETCH_ADD_SHOP, FETCH_CLEAR_SHOP
} from '@/constants/actionTypes'
const initialState = {
  cityName:'',
  cid:0,
  cityData:[],
  searchData:[]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_GET_CITY:
    return { ...state,cityName:payload.name,cid:payload.id}
  case FETCH_GET_SHOP:
    return { ...state,cityData:payload}
  case FETCH_GET_SHOP_CLEAR:
    return { ...state,cityData:payload}
  case FETCH_ADD_SHOP:
    let { searchData } = state
    const isBool =  searchData.every( v => v.geohash!==payload.geohash)
     if(isBool) {
      searchData.push(payload)
     }
    return {...state,searchData:searchData}
  case FETCH_CLEAR_SHOP:
    return {...state,searchData:payload}
  default:
    return state
  }
}
