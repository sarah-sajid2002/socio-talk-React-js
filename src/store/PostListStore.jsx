import { createContext, useReducer, useState } from "react";
export const storeItems = createContext({
  postListData: [],
  addPost: () => {},
  deletePost: () => {},
  addFecthPosts: () => {},
});

function reducer(prevList, action) {
  let newArr;
  switch (action.type) {
    case "DELETE_POST":
      newArr = prevList.filter((item) => {
        return item.id !== action.index;
      });
      break;
    case "ADD_POST":
      if (action.payload.title && action.payload.body) {
        newArr = [action.payload, ...prevList];
        break;
      }
    case "ADD_FETCH_POSTS":
      newArr = action.posts;
      break;
    default:
      newArr = prevList;
  }
  return newArr;
}

function postListDataStore({ children }) {
  const [postListData, dispatchpostListData] = useReducer(reducer, []);
  function addPost(e, title, body, tags) {
    e.preventDefault();
    dispatchpostListData({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions: 0,
        user: "user - 09",
        tags,
      },
    });
  }
  function deletePost(id) {
    dispatchpostListData({
      type: "DELETE_POST",
      index: id,
    });
  }

  function addFecthPosts(posts) {
    dispatchpostListData({
      type: "ADD_FETCH_POSTS",
      posts,
    });
  }

  return (
    <storeItems.Provider
      value={{
        postListData,
        addPost,
        deletePost,
        addFecthPosts,
      }}
    >
      {children}
    </storeItems.Provider>
  );
}

export default postListDataStore;
