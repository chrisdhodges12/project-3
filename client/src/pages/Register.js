import React from "react";
import { Button, Form, Input } from "antd";
import {Link} from 'react-router-dom';
import './../resources/authentication.css'


const Register = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="auth-parent">
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr></hr>
        <Form.Item name="username" label="Username">
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item name="password" label="Password">
          <Input />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password">
          <Input />
        </Form.Item>
        <div className='linkButton'>
          <Link to='/login'>Click here to Login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
        
      </Form>
    </div>
  );
};

export default Register;
