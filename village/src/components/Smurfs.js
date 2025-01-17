import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                <Smurf
                    smurf = {smurf}
                    key={smurf.id}
                    deleteSmurf = {this.props.deleteSmurf}
                    updateForm = {this.props.updateForm}
                />
            )
        })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
