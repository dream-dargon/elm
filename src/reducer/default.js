import { FETCH_GET_GUESS, FETCH_GET_HOT, FETCH_GET_GROUP } from '@/constants/actionTypes'
const initialState = {
  guessName:'',
  hotCity:[],
  groupCity:[],
  id:0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
  case FETCH_GET_GUESS:
    return { ...state,guessName:payload.name,id:payload.id}
  case FETCH_GET_HOT:
    return { ...state,hotCity:payload}
  case FETCH_GET_GROUP:
    return { ...state,groupCity:{...payload}}
  default:
    return state
  }
}
