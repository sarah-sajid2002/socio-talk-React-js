import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { storeItems } from "../../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
import Loader from "../loader/Loader";
import { useLoaderData } from "react-router-dom";
function PostList() {
  const postListData = useLoaderData();

  return (
    <>
      <h1 className={styles.heading}>Posts</h1>
      <div className={styles.postsDiv}>
        {postListData.length === 0 && <WelcomeMessage />}
        {postListData.map((value, index) => (
          <Post key={index} post={value} />
        ))}
      </div>
    </>
  );
}

export default PostList;
