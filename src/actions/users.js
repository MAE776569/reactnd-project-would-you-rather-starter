import { _getUsers } from "../utils/_DATA"

export const RECEIVE_USERS = "RECEIVE_USERS"

function getUsers(users){
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function handleGetUsers(){
  return (dispatch) => {
    return _getUsers()
      .then(users => dispatch(getUsers(users)))
  }
}