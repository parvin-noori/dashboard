import { Button } from "antd";
import CustomDropDown from "../custom-dropdown/CustomDropDown"; 
import {AppstoreOutlined,} from '@ant-design/icons';

const AppsDropdown = () => {
    const items = [
        {
            label: (
                <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
                    1st menu item
                </a>
            ),
            key: '0',
        },
        {
            type: 'divider',
        },
        {
            label: (
                <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
                    2nd menu item
                </a>
            ),
            key: '2',
        },
        {
            type: 'divider',
        },
        {
            label: '3rd menu item',
            key: '4',
        },
    ];

    return (
        <>
            <CustomDropDown items={items} ><Button icon={<AppstoreOutlined />} type="text" shape="circle"></Button></CustomDropDown>
        </>
    );
}

export default AppsDropdown;