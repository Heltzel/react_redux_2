import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './RootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// Thunk middleware allows the action creator (UserActions.js) to return a function instead of an ACTION
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
//  composeWithDevTools(applyMiddleware(logger, thunk)),
export default store
