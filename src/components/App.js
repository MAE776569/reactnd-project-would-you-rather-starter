import React from 'react';
import { BrowserRouter, Route } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"
import { LoadingBar } from "react-redux-loading-bar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoadingBar />
      <Route exact path="/" render={() => <div>HOME</div>} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
