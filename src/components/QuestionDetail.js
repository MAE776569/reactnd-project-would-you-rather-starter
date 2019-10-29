import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

class QuestionDetail extends Component {
  state = {
    selectedAnswer: "optionOne"
  }

  handleChange = e => {
    console.log(this.state.selectedAnswer)
    this.setState({
      selectedAnswer: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    const { authedUser, user, question } = this.props
    if (!authedUser) return <Redirect to="/login" />

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-md-7 col-lg-5 mt-3 mx-auto p-0">
            <div className="card">
              <div className="card-header">
                <h5>{user.name} asks:</h5>
              </div>
              <div className="row no-gutters">
                <div className="col-md-4 d-flex flex-wrap align-items-center">
                  <img
                    src={user.avatarURL}
                    className="d-block m-auto question-avatar"
                    alt={`${user.name}'s avatar`}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Would you rather...</h5>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="option"
                          id="first-option"
                          value="optionOne"
                          checked={this.state.selectedAnswer === "optionOne"}
                          onChange={this.handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="first-option"
                        >
                          {question.optionOne.text}
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="option"
                          id="second-option"
                          value="optionTwo"
                          checked={this.state.selectedAnswer === "optionTwo"}
                          onChange={this.handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="second-option"
                        >
                          {question.optionTwo.text}
                        </label>
                      </div>
                      <input
                        type="submit"
                        className="btn btn-info btn-block mt-3"
                        value="submit"
                      />
                    </form>
                  </div>
                </div>
              </div>
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
      question,
      answered: props.answered
    }
  }

  return { authedUser }
}

export default connect(mapStateToProps)(QuestionDetail)
