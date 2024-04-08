import { useContext } from "react";
// Icons
import { FaLaugh } from "react-icons/fa";
import { FaRegSadTear } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import styles from "./Post.module.css";

import { storeItems } from "../../store/PostListStore";

function Post({ post }) {
  const { deletePost } = useContext(storeItems);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <span className={styles.deleteOption}>
          <MdDelete onClick={() => deletePost(post.id)} />
        </span>

        <div className="card-body">
          <h6 className={styles.cardTitle}>{post.title}</h6>

          <p className={styles.cardText}>{post.body}</p>
          <div className={styles.tagDiv}>
            {post.tags.map((tagValus, index) => (
              <span
                key={index}
                className={`${styles.tagBadges} badge text-bg-primary`}
              >
                {`# ${tagValus}`}
              </span>
            ))}
          </div>

          <div className={styles.reactionsDiv}>
            <FaRegThumbsUp />
            <FaLaugh />
            <FaRegSadTear />
            <FaHeart />
            <span className="rounded  my-2 mx-2">{post.reactions}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
