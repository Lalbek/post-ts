import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import PostFormModal from "./PostFormModal/PostFormModal";
import ListItems from "./ListItems/ListItems";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  lineHeight: "120px",
  color: "#fff",
  padding: "1rem",
  paddingTop: "80px",
  backgroundColor: "#E2E1DF",
};

function Posts() {
  return (
    <Layout.Content style={contentStyle}>
      <PostFormModal />
      <ListItems />
    </Layout.Content>
  );
}

export default Posts;
