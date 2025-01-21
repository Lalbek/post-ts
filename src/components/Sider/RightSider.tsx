import { Layout } from "antd";
import React from "react";
const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#E3BC9A ",
  border: "none",
};
export default function RightSider() {
  return <Layout.Sider style={siderStyle}>Right Side </Layout.Sider>;
}
