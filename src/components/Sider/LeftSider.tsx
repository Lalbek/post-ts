import { Layout } from "antd";
import React from "react";
const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#E3BC9A ",
};
export default function LeftSider() {
  return <Layout.Sider style={siderStyle}>Left Side </Layout.Sider>;
}
