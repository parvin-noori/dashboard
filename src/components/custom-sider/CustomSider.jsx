import {
    AppstoreOutlined,
    LogoutOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
const { Sider } = Layout;
import logotypography from "/assets/imgs/mante-logo-gold-black.png"
import logo from "/assets/imgs/mante-logo-mobile.png"


const CustomSider = ({ collapsed }) => {
    const handleLogOut = (e) => {
        e.preventDefault()
        localStorage.clear()
        window.location.reload();
    }


    const items = [
        {
            key: 'dashboard',
            icon: <AppstoreOutlined />,
            label: 'داشبورد',
            children: [
                {
                    key: 'light sidebar',
                    label: <Link to='/demo1'>سایدبار روشن</Link>
                },
                {
                    key: 'dark sidebar',
                    label: <Link to='/demo1'>سایدبار تیره</Link>
                }
            ]
        },
        {
            key: 'user',
            label:  'کاربر',
            type: 'group',
            children: [
                {
                    key: 'public profile',
                    label: 'پروفایل عمومی',
                    icon: <UserOutlined />,
                    children: [
                        {
                            key: 'profiles',
                            label: 'پروفایل ها',
                            children: [
                                {
                                    key: 'default',
                                    label: <Link>پیش فرض</Link>
                                },
                                {
                                    key: 'creator',
                                    label: <Link>سازنده</Link>
                                }
                            ]
                        },
                        {
                            key: 'projects',
                            label: 'پروژه ها',
                            children: [
                                {
                                    key: '3columns',
                                    label: <Link>سه ستونه</Link>
                                },
                                {
                                    key: '2columns',
                                    label: <Link>دو ستونه</Link>
                                }
                            ]
                        },
                        {
                            key: 'works',
                            label: <Link>کارها</Link>
                        },
                        {
                            key: 'activity',
                            label: <Link>فعالیت ها</Link>
                        }
                    ]
                },
                {
                    key: 'my account',
                    label: 'حساب من',
                    icon: <UserOutlined />,
                    children: [
                        {
                            key: 'account',
                            label: 'حساب',
                            children: [
                                {
                                    key: 'get started',
                                    label: <Link>شروع</Link>
                                },
                                {
                                    key: 'user profile',
                                    label: <Link>پروفایل یوزر</Link>
                                },
                                {
                                    key: 'company profile',
                                    label: <Link>پروفایل کمپانی</Link>
                                },
                                {
                                    key: 'with sidebar',
                                    label: <Link>تنظیمات - با سایدبار</Link>
                                },
                            ]
                        },
                     
                    ]
                }
            ]
        },
        {
            key: 'log out',
            icon: <LogoutOutlined />,
            label: <Link onClick={handleLogOut}>خروج</Link>
        }

    ]

    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className='!border-l !border-gray-100'>
            <img src={collapsed ? logo : logotypography} width={ 100} className='p-5'/>
            <Menu

                mode="inline"
                defaultSelectedKeys={['1']}
                items={items}
                className='!border-none'
            />
        </Sider>
    );
}

export default CustomSider;