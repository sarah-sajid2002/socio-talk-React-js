import { useContext } from "react";
import Styles from "./CreatePost.module.css";
import { storeItems } from "../../store/PostListStore";
import { Form, redirect } from "react-router-dom";
function CreatePost() {
  const { addPost } = useContext(storeItems);
  return (
    <>
      <Form method="POST" className={Styles.createPost}>
        <h1 className={Styles.heading}>Create Post</h1>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            user Id
          </label>
          <div className="col-sm-10">
            <input
              name="userId"
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
              name="title"
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
              name="body"
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
              type="number"
              name="reactions"
              placeholder="enter reactions"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
            Tags
          </label>
          <div className="col-sm-10">
            <input
              type="text  "
              name="tags"
              placeholder="enter Tags"
              className="form-control"
              id="inputPassword3"
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Done ✔
        </button>
      </Form>
    </>
  );
}
export const formSubmitRouter = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((obj) => {
      addPost(obj);
    });
  return redirect("/");
};
export default CreatePost;
