import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

function PageNotFound(props){
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-center">
          <h1>Page Not Found</h1>
          <Link to={props.authedUser ? "/" : "/login"}
            className="btn btn-outline-secondary">
            {props.authedUser ? "Return to home" : "Login"}
          </Link>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return { authedUser: state.authedUser }
}

export default connect(mapStateToProps)(PageNotFound)