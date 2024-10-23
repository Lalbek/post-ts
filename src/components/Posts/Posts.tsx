import { Button, Input, Layout, Modal, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { IPost } from "../../type";
import ListItems from "./ListItems/ListItems";

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: "calc(100vh - 60px)",
  lineHeight: "120px",
  color: "#fff",
  padding: "1rem",
};
const { TextArea } = Input;

function Posts() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [value, setValue] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  async function handleAddPost() {
    try {
      const res = await axios.post<IPost>("http://localhost:3001/posts", {
        body: value,
      });
    } catch (error) {
      message.error("Error with posting");
    }
  }

  return (
    <Layout.Content style={contentStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          height: 70,
          paddingBottom: 20,
        }}
      >
        <Button type="primary" onClick={showModal}>
          Add Post
        </Button>
        <Modal
          title="Add Some Posts"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={
            <Button type="primary" onClick={handleOk}>
              Post
            </Button>
          }
        >
          <Input
            placeholder="Poster name"
            style={{ marginBottom: "1rem" }}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextArea autoSize={{ minRows: 10, maxRows: 15 }} />
        </Modal>
      </div>
      <ListItems />
    </Layout.Content>
  );
}

export default Posts;
