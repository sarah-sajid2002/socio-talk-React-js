import { useContext, useRef, useState } from "react";
import Styles from "./CreatePost.module.css";
import { storeItems } from "../../store/PostListStore";

const tagArr = [
  "study",
  "traveling",
  "dinner",
  "unbelievable",
  "happy",
  "sad",
  "excited",
  "music",
  "sports",
  "movies",
];

function CreatePost() {
  const titleValue = useRef("");
  const decriptionValue = useRef("");
  const reactionValue = useRef(0);
  const userIdValue = useRef(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const { addPost } = useContext(storeItems);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedTags((prevTags) => [...prevTags, value]);
    } else {
      setSelectedTags((prevTags) => prevTags.filter((tag) => tag !== value));
    }
  };
  const handleSubmit = (e) => {
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: titleValue.current.value,
        body: decriptionValue.current.value,
        userId: userIdValue.current.value,
        tags: selectedTags,
        reactions: reactionValue.current.value,
      }),
    })
      .then((res) => res.json())
      .then((obj) => addPost(e, obj));
  };

  return (
    <>
      <div className={Styles.createPost}>
        <h1 className={Styles.heading}>Create Post</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            user Id
          </label>
          <div className="col-sm-10">
            <input
              ref={userIdValue}
              type="number"
              className="form-control"
              id="inputEmail3"
              placeholder="Enter user Id"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              ref={titleValue}
              type="text"
              className="form-control"
              id="inputEmail3"
              placeholder="Enter Title"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <textarea
              ref={decriptionValue}
              className="form-control"
              id="inputPassword3"
              placeholder="Description..."
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            reactions
          </label>
          <div className="col-sm-10">
            <input
              ref={reactionValue}
              type="number"
              placeholder="enter reactions"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className={Styles.tagsForm}>
          <h6>Choose Tag:</h6>
          {tagArr.map((tag, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={tag}
                name={tag}
                value={tag}
                onChange={handleCheckboxChange}
                checked={selectedTags.includes(tag)}
              />
              <label htmlFor={tag}>{tag}</label>
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => handleSubmit(e)}
        >
          Done ✔
        </button>
      </div>
    </>
  );
}

export default CreatePost;
