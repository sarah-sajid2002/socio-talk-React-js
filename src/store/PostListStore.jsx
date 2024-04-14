import { createContext, useReducer, useState, useEffect } from "react";
export const storeItems = createContext({
  postListData: [],
  addPost: () => {},
  deletePost: () => {},
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

  return (
    <>
      <storeItems.Provider
        value={{
          postListData,
          addPost,
          deletePost,
        }}
      >
        {children}
      </storeItems.Provider>
    </>
  );
}

export default postListDataStore;
