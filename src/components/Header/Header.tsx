import { Layout } from "antd";
import React from "react";
const headerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "3rem",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  color: "white",
};
export default function Header() {
  return (
    <Layout.Header style={headerStyle}>
      <h1>Add Your Posts</h1>
    </Layout.Header>
  );
}
