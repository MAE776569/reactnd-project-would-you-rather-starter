import { RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from "../actions/questions"

export default function questions(state={}, action){
  switch(action.type){
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case SAVE_QUESTION_ANSWER:
      const { authedUser, id, answer } = action
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}