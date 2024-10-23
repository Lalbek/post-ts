import Header from "./components/Header/Header";
import { Layout } from "antd";

import Posts from "./components/Posts/Posts";
import LeftSider from "./components/Sider/LeftSider";
import RightSider from "./components/Sider/RightSider";

function App() {
  return (
    <Layout>
      <Header />
      <Layout>
        <LeftSider />
        <Posts />
        <RightSider />
      </Layout>
    </Layout>
  );
}

export default App;
