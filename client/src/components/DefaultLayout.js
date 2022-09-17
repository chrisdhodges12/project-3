import { Button, Dropdown, Menu} from 'antd';
import React from "react";
import { useNavigate } from 'react-router-dom';
import './../resources/defaultlayout.css'

const DefaultLayout = (props) => {
  const navigate = useNavigate();
  const menu = (
   <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/home">
          Home
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="/profile">
          Profile
        </a>
      </Menu.Item>
      <Menu.Item onClick={()=>{
        // session to be removed from local storage here
        navigate('/login');
      }}>
        <span>Logout</span>
      </Menu.Item>
   </Menu>
  );
  return (
    <div className="layout">
      <div className="header">
        <h1 style={{color:'white'}}>CNB CV</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
        <Button>Logged in Username </Button>
      </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default DefaultLayout;
