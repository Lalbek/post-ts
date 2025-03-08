import { Layout } from "antd";
import React from "react";
const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  background: "linear-gradient(to right, #000428, #004e92)",
  paddingTop: "80px",
};
export default function RightSider() {
  return <Layout.Sider style={siderStyle}>RightSider</Layout.Sider>;
}
