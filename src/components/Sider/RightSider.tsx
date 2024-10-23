import { Layout } from "antd";
import React from "react";
const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};
export default function RightSider() {
  return <Layout.Sider style={siderStyle}>Right Side </Layout.Sider>;
}
