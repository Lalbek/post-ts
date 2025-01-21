import { Button, Form, Input, Modal, Upload } from "antd";
import { useState } from "react";

import { FormProps } from "antd/es/form/Form";
import usePostStore from "../../PostStore/usePostStore";
import { UploadOutlined } from "@ant-design/icons";

type Formdata = {
  creator: string;
  body: string;
  updatedAt: string;
  image: string;
};

const convertToBase64 = (file: any) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export default function PostFormModal() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const addPost = usePostStore((state) => state.addPost);
  const [previewImage, setPreviewImage] = useState<string>("");

  const handlePreview = async (e: any) => {
    const imageBase64 = (await convertToBase64(e.file.originFileObj)) as string;
    console.log("file ", imageBase64);
    setPreviewImage(imageBase64);
  };

  const onFinish: FormProps<Formdata>["onFinish"] = async (values) => {
    console.log("values ", values);
    values.image = previewImage;
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
        <Button
          type="text"
          style={{
            border: "1px solid grey",
            borderRadius: "20px",
            width: "400px",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "flex",
          }}
          size="large"
          onClick={showModal}
        >
          New Posts
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
              name="body"
              rules={[
                { required: true, message: "Please input post content!" },
              ]}
            >
              <TextArea
                autoSize={{ minRows: 10, maxRows: 15 }}
                placeholder="What do you want to talk about?"
              />
            </Form.Item>
            <Upload onChange={handlePreview} maxCount={1}>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>{" "}
            <br />
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
