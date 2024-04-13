import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { storeItems } from "../../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "../loader/Loader";
function PostList() {
  const { postListData, loading } = useContext(storeItems);

  return (
    <>
      {loading && <Loader />}
      <h1 className={styles.heading}>Posts</h1>
      <div className={styles.postsDiv}>
        {!loading && postListData.length === 0 && <WelcomeMessage />}
        {!loading &&
          postListData.map((value, index) => <Post key={index} post={value} />)}
      </div>
    </>
  );
}

export default PostList;
