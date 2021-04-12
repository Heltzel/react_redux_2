const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

// actions
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

// action creater
function buyCake() {
  return {
    type: BUY_CAKE,
    info: 'first redux action',
  }
}
function buyIcecreame() {
  return {
    type: BUY_ICECREAM,
  }
}

// (previousState, action) =>newState
const intialCakeState = {
  numOfCakes: 10,
}

const initialIcecreamState = {
  numOfIcecreames: 20,
}

const cakeReducer = (state = intialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      }
    default:
      return state
  }
}

const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcecreames: state.numOfIcecreames - 1,
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger))

const unsubscribe = store.subscribe(() => {})

// dispatches
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())

unsubscribe()
