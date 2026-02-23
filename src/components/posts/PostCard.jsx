import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

const PostCard = ({ post, isComment }) => {
  return (
    <article className="card mt-6 lg:mt-8">
      <PostHeader post={post} />
      <PostBody postImg={post?.image} content={post?.content} />
      <PostAction post={post} commentCount={post?.comments?.length} />
      <PostComment post={post} isComment={isComment} />
    </article>
  );
};
export default PostCard;
