const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

// State
const initialState = {
  loading: false,
  users: [],
  error: '',
}

// Actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

// Action creators
function fetch_users_request() {
  return { type: FETCH_USERS_REQUEST }
}
function fetch_users_success(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}
function fetch_users_failure(errorMsg) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: errorMsg,
  }
}

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      }
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

// THUNK allows an ACTION CREATOR to return a function
const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetch_users_request())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        const users = resp.data.map((user) => user.id)
        dispatch(fetch_users_success(users))
      })
      .catch((err) => {
        dispatch(fetch_users_failure(err.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(fetchUsers())
