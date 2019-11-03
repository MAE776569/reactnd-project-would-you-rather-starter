import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import LoadingBar from "react-redux-loading-bar"
import Home from "./Home"
import QuestionDetail from "./QuestionDetail"
import NewQuestion from "./NewQuestion"
import Leaderboard from "./Leaderboard"
import PageNotFound from "./PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar style={{ backgroundColor: "#138496" }} />
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/questions/:id" component={QuestionDetail} />
        <Route path="/add" component={NewQuestion} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
