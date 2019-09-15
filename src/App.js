import React, { Component } from 'react';
// import logo from './logo.svg';
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import { ResultContext } from './component/shared/result-context.js';
import Landing from './component/Landing';
import NavBar from './component/template/NavBar';
import FlightSearch from './component/FlightSearch';
// import NotFound from './component/NotFound';

import Testting from './component/template/Testting.jsx';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      resultName: []
    }
  }

  onUserInput = newVal => {
    console.log(newVal)
    this.setState({ resultName: newVal });
    console.log(this.state.resultName);
  };
  render() {
    return (
      <div className="content">
        <ToastContainer />
        {/* value="hello" */}
        <ResultContext.Provider value={{ val: this.state.resultName, onUserInput: this.onUserInput }} >
          <NavBar />
          <Switch>

            {/* <Route path="/not-found" component={NotFound} /> */}
            <Route path="/flight-search" render={(props) => <FlightSearch user={this.state.resultName} {...props} />} />
            <Route path="/" component={Landing} />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </ResultContext.Provider>



      </div>
    );
  }
}

export default App;
