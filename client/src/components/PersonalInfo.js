import React from 'react'
import { Form, Input } from 'antd'
const {TextArea}=Input
const PersonalInfo = () => {
  return (
    <div className="row">
        <div className="col-md-4">
            <Form.Item name='firstName' label='FirstName' rules={[{required:true}]}>
                <Input></Input>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name='lastname' label='Lastname' rules={[{required:true}]}>
                <Input></Input>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name='email' label='Email' rules={[{required:true}]}>
                <Input></Input>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name='mobileNumber' label='Mobile Number' rules={[{required:true}]}>
                <Input></Input>
            </Form.Item>
        </div>
        <br></br>
       <div className= "col-md-12">
       <Form.Item name='objective' label='Objective' rules={[{required:true}]}>
                <TextArea></TextArea>
            </Form.Item>
       </div>
    </div>
  )
}

export default PersonalInfo