import { _getUsers } from "../utils/_DATA"
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const RECEIVE_USERS = "RECEIVE_USERS"

function getUsers(users){
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleGetUsers(){  
  return (dispatch) => {
    dispatch(showLoading())
    return _getUsers()
      .then(users => {
        dispatch(getUsers(users))
        dispatch(hideLoading())
      })
  }
}