import { createContext, useReducer, useState, useEffect } from "react";
export const storeItems = createContext({
  postListData: [],
  addPost: () => {},
  deletePost: () => {},
  loading: false,
});
// ======reducer========
function reducer(prevList, action) {
  let newArr;
  switch (action.type) {
    case "DELETE_POST":
      newArr = prevList.filter((item) => {
        return item.id !== action.index;
      });
      break;
    case "ADD_POST":
      newArr = [action.payload, ...prevList];
      break;
    case "ADD_FETCH_POSTS":
      newArr = action.posts;
      break;
    default:
      newArr = prevList;
  }
  return newArr;
}
// ======main work=========
function postListDataStore({ children }) {
  // useEffect
  const [loading, setLoading] = useState(false);

  // handling reducer state
  const [postListData, dispatchpostListData] = useReducer(reducer, []);
  function addPost(e, post) {
    e.preventDefault();
    dispatchpostListData({
      type: "ADD_POST",
      payload: post,
    });
  }
  function deletePost(id) {
    dispatchpostListData({
      type: "DELETE_POST",
      index: id,
    });
  }
  function addFecthPosts(posts) {
    dispatchpostListData({ type: "ADD_FETCH_POSTS", posts });
  }
  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addFecthPosts(obj.posts);
        setLoading(false);
      });
    return () => {
      console.log("clean up function for fetching data from server");
      controller.abort();
    };
  }, []);
  return (
    <>
      <storeItems.Provider
        value={{
          postListData,
          addPost,
          deletePost,
          loading,
        }}
      >
        {children}
      </storeItems.Provider>
    </>
  );
}

export default postListDataStore;
