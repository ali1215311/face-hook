import PostCard from "./PostCard";

const PostList = ({ posts, isComment }) => {
  return (
    <>
      {!!posts &&
        posts.map((post) => (
          <PostCard key={post?.id} post={post} isComment={isComment} />
        ))}
    </>
  );
};
export default PostList;
