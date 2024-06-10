import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-List-store";

const PostList = () => {
  const { postlist } = useContext(PostListData);
  return (
    <>
      {postlist.map((posts) => (
        <Post key={posts.id} posts={posts} />
      ))}
    </>
  );
};
export default PostList;
