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
  const { deletePost, setReactState, reactState } = useContext(storeItems);

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <span className={styles.deleteOption}>
          <MdDelete onClick={() => deletePost(post.id)} />
        </span>

        <div className="card-body">
          <h5 className={styles.cardTitle}>{post.title}</h5>

          <p className={styles.cardText}>{post.description}</p>
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

          <div
            className={styles.reactionsDiv}
            onClick={() => setReactState(reactState + 1)}
          >
            <FaRegThumbsUp />
            <FaLaugh />
            <FaRegSadTear />
            <FaHeart />
            <span className="rounded  my-2 mx-2">{post.noOfReactions}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
