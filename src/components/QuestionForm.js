import React, { Component } from "react"
import { handleSaveQuestion } from "../actions/questions"
import { connect } from "react-redux"

class QuestionForm extends Component {
  state = {
    selectedAnswer: "optionOne"
  }

  handleChange = (e) => {
    this.setState({
      selectedAnswer: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { authedUser, question, dispatch, handleFormSubmit } = this.props
    const { selectedAnswer } = this.state
    dispatch(handleSaveQuestion(authedUser, question.id, selectedAnswer))
    handleFormSubmit()
  }

  render() {
    const { user, question } = this.props

    return (
      <>
        <div className="card-header">
          <h5>{user.name} asks:</h5>
        </div>
        <div className="row no-gutters">
          <div className="col-4 d-flex flex-wrap align-items-center">
            <img src={user.avatarURL}
              className="d-block m-auto question-avatar"
              alt={`${user.name}'s avatar`}/>
          </div>
          <div className="col-8">
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
                    onChange={this.handleChange}/>
                  <label className="form-check-label" htmlFor="first-option">
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
                    onChange={this.handleChange}/>
                  <label className="form-check-label" htmlFor="second-option">
                    {question.optionTwo.text}
                  </label>
                </div>
                <input
                  type="submit"
                  className="btn btn-info btn-block mt-3"
                  value="submit"/>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default connect()(QuestionForm)
