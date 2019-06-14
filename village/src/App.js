import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink, withRouter} from 'react-router-dom';

import {Menu} from 'antd' 

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import MenuItem from 'antd/lib/menu/MenuItem';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeSmurf : {
        name: '',
        age: '',
        height: '',
        id: -1
      },
      nullSmurf: {
        name: '',
        age: '',
        height: '',
        id: -1
      }
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
     axios.post("http://localhost:3333/smurfs", smurf)
     .then(res => {
         this.setState({smurfs: res.data})
     })
     .catch(err => console.log(err))
     this.props.history.push("/")
 }

deleteSmurf = (id) => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
        this.setState({smurfs: res.data})
    })
    .catch(err => console.log(err))
}

updateForm = (name, age, height, id) => {
    this.setState({
        activeSmurf:{
            name, age, height, id
        }
    })
    this.props.history.push("/smurf-update-form")
}

updateSmurf = (smurf, id) => {
    axios.put(`http://localhost:3333/smurfs/${id}`, smurf)
    .then(res => {
        this.setState({smurfs: res.data})
    })
    .catch(err => console.log(err))
    this.props.history.push("/")
    this.setState({
        activeSmurf:{
            id: ''
        }
    })
}

  render() {
    return (
      <div className="App">
          <div className ="nav">
            <NavLink exact to="/" activeClassName="selected-menu">Home</NavLink>
            <NavLink exact to="/smurf-form" activeClassName="selected-menu">Add a Smurf</NavLink>
          </div>
          <Route exact path ="/" render={(props) => 
            <Smurfs 
                {...props} 
                smurfs={this.state.smurfs} 
                deleteSmurf = {this.deleteSmurf} 
                updateForm = {this.updateForm}
                />
            } />
          <Route path ="/smurf-form" render ={(props) => 
            <SmurfForm 
                {...props} 
                addSmurf = {this.addSmurf} 
                updateSmurf = {this.updateSmurf}
                activeSmurf = {this.state.nullSmurf}
                smurfs = {this.state.smurfs}
                
                />
            } />
            <Route path ="/smurf-update-form" render ={(props) => 
            <SmurfForm 
                {...props} 
                addSmurf = {this.addSmurf} 
                updateSmurf = {this.updateSmurf}
                activeSmurf = {this.state.activeSmurf}
                smurfs = {this.state.smurfs}
                />
            } />
            {this.state.smurfs.map(smurf => {
                return <Route key = {smurf.id} path ={`/smurfs/${smurf.id}`} render={(props) =>
                <Smurfs
                    {...props}
                    smurfs ={[smurf]}
                    deleteSmurf = {this.deleteSmurf}
                    updateForm = {this.updateForm}
                />
                } />
            })}
      </div>
    );
  }
}

export default withRouter(App);
