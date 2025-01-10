import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";

import { FormProps } from "antd/es/form/Form";
import usePostStore from "../../PostStore/usePostStore";
import { UploadOutlined } from "@ant-design/icons";
type Formdata = {
  creator: string;
  body: string;
  updatedAt: string;
  image: string;
};

export default function PostFormModal() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const addPost = usePostStore((state) => state.addPost);

  const onFinish: FormProps<Formdata>["onFinish"] = async (values) => {
    await addPost(values);
    setIsModalOpen(false);
    form.resetFields();
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
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
          footer={null}
        >
          <Form form={form} onFinish={onFinish}>
            <Form.Item
              label="Poster name"
              name="creator"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input style={{ marginBottom: "1rem" }} />
            </Form.Item>

            <Form.Item
              label="Poster name"
              name="body"
              rules={[
                { required: true, message: "Please input post content!" },
              ]}
            >
              <TextArea autoSize={{ minRows: 10, maxRows: 15 }} />
            </Form.Item>

            <Form.Item
              label="Image"
              name="image"
              rules={[{ required: true, message: "Please input your image!" }]}
            >
              <Input type="file" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Post
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
}
