import React from "react";

import "./App.css";
// import DataFetch from "./dataFetch";
import SearchView from "./Component/SearchView/SearchView";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import DetailView from "./Component/DetailView/DetailView";

import SignUp from "./Component/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SignUp} />

        <Route path="/search" exact component={SearchView} />
        <Route path="/details" exact component={DetailView} />
      </div>
    </Router>
  );
}

export default App;
