import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Menu, Dropdown, Icon} from 'antd';


const Smurf = props => {
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick ={(evt) => { props.deleteSmurf(props.id)}}>Delete</Menu.Item>
            <Menu.Item key="2" onClick = {(evt) => props.updateForm(props.name, props.age, props.height, props.id)}>Edit</Menu.Item>
        </Menu>
    )
  return (
    <div className="Smurf">
        <Link className = "card-link" to={`/smurfs/${props.id}`}>
            <Card title = {props.name} style={{width: 200, margin: `40px auto 5px`, boxShadow:`0 0 10px rgba(0, 0, 0, 0.5)`}}>
                <p>{props.age} smurf years old</p>
                <p><strong>{props.height} tall</strong></p>
            </ Card>
        </Link>
        <Dropdown overlay={menu}>
            <Button>
                Update <Icon type="down" />
            </Button>
        </Dropdown>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

