import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { Link } from 'react-router-dom';
const SignUp = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <Form
      name="login"
      initialValues={{ remember: true }}
      style={{ maxWidth: 360 }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          sign up
        </Button>
        <Link to="/login">login!</Link>
      </Form.Item>
    </Form>
  );
};
export default SignUp;