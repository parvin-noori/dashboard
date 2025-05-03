import React, { useState } from 'react';
import { EyeInvisibleOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Space, Card, Alert, message } from 'antd';
import '@ant-design/v5-patch-for-react-19';

import { Link, useNavigate } from 'react-router-dom';
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  // const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()



  function handleSubmit(values) {
    if (values.email === "demo@kt.com" && values.password === "demo123") {
      localStorage.setItem('token', "123")
      // messageApi.open({
      //   type: 'success',
      //   content: 'login success',
      // });
      navigate('/')
    } else {

      // messageApi.open({
      //   type: 'error',
      //   content: 'login faild',
      // });
    }
  }
  return (
    <Card className="w-96 ">

      <Title level={2} className='capitalize text-center'>sign in</Title>
      <Paragraph type="secondary text-center">Welcome back! Log in with your credentials.</Paragraph>

      <Alert
        message="use demo@kt.com username and demo 123 password for demo success."
        type="info"
        showIcon

      />

      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        layout="vertical"

      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please enter a valid email address!' }]}
        >
          <Input placeholder="your email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: 'password is required.' }]}
        >

          <Input.Password
            placeholder="your password"
            visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}

          />

        </Form.Item>
        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link href="">Forgot password?</Link>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit" >
            sign in
          </Button>
          {/* or <Link to="/signUp">Register now!</Link> */}
        </Form.Item>
      </Form>
    </Card>

  );
};
export default Login;