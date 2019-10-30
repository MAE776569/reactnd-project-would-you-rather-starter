import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import QuestionForm from "./QuestionForm"

class QuestionDetail extends Component {
  render() {
    const { authedUser, user, question } = this.props
    const { answered } = this.props.location.state
    console.log(answered)
    if (!authedUser) return <Redirect to="/login" />

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-md-7 col-lg-5 mt-3 mx-auto p-0">
            <div className="card">
              {answered ? (
                ""
              ) : (
                <QuestionForm
                  authedUser={authedUser}
                  user={user}
                  question={question}
                />
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
