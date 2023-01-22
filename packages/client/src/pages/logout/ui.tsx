import React from 'react';
import { Button, Divider, Form, Modal, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import './model/init';
import { logout } from 'pages/logout/model';
import { useStore } from 'effector-react';
import { signInFx } from 'pages/signin/model';

export const Logout: React.FC = () => {
  const navigate = useNavigate();
  const loading = useStore(signInFx.pending);

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = () => {
    logout();
    navigate(routesPath.home);
  };

  return (
    <Modal title="Выход" open onCancel={handleCancel} footer={null}>
      <Typography>
        <Form
          name="logout"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Typography.Text style={{ display: 'block', textAlign: 'center' }}>
            Вы действительно хотите выйти?
          </Typography.Text>
          <Divider />

          <Form.Item wrapperCol={{ offset: 10, span: 26 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}>
              Выйти
            </Button>
          </Form.Item>
        </Form>
      </Typography>
    </Modal>
  );
};
