import { Button, Divider, Dropdown, List, Tooltip, Typography } from "antd";
import { useEffect } from "react";
import usePostStore from "../../PostStore/usePostStore";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { IPost } from "../../../type";

export default function ListItems() {
  const posts = usePostStore((state) => state.posts);
  const handleGetPosts = usePostStore((state) => state.handleGetPosts);
  const handleDeletePost = usePostStore((state) => state.handleDeletePost);

  const items = (item: IPost) => [
    {
      key: "delete",
      label: (
        <span>
          <Tooltip title="Delete" placement="right">
            <DeleteOutlined />
          </Tooltip>
        </span>
      ),
      onClick: () => {
        handleDeletePost(item.id);
      },
    },
    {
      key: "edit",
      label: (
        <span>
          <Tooltip title="Edit" placement="right">
            <EditOutlined />
          </Tooltip>
        </span>
      ),
      onClick: () => {},
    },
  ];

  useEffect(() => {
    handleGetPosts();
  }, [handleGetPosts]);

  return (
    <div>
      <Divider orientation="left">Posts:</Divider>
      <List
        size="small"
        bordered
        dataSource={posts}
        renderItem={(item: IPost) => (
          <List.Item key={item.id}>
            <div
              style={{
                width: "100%",
              }}
            >
              <Typography.Text strong>{item.creator}</Typography.Text>

              <Dropdown menu={{ items: items(item) }} placement="bottom">
                <Button
                  size="large"
                  type="text"
                  style={{ borderRadius: "40px", left: "450px" }}
                >
                  <EllipsisOutlined style={{ fontSize: "20px" }} />
                </Button>
              </Dropdown>
              <br />

              {item.image && (
                <img
                  src={item.image}
                  alt="Post"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "400px",
                    marginTop: "1rem",
                    borderRadius: "15px",
                  }}
                />
              )}
              <p style={{ fontSize: "18px" }}>{item.body}</p>
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
