import { createStore } from 'redux'
import CakeReducer from './cake/CakeReducer'

// accepts reducer function as param
const store = createStore(CakeReducer)

export default store
