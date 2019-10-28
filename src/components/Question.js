import React from "react"

function Question(props) {
  return (
    <div className="card mb-3">
      <div className="card-header">
        <h5>user asks</h5>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src="sd" className="card-img" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">Would you rather</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
