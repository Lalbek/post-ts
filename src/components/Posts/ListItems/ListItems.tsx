import { Divider, List, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { IPost } from "../../../type";
import axios from "axios";

export default function ListItems() {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    handleGetPosts();
  }, []);
  async function handleGetPosts() {
    try {
      const res = await axios.get<IPost[]>("http://localhost:3001/posts");
      setPosts(res.data);
    } catch (error) {
      message.error("Error with Posts");
    }
  }
  return (
    <div>
      <List
        size="small"
        bordered
        dataSource={posts}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark>{item.creator}</Typography.Text>
            <p>{item.body}</p>
          </List.Item>
        )}
      />
    </div>
  );
}
