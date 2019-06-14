import React, { Component } from 'react';
import {Form, Input, Button} from 'antd';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    };
  }

  handleInputChange = e => {
    this.setState({ 
        smurf: {
            ...this.state.smurf,
            [e.target.name]: e.target.value 
        }
    });
  }

componentDidMount() {
    const{name, age, height} = this.props.activeSmurf;
    if(this.props.activeSmurf.id>-1)
        this.setState({
            smurf:{
                name, age, height
            }
        })
}

addOrUpdate = (e) => {
    e.preventDefault();
    if(this.props.activeSmurf.id>-1)
        this.props.updateSmurf(this.state.smurf, this.props.activeSmurf.id)
    else
        this.props.addSmurf(this.state.smurf)
    this.setState({
        smurf:{
            name: '',
            age: '',
            height: ''
        }
    })
}

  render() {
     const buttonName = this.props.activeSmurf.id>-1 ? `Update ${this.state.smurf.name}'s Information` : `Add to the village`;
    return (
      <div className="SmurfForm">
        <Form onSubmit={(e) => this.addOrUpdate(e)}>
            <Form.Item label="Name">
                <Input
                    onChange={this.handleInputChange}
                    placeholder="name"
                    value={this.state.smurf.name}
                    name="name"
                />
            </Form.Item>
            <Form.Item label="Age">
                <Input
                    onChange={this.handleInputChange}
                    placeholder="age"
                    value={this.state.smurf.age}
                    name="age"
                />
            </Form.Item>
            <Form.Item label="Height">
                <Input
                    onChange={this.handleInputChange}
                    placeholder="height"
                    value={this.state.smurf.height}
                    name="height"
                />
            </Form.Item>
            <Button type="primary" htmlType ="submit">{buttonName}</Button>
        </Form>
      </div>
    );
  }
}

export default SmurfForm;
