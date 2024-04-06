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
    addPost(
      e,
      titleValue.current.value,
      decriptionValue.current.value,
      selectedTags
    );
    titleValue.current.value = "";
    decriptionValue.current.value = "";
  };

  return (
    <>
      <div className={Styles.createPost}>
        <h1 className={Styles.heading}>Create Post</h1>
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
