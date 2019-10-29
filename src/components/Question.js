import React from "react"

function Question({ user, question, match }) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5>{user.name} asks:</h5>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4 d-flex flex-wrap align-items-center">
          <img src={user.avatarURL}
            className="d-block m-auto question-avatar"
            alt={`${user.name}'s avatar`}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Would you rather</h5>
            <p className="card-text">
              <small>..{question.optionOne.text.split(" ").slice(0, 2).join(" ")}..</small>
            </p>
            <a href="#dafd" className="btn btn-block btn-outline-info">
              View Poll
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question
