import { showLoading, hideLoading } from "react-redux-loading-bar"
import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER"
export const ADD_QUESTION = "ADD_QUESTION"

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

function saveQuestion(authedUser, id, answer){
  return {
    type: SAVE_QUESTION_ANSWER,
    id,
    authedUser,
    answer
  }
}

export function handleSaveQuestion(authedUser, questionId, answer){
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestionAnswer({
      authedUser,
      qid: questionId,
      answer
    }).then(() => {
      dispatch(saveQuestion(
        authedUser,
        questionId,
        answer
      ))
      dispatch(hideLoading())
    })
  }
}

function addQuestion(question){
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(question){
  return (dispatch) => {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      })
  }
}