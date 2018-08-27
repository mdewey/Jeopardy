import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Board from './Components/Board'
import "./Styles/App.css";


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Board}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
