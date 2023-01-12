import { useEffect, useState } from "react";
import Card from "./Card/Card";
import { getPosts } from "../../redux/actions/postActions";
import { useDispatch, useSelector } from "react-redux";

export default function () {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);
  return (
    <div className="grid  w-full grid-cols-1 justify-center gap-4 p-2  md:grid-cols-2 lg:grid-cols-3">
      {posts.length !== 0 &&
        posts.map((post) => (
          <Card key={post.id} title={post.title} image={post.image} />
        ))}
    </div>
  );
}
