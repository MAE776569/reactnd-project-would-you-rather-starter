import React, { Component } from "react"

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-10 col-md-8 col-lg-6">
            <div className="card">
              <div className="card-header p-0">
                <ul className="nav nav-tabs nav-fill home-nav">
                  <li className="nav-item p-0">
                    <a className="nav-link home-link active"
                      href="#unanswered">
                      Unanswered Questions
                    </a>
                  </li>
                  <li className="nav-item p-0">
                    <a className="nav-link home-link"
                      href="#answered">
                      Answered Questions
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
