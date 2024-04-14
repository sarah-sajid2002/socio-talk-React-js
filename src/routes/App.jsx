import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar/Sidebar";
import "./App.css";
import { useState } from "react";

import PostListStore from "../store/PostListStore";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <PostListStore>
        <div className="body">
          <div className="sideDiv">
            <Sidebar />
          </div>
          <div className="mainDiv">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </PostListStore>
    </>
  );
}

export default App;
