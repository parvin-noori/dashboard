
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

import {  Button, Layout, Menu } from 'antd';
import SearchModal from '../searchModal/SearchModal';
import NotifDrawer from './NotifDrawer'
import MessageDrawer from './MessageDrawer'
import AppsDropDown from './AppsDropdown'
import ProfileDropDown from './ProfileDropDown'
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
            label: <MessageDrawer />
        },
        {
            key: 'apps',
            label: <AppsDropDown />
        },
        {
            key: 'profile',
            label: <ProfileDropDown/>
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




export default CustomHeader;