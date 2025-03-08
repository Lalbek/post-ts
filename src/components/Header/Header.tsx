import {
  AudioFilled,
  AuditOutlined,
  BellFilled,
  BellOutlined,
  FileSearchOutlined,
  HomeFilled,
  HomeOutlined,
  LogoutOutlined,
  MessageFilled,
  MessageOutlined,
  SecurityScanFilled,
} from "@ant-design/icons";
import {
  Button,
  Flex,
  Layout,
  Popconfirm,
  PopconfirmProps,
  Tooltip,
  message,
} from "antd";
import React from "react";
const headerStyle: React.CSSProperties = {
  width: "100%",
  textAlign: "center",
  height: 60,
  padding: "2rem",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  color: "white",
  background: " linear-gradient(to right, #000000, #434343)",
  position: "fixed",
  zIndex: 1000,
  top: 0,
};

const headerButtonStyle: React.CSSProperties = {
  color: "white",
  border: "none",
  margin: " 10px",
  background: "transparent",
};
export default function Header() {
  const confirm: PopconfirmProps["onConfirm"] = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <Layout.Header style={headerStyle}>
      <h1>Add Your Posts</h1>
      <div>
        <Tooltip title="Home">
          <Button style={headerButtonStyle}>
            <HomeFilled style={{ fontSize: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Jobs">
          <Button style={headerButtonStyle}>
            <SecurityScanFilled style={{ fontSize: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Notifications">
          <Button style={headerButtonStyle}>
            <BellFilled style={{ fontSize: "20px" }} />
          </Button>
        </Tooltip>
        <Tooltip title="Messages">
          <Button style={headerButtonStyle}>
            <MessageFilled style={{ fontSize: "20px" }} />
          </Button>
        </Tooltip>
        <Popconfirm
          title="Delete the task"
          description="Are you sure you want to Log out?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Tooltip title="Log Out">
            <Button style={headerButtonStyle}>
              <LogoutOutlined style={{ fontSize: "20px" }} />
            </Button>
          </Tooltip>
        </Popconfirm>
      </div>
    </Layout.Header>
  );
}
