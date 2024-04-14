import { Link } from "react-router-dom";
import styles from "../sidebar/Sidebar.module.css";
import { useState } from "react";

function Sidebar() {
  const [selectedTab, setSelectedTab] = useState("home");
  return (
    <>
      <div
        className={`${styles.sidebar}  d-flex flex-column flex-shrink-0 p-3 text-bg-dark`}
        style={{ width: 200 }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">React Post Hub</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item" onClick={() => setSelectedTab("home")}>
            <Link
              to="/"
              className={`nav-link  text-white ${
                selectedTab === "home" && "active"
              }`}
              aria-current="page"
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Home
            </Link>
          </li>
          <li onClick={() => setSelectedTab("create post")}>
            <Link
              to="/create-post"
              className={`nav-link  text-white ${
                selectedTab === "create post" && "active"
              }`}
            >
              <svg className="bi pe-none me-2" width={16} height={16}>
                <use xlinkHref="#speedometer2" />
              </svg>
              Create Post
            </Link>
          </li>
          <hr />
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
