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
    const { authedUser } = this.props
    if (!authedUser)
      return <Redirect to={{
        pathname: "/login",
        state: {
          referrer: this.props.location.pathname
        }
      }} />

    const { answered } = this.props.location.state
    const { user, question } = this.props

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
    const user = state.users[question.author]

    return {
      authedUser,
      user,
      question
    }
  }

  return { authedUser }
}

export default connect(mapStateToProps)(QuestionDetail)
