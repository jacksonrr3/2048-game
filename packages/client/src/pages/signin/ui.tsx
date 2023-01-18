import React from 'react';
import { Button, Divider, Form, Input, Modal, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { routesPath } from 'processes/routes';
import { SignInRequest } from 'shared/api/swagger';
import './model/init';
import { useStore } from 'effector-react';
import { signin, signinFx } from './model';

export const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const loading = useStore(signinFx.pending);

  const handleCancel = () => {
    navigate(routesPath.home);
  };

  const onFinish = (data: SignInRequest) => {
    signin(data);
    navigate(routesPath.home);
  };

  return (
    <Modal title="Вход" open onCancel={handleCancel} footer={null}>
      <Typography>
        <Form
          name="signin"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on">
          <Form.Item
            label="Логин"
            name="login"
            rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}>
            <Input.Password />
          </Form.Item>

          <Divider />

          <Form.Item wrapperCol={{ offset: 8, span: 26 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}>
              Войти
            </Button>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Link to={routesPath.signup}>Регистрация</Link>
          </Form.Item>
        </Form>
      </Typography>
    </Modal>
  );
};
