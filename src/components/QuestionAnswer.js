import React, { Component } from "react"

class QuestionAnswer extends Component {
  render() {
    const { user, question } = this.props

    return (
      <>
        <div className="card-header">
          <h5>Asked by {user.name}</h5>
        </div>
        <div className="row no-gutters">
          <div className="col-md-4 d-flex flex-wrap align-items-center">
            <img src={user.avatarURL}
              className="d-block m-auto question-avatar"
              alt={`${user.name}'s avatar`} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Results:</h5>
              <div className="card mb-3">
                <div className="card-body">
                  <div className="card-title font-weight-600">
                    Would you rather {question.optionOne.text}?
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-info" style={{ width: "30%"}}></div>
                  </div>
                  <p className="text-center font-weight-600 600 mt-3">1 out of 2 votes</p>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="card-title font-weight-600">
                    Would you rather {question.optionTwo.text}?
                  </div>
                  <div class="progress">
                    <div class="progress-bar bg-info" style={{ width: "30%"}}></div>
                  </div>
                  <p className="text-center font-weight-600 mt-3">1 out of 2 votes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default QuestionAnswer
