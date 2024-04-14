import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost, {
  formSubmitRouter,
} from "./components/create post/CreatePost.jsx";
import PostList from "./components/posts/PostList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostList />,
        loader: async () => {
          const res = await fetch("https://dummyjson.com/posts");
          const obj = await res.json();
          return obj.posts;
        },
      },
      {
        path: "/create-post",
        element: <CreatePost />,
        action: formSubmitRouter,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
