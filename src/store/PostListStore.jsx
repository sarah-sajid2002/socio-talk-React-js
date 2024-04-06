import { createContext, useReducer, useState } from "react";
export const storeItems = createContext({
  postListData: [],
  addPost: () => {},
  deletePost: () => {},
  increaseReactions: () => {},
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
      if (action.payload.title && action.payload.description) {
        newArr = [action.payload, ...prevList];
        break;
      }

    default:
      newArr = prevList;
  }
  return newArr;
}

function postListDataStore({ children }) {
  const [postListData, dispatchpostListData] = useReducer(reducer, []);
  const [reactState, setReactState] = useState(0);
  function addPost(e, title, description, tags) {
    e.preventDefault();
    dispatchpostListData({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        description,
        noOfReactions: reactState,
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

  function increaseReactions() {
    setReactState(reactState + 1);
  }

  return (
    <storeItems.Provider
      value={{
        postListData,
        addPost,
        deletePost,
        increaseReactions,
        reactState,
        setReactState,
      }}
    >
      {children}
    </storeItems.Provider>
  );
}

export default postListDataStore;
