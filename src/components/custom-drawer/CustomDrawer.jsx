import { Button, Drawer } from "antd";
import {
    BellOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const CustomDrawer = ({ children, title, icon }) => {
    const [showDrawer, setShowDrawer] = useState(false)

    return (
        <>
            <Button icon={icon} type="text" shape="circle" onClick={() => setShowDrawer(true)}></Button>
            <Drawer title={title} onClose={() => setShowDrawer(false)} open={showDrawer} placement="left" >
                {children}
            </Drawer>
        </>
    );
}

export default CustomDrawer;