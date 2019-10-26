import { AUTHENTICATE_USER, LOGOUT_USER } from "../actions/authedUser"

export default function authedUser(state=null, action){
  switch(action.type){
    case AUTHENTICATE_USER:
      return action.user
    case LOGOUT_USER:
      return null
    default:
      return state
  }
}