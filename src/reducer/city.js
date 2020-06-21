import { FETCH_GET_CITY } from '@/constants/actionTypes'
const initialState = {
  cityName:''
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_GET_CITY:
    return { ...state,cityName:payload.name}
  default:
    return state
  }
}
