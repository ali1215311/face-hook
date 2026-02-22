import { useAvatar } from "../../hooks/useAvatar";
import PostCommentsList from "./PostCommentsList";

const PostComment = ({ post }) => {
  const avatar = useAvatar(post);
  const comments = post?.comments;
  return (
    <>
      <div>
        <div className="flex-center mb-3 gap-2 lg:gap-4">
          <img
            className="max-h-7 max-w-7 rounded-full lg:max-h-8.5 lg:max-w-8.5"
            src={avatar}
            alt={post?.author?.name}
          />

          <div className="flex-1">
            <input
              type="text"
              className="bg-lighterDark h-8 w-full rounded-full px-4 text-xs focus:outline-none sm:h-9.5"
              name="post"
              id="post"
              placeholder="What's on your mind?"
            />
          </div>
        </div>
        <div className="mt-4">
          {comments.length > 0 ? (
            <button className="text-gray-300 max-md:text-sm">
              All Comment ▾
            </button>
          ) : (
            <p className="text-center text-gray-300 max-md:text-sm">
              No comments yet!
            </p>
          )}
        </div>
        <div className="divide-lighterDark space-y-4 divide-y pl-2 lg:pl-3">
          {comments &&
            comments.map((comment) => (
              <PostCommentsList key={comment?.id} comment={comment} />
            ))}
        </div>
      </div>
    </>
  );
};
export default PostComment;
