import { Card, Alert } from 'antd';

import { Typography } from 'antd';
import LoginForm from './LoginForm';
const { Title, Paragraph } = Typography;

const Login = () => {


  return (
    <Card className="w-96 space-y-10">

      <Title level={2} className='capitalize text-center'>ثبت نام</Title>
      <Paragraph type="secondary text-center">خوش آمدید! با اطلاعات کاربری خود وارد شوید.</Paragraph>

      <Alert
        message="برای دسترسی به نسخه دمو، از نام کاربری demo@kt.com و رمز عبور demo123 استفاده کنید."
        type="info"
        showIcon

      />
      <LoginForm />
    </Card>

  );
};
export default Login;