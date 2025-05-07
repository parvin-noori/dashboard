import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import { message } from 'antd';
import '@ant-design/v5-patch-for-react-19';

import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const [passwordVisible, setPasswordVisible] = useState(false);
    const navigate = useNavigate()

    function handleSubmit(values) {
        if (values.email === "demo@kt.com" && values.password === "demo123") {
            localStorage.setItem('token', "123")
            messageApi.open({
                type: 'success',
                content: 'ورود موفق',
            });
            setTimeout(() => {

                navigate('/demo1')
            }, 1000);
        } else {

            messageApi.open({
                type: 'error',
                content: 'ایمیل یا رمز عبور اشتباه است!',
            });
        }
    }

    return (
        <>
            {contextHolder}
            <Form
                name="login"
                initialValues={{ remember: true }}
                onFinish={handleSubmit}
                layout="vertical"

            >
                <Form.Item
                    label="ایمیل"
                    name="email"
                    rules={[{ required: true, message: 'لطفا یک ایمیل ادرس معتبر وارد کنید!' }]}
                >
                    <Input placeholder="ایمیل شما" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="رمز عبور"
                    rules={[{ required: true, message: 'رمزعبور ضروری است.' }]}
                >

                    <Input.Password
                        placeholder="رمز عبور"
                        visibilityToggle={{ visible: passwordVisible, onVisibleChange: setPasswordVisible }}

                    />

                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle >
                            <Checkbox>من را به خاطر بسپار</Checkbox>
                        </Form.Item>
                        <Link href="">فراموشی رمز عبور</Link>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" >
                        ورود
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default LoginForm;