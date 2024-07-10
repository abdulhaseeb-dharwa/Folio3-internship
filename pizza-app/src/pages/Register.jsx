import React from "react";
import Menu from "../components/Menu";
import "../components/Login.css";
import { Row, Col, Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

export default function Register() {
  const onFinish = (values) => {
    console.log("Registered Successfully:", values);
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
            <h1 className="login-title">Register User</h1>
            <Form
              name="register"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter Name" />
              </Form.Item>
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
                hasFeedback
              >
                <Input.Password placeholder="Enter Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Confirm Password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-button"
                block
              >
                REGISTER
              </Button>
              <div className="login-link-container">
                <Link to="/login" className="login-link">
                  Already Registered? Click Here To Login
                </Link>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </>
  );
}
