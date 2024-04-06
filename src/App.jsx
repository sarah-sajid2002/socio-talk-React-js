import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import PostList from "./components/posts/PostList";
import CreatePost from "./components/create post/CreatePost";
import { useState } from "react";

import PostListStore from "./store/PostListStore";
function App() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <PostListStore>
        <div className="body">
          <div className="sideDiv">
            <Sidebar
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </div>
          <div className="mainDiv">
            <Header />
            {selectedTab === "home" ? <PostList /> : <CreatePost />}
            <Footer />
          </div>
        </div>
      </PostListStore>
    </>
  );
}

export default App;
