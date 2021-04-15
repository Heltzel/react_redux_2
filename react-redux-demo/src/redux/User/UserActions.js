import axios from 'axios'
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from './UserTypes'

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

export const fetchUsersFailure = (err_msg) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: err_msg,
  }
}

// Thunk middleware returns a function
// The function can perform side effects such as fetching data
// And the fuction can DISPATCH actions based on the response
// wich will be handled by the REDUCER
export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest)
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((resp) => {
        const users = resp.data
        dispatch(fetchUsersSuccess(users))
      })
      .catch((err) => {
        const errorMsg = err.message
        dispatch(fetchUsersFailure(errorMsg))
      })
  }
}
