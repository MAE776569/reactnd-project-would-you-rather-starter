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
    this.props.getQuestions()
  }

  setQuestions = (showAnsweredQuestions) => {
    if(this.state.showAnsweredQuestions !== showAnsweredQuestions)
      this.setState({ showAnsweredQuestions })
  }

  render() {
    if (!this.props.authedUser)
      return <Redirect to={{
        pathname: "/login",
        state: {
          referrer: "/"
        }
      }} />

    const { answeredQuestions, unansweredQuestions, users } = this.props
    const { showAnsweredQuestions } = this.state
    const questions = showAnsweredQuestions ? answeredQuestions : unansweredQuestions
    questions.sort((a, b) => b.timestamp - a.timestamp)

    return ( questions !== null &&
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <div className="card">
              <div className="card-header p-0">
                <ul className="nav nav-tabs nav-fill home-nav">
                  <li className="nav-item p-0">
                    <button className={
                        showAnsweredQuestions
                          ? "btn-block nav-link home-link"
                          : "btn-block nav-link home-link active"
                      }
                      onClick={() => this.setQuestions(false)}>
                      Unanswered Questions
                    </button>
                  </li>
                  <li className="nav-item p-0">
                    <button className={
                        showAnsweredQuestions
                          ? "btn-block nav-link home-link active"
                          : "btn-block nav-link home-link"
                      }
                      onClick={() => this.setQuestions(true)}>
                      Answered Questions
                    </button>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                {questions.length ?
                  <ul className="list-unstyled">
                    {questions.map(question => (
                      <Question key={question.id}
                        user={users[question.author]}
                        question={question}
                        answered={this.state.showAnsweredQuestions}/>
                    ))}
                  </ul>
                : <p className="text-center">{showAnsweredQuestions
                        ? "No answered questions"
                        : "No unanswered questions"}
                  </p>
                }
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
      unansweredQuestions,
      users: state.users
    }
  }

  return { authedUser }
}

function mapDispatchToProps(dispatch){
  return {
    getQuestions: () => dispatch(handleGetQuestions())
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Home)
