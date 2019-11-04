import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import QuestionForm from "./QuestionForm"
import QuestionAnswer from "./QuestionAnswer"

class QuestionDetail extends Component {
  state = {
    submitted: false
  }

  handleFormSubmit = () => {
    this.setState({ submitted: true })
  }

  render() {
    const { authedUser, location } = this.props
    if (!authedUser)
      return <Redirect to={{
        pathname: "/login",
        state: {
          referrer: location.pathname
        }
      }} />

    if(!this.props.question)
      return <Redirect to="/404" />

    const { user, question, answered } = this.props

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 p-0">
            <div className="card">
              {answered || this.state.submitted ? (
                <QuestionAnswer
                  authedUser={authedUser}
                  user={user}
                  question={question} />
              ) : (
                <QuestionForm
                  authedUser={authedUser}
                  user={user}
                  question={question}
                  handleFormSubmit={this.handleFormSubmit} />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const authedUser = state.authedUser

  if (authedUser) {
    const question = state.questions[props.match.params.id]

    if(question){
      const user = state.users[question.author]
      const answered = Object.keys(state.users[authedUser].answers).includes(question.id)

      return {
        authedUser,
        user,
        question,
        answered
      }
    }
    else
      return {
        authedUser,
        question
      }
  }

  return { authedUser }
}

export default connect(mapStateToProps)(QuestionDetail)
