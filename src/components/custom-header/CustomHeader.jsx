
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Button, Layout, Menu } from 'antd';
const { Header } = Layout;
const CustomHeader = ({ collapsed, setCollapsed }) => {

    const menuHeaderItems = [
        {
            key: 'home',
            label: <Link to='/demo1'>خانه</Link>
        },
        {
            key: 'profiles',
            label: <Link to='/demo1'>پروفایل ها</Link>
        },
        {
            key: 'my account',
            label: <Link to='/demo1'>حساب من</Link>
        },
    ]

    return (
        <Header className='flex items-center '>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                }}
            />
            <Menu mode="horizontal" defaultSelectedKeys={[1]} items={menuHeaderItems} className='!border-none' style={{ width: 256 }}></Menu>
            <Button icon={<SearchOutlined />} type="text" shape="circle" className='ms-auto'>
            </Button>
        </Header>
    );
}

export default CustomHeader;