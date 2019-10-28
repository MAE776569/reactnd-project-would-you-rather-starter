import { combineReducers } from "redux"
import { loadingBarReducer } from "react-redux-loading-bar"
import users from "./users"
import authedUser from "./authedUser"
import questions from "./questions"

export default combineReducers({
  users,
  authedUser,
  questions,
  loadingBar: loadingBarReducer,
})