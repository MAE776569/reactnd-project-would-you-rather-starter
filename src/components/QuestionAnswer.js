import React, { Component } from "react"
import { connect } from "react-redux"

class QuestionAnswer extends Component {
  render() {
    const {
      user,
      question,
      answer,
      optionOneVotes,
      optionTwoVotes,
      totalVotes
    } = this.props

    const divideBy = totalVotes ? totalVotes : 1

    return (
      <>
        <div className="card-header">
          <h5>Asked by {user.name}</h5>
        </div>
        <div className="row no-gutters">
          <div className="col-4 d-flex flex-wrap align-items-center">
            <img src={user.avatarURL}
              className="d-block m-auto question-avatar"
              alt={`${user.name}'s avatar`} />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">Results:</h5>
              <div
                className={answer ? "card mb-3 selected-option" : "card mb-3"}>
                <div className="card-body">
                  {answer && (
                    <span className="vote-badge badge badge-warning">
                      Your vote
                    </span>
                  )}
                  <div className="card-title font-weight-600">
                    Would you rather {question.optionOne.text}?
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-info"
                      style={{ width: `${(optionOneVotes / divideBy) * 100}%` }}>
                      {optionOneVotes
                        ? `${((optionOneVotes / divideBy) * 100).toFixed(2)}%`
                        : "" }
                    </div>
                  </div>
                  <p className="text-center font-weight-600 mt-3">
                    {`${optionOneVotes} out of ${totalVotes} votes`}
                  </p>
                </div>
              </div>
              <div
                className={!answer ? "card mb-3 selected-option" : "card mb-3"}>
                <div className="card-body">
                  {!answer && (
                    <span className="vote-badge badge badge-warning">
                      Your vote
                    </span>
                  )}
                  <div className="card-title font-weight-600">
                    Would you rather {question.optionTwo.text}?
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-info"
                      style={{ width: `${(optionTwoVotes / divideBy) * 100}%` }}>
                      {optionTwoVotes
                        ? `${((optionTwoVotes / divideBy) * 100).toFixed(2)}%`
                        : "" }
                    </div>
                  </div>
                  <p className="text-center font-weight-600 mt-3">
                    {`${optionTwoVotes} out of ${totalVotes} votes`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(state, props) {
  const answer =
    state.users[props.authedUser].answers[props.question.id] === "optionOne"
  const { user, question } = props
  const optionOneVotes = question.optionOne.votes.length
  const optionTwoVotes = question.optionTwo.votes.length
  const totalVotes = optionOneVotes + optionTwoVotes

  return {
    user,
    question,
    answer,
    optionOneVotes,
    optionTwoVotes,
    totalVotes
  }
}

export default connect(mapStateToProps)(QuestionAnswer)
