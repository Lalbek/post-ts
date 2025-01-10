import { Button, Divider, List, Typography, Upload } from "antd";
import { useEffect, useState } from "react";
import usePostStore from "../../PostStore/usePostStore";
import { UploadOutlined } from "@ant-design/icons";

export default function ListItems() {
  const posts = usePostStore((state) => state.posts);
  const handleGetPosts = usePostStore((state) => state.handleGetPosts);

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
        renderItem={(item) => (
          <List.Item>
            <div style={{ textAlign: "center", width: "100%" }}>
              <Typography.Text strong>{item.creator}</Typography.Text>
              <p>{item.body}</p>

              {item.image && (
                <img
                  src={item.image}
                  alt="Post"
                  style={{
                    maxWidth: "100%",
                    maxHeight: "200px",
                    marginTop: "1rem",
                  }}
                />
              )}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
}
