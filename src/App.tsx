import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import { Layout } from "antd";
import Posts from "./components/Posts/Posts";
import LeftSider from "./components/Sider/LeftSider";
import RightSider from "./components/Sider/RightSider";
import Register from "./pages/Register/Register";
import Login from "./pages/Register/Login";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Header />
                <LeftSider />
                <Posts />
                <RightSider />
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
