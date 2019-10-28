import React, { Component } from "react"
import { connect } from "react-redux"
import { handleGetQuestions } from "../actions/questions"
import Question from "./Question"
import { Redirect } from "react-router-dom"

class Home extends Component {
  state = {
    showAnsweredQuestions: false
  }

  componentDidMount() {
    this.props.dispatch(handleGetQuestions())
  }

  render() {
    if (!this.props.authedUser) return <Redirect to="/login" />

    const { answeredQuestions, unansweredQuestions, authedUser } = this.props
    const { showAnsweredQuestions } = this.state
    const questions = showAnsweredQuestions ? answeredQuestions : unansweredQuestions

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <div className="card">
              <div className="card-header p-0">
                <ul className="nav nav-tabs nav-fill home-nav">
                  <li className="nav-item p-0">
                    <a className={
                        showAnsweredQuestions
                          ? "nav-link home-link"
                          : "nav-link home-link active"
                      }
                      href="#unanswered">
                      Unanswered Questions
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className={
                        showAnsweredQuestions
                          ? "nav-link home-link active"
                          : "nav-link home-link"
                      }
                      href="#answered">
                      Answered Questions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <ul className="list-unstyled">
                  {questions.map(question => (
                    <Question key={question.id}
                      user={authedUser} question={question}/>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStatetoProps(state) {
  const authedUser = state.authedUser ? state.users[state.authedUser] : null
  if (authedUser) {
    let userAnswers = Object.keys(authedUser.answers)

    const answeredQuestions = userAnswers.map(id => state.questions[id])
    const unansweredQuestions = Object.keys(state.questions)
      .filter(id => !userAnswers.includes(id))
      .map(id => state.questions[id])

    return {
      authedUser,
      answeredQuestions,
      unansweredQuestions
    }
  }

  return { authedUser }
}

export default connect(mapStatetoProps)(Home)
