import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import Layout from "antd/es/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
const registerContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
};

export default function Register() {
  return (
    <Layout style={registerContainer}>
      {" "}
      <Card
        title="Sign Up"
        style={{
          width: "400px",
          textAlign: "center",
          padding: "20px",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
          background: "#E6E6E6",
        }}
      >
        <Form
          name="Login"
          style={{ maxWidth: 360 }}
          // onFinish={onFinish}
          // initialValues={{ remember: true }}
        >
          <Form.Item
            name="mobile number"
            rules={[
              { required: true, message: "Please input your number or email!" },
            ]}
          >
            <Input placeholder="Mobile Number or Email" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input type="password" placeholder="Password" size="large" />
          </Form.Item>
          <Form.Item
            name="full name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Full Name" size="large" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input placeholder="Username" size="large" />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>
                  I have read the <a href="">agreement</a>
                </Checkbox>
              </Form.Item>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" size="large">
              Sign up
            </Button>
            Have an account? <Link to="/login">Log in</Link>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}
