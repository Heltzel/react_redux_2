import { createStore } from 'redux'
import CakeReducer from './cake/CakeReducer'

// accepts reducer function as param
// createStore can only accept 1 reducer
const store = createStore(CakeReducer)

export default store
