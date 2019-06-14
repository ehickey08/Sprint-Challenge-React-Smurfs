import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
    mapSmurfs = () => {
        this.props.smurfs.map(smurf => {
            return (
                <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                    deleteSmurf = {this.props.deleteSmurf}
                    updateForm = {this.props.updateForm}
                />
            )
        });
    }

    filterSmurfs = () => {
        this.props.smurfs.filter(smurf => {
            if(smurf.id = this.props.id){
                return (
                    <Smurf
                        name={smurf.name}
                        id={smurf.id}
                        age={smurf.age}
                        height={smurf.height}
                        key={smurf.id}
                        deleteSmurf = {this.props.deleteSmurf}
                        updateForm = {this.props.updateForm}
                    />
                )
            }
        })
    }

  render() {
      const display = this.props.id >-1 ? this.mapSmurfs : this.filterSmurfs;
        console.log(display)
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {display}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
