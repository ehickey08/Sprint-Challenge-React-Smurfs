import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Button, Menu, Dropdown, Icon} from 'antd';


const Smurf = props => {
    const menu = (
        <Menu>
            <Menu.Item key="1" onClick ={() => props.deleteSmurf(props.id)}>Delete</Menu.Item>
            <Menu.Item key="2" onClick = {() => props.updateForm(props.name, props.age, props.height, props.id)}>Edit</Menu.Item>
        </Menu>
    )
  return (
    <div className="Smurf">
        <Link to={`/smurfs/${props.id}`}>
        <Card title = {props.name} style={{width: 200, margin: `40px auto`, boxShadow:`0 0 10px rgba(0, 0, 0, 0.5)`}}>
            <p>{props.age} smurf years old</p>
            <p><strong>{props.height} tall</strong></p>
            <Dropdown overlay={menu}>
                <Button>
                    Update <Icon type="down" />
                </Button>
            </Dropdown>
      </ Card>
      </Link>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

