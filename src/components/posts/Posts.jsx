import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../redux/actions/postActions";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="mx-auto flex flex-col justify-center pt-3">
      {posts &&
        posts.map((post) => (
          <Post
            title={post.title}
            description={post.description}
            image={post.image}
            petId={post.petId}
            key={post.id}
          ></Post>
        ))}
    </div>
  );
};

export default Posts;
