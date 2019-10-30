import { showLoading, hideLoading } from "react-redux-loading-bar"
import { _getQuestions, _saveQuestionAnswer } from "../utils/_DATA"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION = "SAVE_QUESTION"

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

function saveQuestion(question){
  return {
    type: SAVE_QUESTION,
    question
  }
}

export function handleSaveQuestion(authedUser, question, answer){
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer
    }).then((question) => {
      dispatch(saveQuestion(question))
      dispatch(hideLoading())
    })
  }
}