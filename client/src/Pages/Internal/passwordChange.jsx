import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import "antd/dist/antd.css";
import "./password.scss";
const PasswordChange = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return (
        <div className='PassChange'>

            <Button type="primary" onClick={showModal}>
                Chnage Password
            </Button>
            <Modal title="Change Password" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className='layout'>
                <div className='display-flex'>
                <input className='input' placeholder='Old Password' type="password" name='oldPassword' />
                </div>
                <div className='display-flex'>
                <input className='input' placeholder='New Password' type="password" name='newPassword' />
                </div>
                <div className='display-flex'>
                <input className='input' placeholder='Confirmation Password' type="password" name='CPassword' />
                </div>
                <button>Change Password</button>
                </div>
            </Modal>
        </div>
    )
}

export default PasswordChange
