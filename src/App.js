import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Doglist from './Doglist';
import Header from './Header';
import Dictionary from './Dictionary';
import Tips from './Tips';
import Schedule from './Schedule';
import Login from './Login';
import Joinus from './Joinus';
import Doginfo from './Doginfo';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/Doglist" component={Doglist} />
          <Route path="/Dictionary" component={Dictionary} />
          <Route path="/Tips" component={Tips} />
          <Route path="/Schedule" component={Schedule} />
          <Route path="/Login" component={Login} />
          <Route path="/Joinus" component={Joinus} />
          <Route path="/Doginfo" component={Doginfo} />
        </div>
      </Router>
    );
  }
}

export default App;
