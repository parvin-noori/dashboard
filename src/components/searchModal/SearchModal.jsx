import { Button, Modal } from "antd";

import {
    SearchOutlined,
} from '@ant-design/icons';
import { useState } from "react";

const SearchModal = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <Button icon={<SearchOutlined />} type="text" shape="circle" onClick={() => setShowModal(true)}></Button>
            <Modal
                title="Vertically centered modal dialog"
                centered
                open={showModal}
                onCancel={() => setShowModal(false)}
            >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
            </Modal>
        </>
    );
}

export default SearchModal;