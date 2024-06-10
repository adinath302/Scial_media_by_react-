import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addpost: () => {},
  deletepost: () => {},
});

const PostListReducer = (CurrentPostList, action) => {
  let newPostList = CurrentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = CurrentPostList.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...CurrentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postlist, dispatchpostlist] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const addpost = (userid, title, body, reactions, tags) => {
    dispatchpostlist({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: title,
        body: body,
        reactions: reactions,
        userId: userid,
        tags: tags,
      },
    });
  };

  const deletepost = (postid) => {
    dispatchpostlist({
      type: "DELETE_POST",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postlist,
        addpost,
        deletepost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends , I am goin to Mumbai For my Vacation. hope to enjoy a lot. Peace out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "enjoying", "Mumbai", "travel"],
  },
  {
    id: "2",
    title: "Pass ho bhai",
    body: "4 saal ki masti ke baad bhi ho gaye pass.",
    reactions: 15,
    userId: "user-12",
    tags: ["Graduating", "Unbelievable"],
  },
];

export default PostListProvider;
