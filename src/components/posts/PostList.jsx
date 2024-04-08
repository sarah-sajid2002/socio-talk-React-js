import { useContext } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { storeItems } from "../../store/PostListStore";
import WelcomeMessage from "./WelcomeMessage";
function PostList() {
  const { postListData, addFecthPosts } = useContext(storeItems);
  function handleClick() {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => addFecthPosts(obj.posts));
  }
  return (
    <>
      <h1 className={styles.heading}>Posts</h1>
      <div className={styles.postsDiv}>
        {postListData.length === 0 ? (
          <WelcomeMessage handleClick={handleClick} />
        ) : (
          postListData.map((value, index) => <Post key={index} post={value} />)
        )}
      </div>
    </>
  );
}

export default PostList;
