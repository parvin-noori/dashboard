
import {
    AppstoreOutlined,
    BellOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    MessageOutlined,
    SearchOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { Avatar, Button, Layout, Menu } from 'antd';
import avatar from "/assets/imgs/avatar.png"
import SearchModal from '../searchModal/SearchModal';
import CustomDrawer from '../custom-drawer/CustomDrawer';
const { Header } = Layout;
const CustomHeader = ({ collapsed, setCollapsed }) => {

    const menuItemsStart = [
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
    const menuItemsEnd = [
        {
            key: 'search',
            label: <SearchModal />
        },
        {
            key: 'notif',
            label: <NotifDrawer />
        },
        {
            key: 'message',
            label: <MessageDrawer/>
        },
        {
            key: 'apps',
            label: <Button icon={<AppstoreOutlined />} type="text" shape="circle"></Button>
        },
        {
            key: 'profile',
            label: <Avatar src={avatar} />
        },
    ]

    return (
        <Header className='flex items-center '>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                className='!size-20'
            />
            <Menu mode="horizontal" defaultSelectedKeys={[1]} items={menuItemsStart} className='!border-none !min-w-md'></Menu>
            <Menu mode="horizontal" defaultSelectedKeys={[1]} items={menuItemsEnd} className='!border-none !ms-auto' ></Menu>



        </Header>
    );
}

const NotifDrawer = () => {
    return (<>
        <CustomDrawer title="اعلان ها" icon={<BellOutlined />}>as</CustomDrawer>
    </>)
}
const MessageDrawer = () => {
    return (<>
        <CustomDrawer title="پیام ها" icon={<MessageOutlined />}>asasdasdfasdf</CustomDrawer>
    </>)
}
export default CustomHeader;