import { combineReducers } from 'redux'
import CakeReducer from './cake/CakeReducer'
import IcecreamReducer from './icecream/IcecreamReducer'
import userReducer from './User/UserReducer'

const rootReducer = combineReducers({
  cake: CakeReducer,
  icecream: IcecreamReducer,
  user: userReducer,
})

export default rootReducer
