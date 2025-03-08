import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Input, Layout, Form } from "antd";
import Card from "antd/es/card/Card";
import React from "react";
import { Link } from "react-router-dom";
const loginContainer: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  background: "linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)",
};
export default function Login() {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <Layout style={loginContainer}>
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
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit" size="large">
              Log in
            </Button>
            Don't have an account? <Link to="/register"> Register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
}
