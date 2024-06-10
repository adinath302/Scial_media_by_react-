import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/Post-List-store";

const Post = ({ posts }) => {
  const { deletepost } = useContext(PostList);

  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {posts.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete"
            onClick={() => deletepost(posts.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{posts.body}</p>
        {posts.tags.map((tag, i) => (
          <span className="badge text-bg-primary hashtag" key={i}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          this post has been reacted by {posts.reactions} people.{" "}
        </div>
      </div>
    </div>
  );
};
export default Post;
