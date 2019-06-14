import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
 
 componentDidMount() {
    axios.get("http://localhost:3333/smurfs")
    .then(res => {
        this.setState({smurfs: res.data})
    })
    .catch(err => console.log(err))
 }

 addSmurf = (smurf) => {
     console.log('test')
     axios.post("http://localhost:3333/smurfs", smurf)
     .then(res => {
         this.setState({smurfs: res.data})
     })
     .catch(err => console.log(err))
 }

  render() {
    return (
      <div className="App">
          <nav>
              <NavLink exact to="/" activeClassName="selected">Home</NavLink>
              <NavLink to="/smurf-form" activeClassName="selected">Add a Smurf</NavLink>
          </nav>
          <Route exact path ="/" render={(props) => <Smurfs {...props} smurfs={this.state.smurfs} />} />
          <Route path ="/smurf-form" render ={(props) => <SmurfForm {...props} addSmurf = {this.addSmurf} />} />
      </div>
    );
  }
}

export default App;
