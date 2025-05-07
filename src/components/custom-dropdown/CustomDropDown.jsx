import { Button, Dropdown } from "antd";

const CustomDropDown = (props) => {

    const { children, items } = props

    return (
        <Dropdown menu={{ items }} trigger={['click']}>
            {children}
        </Dropdown>
    );
}

export default CustomDropDown;