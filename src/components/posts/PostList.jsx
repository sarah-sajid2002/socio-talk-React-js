import { useContext } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { storeItems } from "../../store/PostListStore";
function PostList() {
  const { postListData } = useContext(storeItems);
  return (
    <>
      <h1 className={styles.heading}>Posts</h1>
      <div className={styles.postsDiv}>
        {postListData.map((value, index) => (
          <Post key={index} post={value} />
        ))}
      </div>
    </>
  );
}

export default PostList;
