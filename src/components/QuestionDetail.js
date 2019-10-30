import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import QuestionForm from "./QuestionForm"
import QuestionAnswer from "./QuestionAnswer"

class QuestionDetail extends Component {
  render() {
    const { authedUser } = this.props
    if (!authedUser) return <Redirect to="/login" />

    const { answered } = this.props.location.state
    const { user, question } = this.props

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6 mt-3 mx-auto p-0">
            <div className="card">
              {answered ? (
                <QuestionAnswer
                  user={user}
                  question={question} />
              ) : (
                <QuestionForm
                  authedUser={authedUser}
                  user={user}
                  question={question}/>
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
