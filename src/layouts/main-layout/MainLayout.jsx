import React, { useState } from 'react';

import { Layout } from 'antd';
const { Content } = Layout;
import { Outlet } from 'react-router-dom';
import CustomSider from '../../components/custom-sider/CustomSider';
import CustomHeader from '../../components/custom-header/CustomHeader';



const App = () => {
    const [collapsed, setCollapsed] = useState(false);



    return (
        <Layout className='h-svh'>
            <CustomSider collapsed={collapsed} />
            <Layout>
                <CustomHeader collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout >
    );
};
export default App;