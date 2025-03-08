import { create } from "zustand";
import { IPost } from "../../type";
import { message } from "antd";
import axios from "axios";

interface PostStore {
  posts: IPost[];
  handleGetPosts: () => Promise<void>;
  addPost: (post: Omit<IPost, "id">) => Promise<void>;
  handleDeletePost: (id: number) => Promise<void>;
}
const apiUrl = process.env.REACT_APP_API_KEY;

const usePostStore = create<PostStore>((set) => ({
  posts: [],
  handleGetPosts: async () => {
    try {
      const res = await axios.get<IPost[]>(`${apiUrl}?_sort=updatedAt`);
      const sortedPosts = res.data.sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
      set({ posts: sortedPosts });
    } catch (error) {
      message.error("Error with Posts");
      console.error("Error fetching posts:", error);
    }
  },
  handleDeletePost: async (id: number) => {
    try {
      await axios.delete<IPost>(`${apiUrl}/${id}`);
      await usePostStore.getState().handleGetPosts();
    } catch (error) {
      message.error("Error deleting");
    }
  },

  addPost: async (post) => {
    try {
      const res = await axios.post<IPost>(`${apiUrl}`, {
        ...post,
        updatedAt: new Date().toISOString(),
      });
      set((state) => ({
        posts: [res.data, ...state.posts],
      }));
      message.success("Post created successfully!");
    } catch (error) {
      message.error("Error with posting");
      console.error("Error adding post:", error);
    }
  },
}));

export default usePostStore;
