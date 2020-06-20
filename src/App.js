import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import NewPostPage from "./components/pages/NewPostPage";
import PostPage from "./components/pages/PostPage";

function App() {
  return (
    <div className="container">
      <div className="background-element"> </div>{" "}
      <div className="highlight-window">
        <div className="highlight-overlay"> </div>{" "}
      </div>{" "}
      <div className="window">
        <Router>
          <Switch>
            <Route component={NewPostPage} exact path="/posts/new" />
            <Route component={NewPostPage} exact path="/posts/edit" />
            <Route component={PostPage} exact path="/posts/:id" />
            <Route component={HomePage} exact path="/" />
            <Route component={ErrorPage} path="*" />
          </Switch>
        </Router>
      </div>{" "}
    </div>
  );
}

export default App;
