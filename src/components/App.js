import React from 'react';
import { BrowserRouter } from "react-router-dom"
import Login from "./Login"
import Navbar from "./Navbar"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Login />
    </BrowserRouter>
  );
}

export default App;
