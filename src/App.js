import React, { Component } from 'react';
// import logo from './logo.svg';

import { Route, Switch } from "react-router-dom";
import { ResultContext } from './component/shared/result-context.js';
import Landing from './component/Landing';
import NavBar from './component/template/NavBar';
import FlightSearch from './component/FlightSearch';
// import NotFound from './component/NotFound';

import Testting from './component/template/Testting.jsx';

import './App.css';

class App extends Component {
  state = {
    resultName: ""
  }

  onUserInput = newVal => {
    this.setState({ resultName: newVal });
  };
  render() {
    return (
      <div className="content">
        <ResultContext.Provider value={{ val: this.state.resultName, onUserInput: this.onUserInput }}>
          <NavBar />
          <Switch>

            {/* <Route path="/not-found" component={NotFound} /> */}
            <Route path="/flight-search" component={FlightSearch} />
            <Route path="/" component={Landing} />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </ResultContext.Provider>



      </div>
    );
  }
}

export default App;
