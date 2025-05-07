import CustomDropDown from "../custom-dropdown/CustomDropDown";
import { Avatar } from 'antd';
import avatar from "/assets/imgs/avatar.png"

const ProfileDropDown = () => {
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
            <CustomDropDown items={items} ><Avatar src={avatar} /></CustomDropDown>
        </>
    );
}

export default ProfileDropDown;