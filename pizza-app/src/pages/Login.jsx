import React from "react";
import "../components/Login.css";
import Menu from "../components/Menu";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Menu />
      <Row align="middle" justify="center" className="login-row">
        <Col xs={24} sm={16} md={12} lg={8} xl={6}>
          <div className="login-container">
            <h1 className="login-title">Login</h1>
            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Enter Email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                block
              >
                LOGIN
              </Button>
            </Form>
            <div className="login-link-container">
              <Link to="/register" className="login-link">
                Click Here To Register
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
