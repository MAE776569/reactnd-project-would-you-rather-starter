import { showLoading, hideLoading } from "react-redux-loading-bar"
import { _getQuestions } from "../utils/_DATA"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

function getQuestions(questions){
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function handleGetQuestions(){
  return (dispatch) => {
    dispatch(showLoading())
    return _getQuestions()
      .then((questions) => {
        dispatch(getQuestions(questions))
        dispatch(hideLoading())
      })
  }
}